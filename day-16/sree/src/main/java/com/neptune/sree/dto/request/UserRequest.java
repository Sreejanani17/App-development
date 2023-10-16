package com.neptune.sree.dto.request;

import com.neptune.sree.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserRequest {
	
	private String name;
    private String email;
    private String pword;
    private Boolean isEnabled;
    private Role role;
    private Long phno;    
    private String address;
	
}