package com.neptune.sree.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.neptune.sree.model.ContactUs;

public interface ContactUsRepository extends JpaRepository<ContactUs, Long>{
	
	ContactUs findByCid(Long cid);
	
	void deleteByCid(Long cid);
}