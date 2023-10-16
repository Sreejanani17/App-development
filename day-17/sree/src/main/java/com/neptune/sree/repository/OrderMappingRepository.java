package com.neptune.sree.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.sree.model.OrderMapping;

public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}