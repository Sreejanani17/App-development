package com.neptune.sree.service;

import java.util.List;

import com.neptune.sree.dto.request.ArtRequest;
import com.neptune.sree.dto.response.ArtResponse;
import com.neptune.sree.dto.response.CountResponse;
import com.neptune.sree.dto.response.UserResponse;
import com.neptune.sree.model.Art;

public interface ArtService {

	boolean saveArt(ArtRequest artRequest);

	List<ArtResponse> getAllArt();

	ArtResponse updateArt(ArtRequest artRequest, Long aid);

	boolean deleteArt(Long aid);

	ArtResponse getArt(Long aid);

	CountResponse artCount();

//	Art getArtModelId(long aid);

}