package com.neptune.sree.service;

import java.util.List;

import com.neptune.sree.dto.request.ContactUsRequest;
import com.neptune.sree.dto.response.ContactUsResponse;

public interface ContactUsService {

	List<ContactUsResponse> getMsg();

	ContactUsResponse updateMsg(ContactUsRequest contactRequest, Long cid);

	boolean deleteArt(Long cid);

	boolean saveMsg(ContactUsRequest contactRequest);

}