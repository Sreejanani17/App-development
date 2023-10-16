package com.neptune.sree;

import org.springframework.boot.SpringApplication;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
@EnableFeignClients
@SpringBootApplication
public class SreeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SreeApplication.class, args);
	}

}
