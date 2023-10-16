package com.neptune.sree.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.sree.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
  	
	void deleteById(Long id);

	Optional<User> findByEmail(String email);

	User findByUid(Long uid);
}