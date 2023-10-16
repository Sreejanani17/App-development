package com.neptune.sree.service;

import java.util.List;

import com.neptune.sree.dto.request.UserRequest;
import com.neptune.sree.dto.response.CountResponse;
import com.neptune.sree.dto.response.UserResponse;

public interface UserService {

	List<UserResponse> getAllUser();

	UserResponse updateUser(UserRequest userRequest, Long uid);

	boolean deleteUser(Long uid);

	UserResponse getUser(Long uid);

	CountResponse userCount();
	
}