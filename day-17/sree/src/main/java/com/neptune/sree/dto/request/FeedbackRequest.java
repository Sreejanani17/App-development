package com.neptune.sree.dto.request;

import com.neptune.sree.dto.response.FeedbackResponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackRequest {
    private String uname;
    private String uemail;
    private String question;
    private String answer;
}