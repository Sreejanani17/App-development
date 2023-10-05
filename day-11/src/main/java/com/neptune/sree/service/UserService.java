package com.neptune.sree.service;

import java.util.List;

import com.neptune.sree.dto.request.UserRequestDto;
import com.neptune.sree.dto.response.UserResponseDto;

public interface UserService {

//	boolean saveUser(UserRequestDto userRequest);
//
//	List<UserResponseDto> getAllUser();
//
//	UserResponseDto updateUser(UserRequestDto userRequest, int id);
//
//	boolean deleteUser(int id);
	boolean saveUser(UserRequestDto userRequest);

	List<UserResponseDto> getAllUser();

	UserResponseDto updateUser(UserRequestDto userRequest, int id);

	boolean deleteUser(int id);
	

	
}