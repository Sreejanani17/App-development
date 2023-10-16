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
public class AuthenticationResponse {
	
    private String token;
    private Long uid;
    private String email;
    private String name;
    private Role role;
    private Long phno;    
    private String address;
}