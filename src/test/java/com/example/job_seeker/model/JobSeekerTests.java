package com.example.job_seeker.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "jobSeekers")

public class JobSeekerTests {
    private String email;
    private String message;
}
