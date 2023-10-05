package com.neptune.sree.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.sree.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
  
	Optional<User> existsByEmail(String email);
	User findById(int id);
	
	void deleteById(int id);

}