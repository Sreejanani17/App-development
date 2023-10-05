package com.neptune.sree.service.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.neptune.sree.dto.request.UserRequestDto;
import com.neptune.sree.dto.response.UserResponseDto;
import com.neptune.sree.model.User;
import com.neptune.sree.repository.UserRepository;
import com.neptune.sree.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

//	@Autowired
//	private UserRepository userRepository;
//	
//	@Override
//	public boolean saveUser(UserRequestDto userRequest) {
//		Optional<User> isUserOptional = userRepository.existsByEmail(userRequest.getEmail());
//		if(isUserOptional.isPresent()) {
//			var data = User.builder()
//					.username(userRequest.getUsername())
//					.email(userRequest.getEmail())
//					.password(userRequest.getPassword())
//					.build();
//		userRepository.save(data);
//			return true;
//		} else {
//			return false;
//		}
//	}
//
//	@Override
//	public List<UserResponseDto> getAllUser() {
//        List<User> userList = userRepository.findAll();
//        List<UserResponseDto> userResponseList = new ArrayList<>();
//        UserResponseDto userResponse = new UserResponseDto();
//        for(User user : userList) {
//        	userResponse.setId(user.getId());
//        	userResponse.setUsername(user.getUsername());
//        	userResponse.setEmail(user.getEmail());
//        	userResponse.setPassword(user.getPassword());
//        	userResponseList.add(userResponse);
//        }
//		return userResponseList;
//	}
//	
//	@Override
//	public UserResponseDto updateUser(UserRequestDto userRequest, int id) {
//		Optional<User> user = userRepository.findById(id);
//		User newUser = new User();
//		if(user != null) {
//			newUser = User.builder()
//					      .username(userRequest.getUsername())
//					      .email(userRequest.getEmail())
//					      .password(userRequest.getPassword())
//					      .build();
//			userRepository.save(newUser);
//		}
//		return mapUserToUserResponse(newUser);
//	}
//	
//	@Override
//	public boolean deleteUser(int id) {
//		Optional<User> user = userRepository.findById(id);
//		if(user != null) {
//			userRepository.deleteById(id);
//			return true;
//		} else {
//			return false;
//		}
//	}
//	private UserResponseDto mapUserToUserResponse(User user) {
//        return UserResponseDto.builder()
//                .id(user.getId())
//                .username(user.getUsername())
//                .email(user.getEmail())
//                .build();
//    }
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public boolean saveUser(UserRequestDto userRequest) {
		Optional<User> isUserOptional = userRepository.existsByEmail(userRequest.getEmail());
		if(isUserOptional.isPresent()) {
			var data = User.builder()
					.username(userRequest.getUsername())
					.email(userRequest.getEmail())
					.password(userRequest.getPassword())
					.build();
		userRepository.save(data);
			return true;
		} else {
			return false;
		}
	}
	@Override
    public List<UserResponseDto> getAllUser() {
        List<User> userList = userRepository.findAll();

        return userList.stream()
                .map(this::mapToUserResponse)
                .collect(Collectors.toList());
    }
	@Override
	public UserResponseDto updateUser(UserRequestDto userRequest, int id) {
		User user = userRepository.findById(id);
		if(user != null) {
			user.setUsername(userRequest.getUsername());
			user.setEmail(userRequest.getEmail());
			user.setPassword(user.getPassword());
			
			userRepository.save(user);
			
			return mapUserToUserResponse(user);
		} else {
			throw new EntityNotFoundException("User with id "+ id+" not found");
		}
	}
	
	@Override
	public boolean deleteUser(int id) {
		User user = userRepository.findById(id);
		if(user != null) {
			userRepository.deleteById(id);
			return true;
		} else {
			return false;
		}
	}
	private UserResponseDto mapUserToUserResponse(User user) {
		return UserResponseDto.builder()
				.id(user.getId())
				.username(user.getUsername())
				.email(user.getEmail())
				.password(user.getPassword())
				.build();
				
	}
	private UserResponseDto mapToUserResponse(User user) {
        return UserResponseDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .password(user.getPassword())
                .build();
	}

}