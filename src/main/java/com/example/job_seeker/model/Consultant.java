package com.example.job_seeker.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Getter
@Setter
@ToString

@Document(collection = "consultants")

public class Consultant {
    private String country;
    private String jobCategory;
    private Object[] jobRole;
    private String name;
    private String email;
    private String phone;
    private String address;
    private List<String> unavailableDates;
    private String portfolio;
    private Boolean verified;
}
