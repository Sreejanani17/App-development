package com.neptune.sree.service;

import java.util.List;

import com.neptune.sree.dto.request.OrderRequest;
import com.neptune.sree.dto.response.CountResponse;
import com.neptune.sree.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();

}