package com.neptune.sree.dto.response;

import com.neptune.sree.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
	
	private Long uid;
    private String name;
    private String email;
    private Boolean isEnabled;
    private Role role;
    private Long phno;    
    private String address;
	
}