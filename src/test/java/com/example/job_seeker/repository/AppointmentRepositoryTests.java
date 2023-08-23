package com.example.job_seeker.repository;

import com.example.job_seeker.model.AppointmentTests;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepositoryTests extends MongoRepository<AppointmentTests, String> {
}
