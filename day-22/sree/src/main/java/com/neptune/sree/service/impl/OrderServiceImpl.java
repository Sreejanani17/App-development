package com.neptune.sree.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.neptune.sree.dto.info.ArtInfo;
import com.neptune.sree.dto.request.OrderRequest;
import com.neptune.sree.dto.response.CountResponse;
import com.neptune.sree.dto.response.OrderResponse;
import com.neptune.sree.repository.ArtRepository;
import com.neptune.sree.repository.OrderRepository;
import com.neptune.sree.repository.UserRepository;
import com.neptune.sree.service.ArtService;
import com.neptune.sree.service.OrderService;
import com.neptune.sree.model.Art;
import com.neptune.sree.model.Order;
import com.neptune.sree.model.OrderMapping;
import com.neptune.sree.model.User;

import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{
	
	private final UserRepository userRepository;
    private final ArtRepository artRepository;
    private final OrderRepository orderRepository;
    private final ArtService artService;
    
    @Override
    public boolean saveOrder(OrderRequest request) {
        User user = userRepository.findByUid(request.getUid());
        List<ArtInfo> artInfoList = request.getArt();
        long orderTotal = calculateOrderTotal(artInfoList);

        if (orderTotal <= 0) {
            throw new IllegalArgumentException("Order total must be greater than zero.");
        }

        try {
            Order order = createOrder(request, user, orderTotal, artInfoList);
            orderRepository.save(order);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    private Order createOrder(OrderRequest request, User user, long orderTotal, List<ArtInfo> artInfoList) {
        Order order = Order.builder()
                .orderDate(new Date())
                .orderAddress(request.getOrderAddress())
                .paymentMode(request.getPaymentMode())
                .user(user)
                .orderTotal(orderTotal)
                .orderMappings(request.getArt().stream()
                        .map(artRequest -> {
                            Art art = artService.getArtModelId(artRequest.getAid());
                            if (art != null) {
                                return OrderMapping.builder().art(art).build();
                            } else {
                                throw new IllegalArgumentException("Invalid product ID: " + artRequest.getAid());
                            }
                        })
                        .collect(Collectors.toList()))
                .build();

        updateProductQuantities(artInfoList);

        return order;
    }
    private List<Art> updateProductQuantities(List<ArtInfo> artInfoList) {
        List<Art> updatedArt = new ArrayList<>();

        for (ArtInfo artInfo : artInfoList) {
            Long artId = artInfo.getAid();
            Long quantity = artInfo.getQuantity();

            Art art = getArtOrThrow(artId);

            if (art.getArtQty() < quantity) {
                throw new IllegalArgumentException("Insufficient quantity for product ID: " + artId);
            }

            Art updateArt = createUpdatedArt(art, quantity);
            artRepository.save(updateArt);
            updatedArt.add(updateArt);
        }

        return updatedArt;
    }
    private Art getArtOrThrow(Long artId) {
        return artRepository.findById(artId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found for ID: " + artId));
    }
    private Art createUpdatedArt(Art art, Long quantity) {
        Art updatedArt = new Art();
        updatedArt.setAid(art.getAid());
        updatedArt.setArtname(art.getArtname());
        updatedArt.setArtist(art.getArtist());
        updatedArt.setPrice(art.getPrice());
        updatedArt.setArtQty(art.getArtQty() - quantity);
        updatedArt.setArtimg(art.getArtimg());
        updatedArt.setType(art.getType());
        updatedArt.setStyle(art.getStyle());
        updatedArt.setYear(art.getYear());
        updatedArt.setSize(art.getSize());

        return updatedArt;
    }
    private long calculateOrderTotal(List<ArtInfo> artInfoList) {
        return artInfoList.stream()
                .mapToLong(artInfo -> {
                    Art art = getArtOrThrow(artInfo.getAid());
                    if (art.getArtQty() < artInfo.getQuantity()) {
                        throw new IllegalArgumentException(
                                "Insufficient quantity for product ID: " +artInfo.getAid());
                    }
                    return (long) (art.getPrice() * artInfo.getQuantity());
                })
                .sum();
    }
    @Override
    public List<OrderResponse> getOrders(Long uid) {
        return convertToOrderResponse(orderRepository.findAllByUserUid(uid));
    }
    public List<OrderResponse> convertToOrderResponse(List<Order> orders) {
        return orders.stream()
                .map(order -> {
                    OrderResponse.OrderResponseBuilder builder = OrderResponse.builder()
                            .oid(order.getOid())
                            .orderDate(order.getOrderDate())
                            .orderTotal(order.getOrderTotal())
                            .orderAddress(order.getOrderAddress())
                            .paymentMode(order.getPaymentMode());

                    List<Art> art = order.getOrderMappings().stream()
                            .map(OrderMapping::getArt)
                            .collect(Collectors.toList());

                    builder.art(art);

                    return builder.build();
                })
                .collect(Collectors.toList());
    }
    @Override
    public CountResponse orderCount() {
        long count = orderRepository.count();
        return CountResponse.builder().count(count).build();
    }
}