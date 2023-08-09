package com.example.job_seeker.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "jobSeekers")

public class JobSeeker {
    @Id
    private int id;
    private String name;
    private String email;
    private String CV;
}
