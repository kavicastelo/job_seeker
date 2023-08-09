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

public class Appointment {
    @Id
    private int id;
    private int jobSeekerId;
    private String seekerName;
    private int consultantId;
    private String consultantName;
    private String scheduledDate;
    private boolean accepted;
}
