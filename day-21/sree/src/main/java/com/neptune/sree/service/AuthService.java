package com.neptune.sree.service;

import com.neptune.sree.dto.request.AuthenticationRequest;
import com.neptune.sree.dto.request.RegisterRequest;
import com.neptune.sree.dto.response.AuthenticationResponse;

public interface AuthService {

	boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}