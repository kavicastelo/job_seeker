package com.example.job_seeker.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "appointments")

public class AppointmentTests {
    @Id
    private String id;
    private String country;
    private String category;
    private String consultant;
    private String jobRole;
    private String name;
    private String email;
    private String date;
    private boolean approved;
}
