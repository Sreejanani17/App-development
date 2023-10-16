package com.neptune.sree.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.sree.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    void deleteByUserUid(Long uid);

    List<Order> findAllByUserUid(Long uid);

}