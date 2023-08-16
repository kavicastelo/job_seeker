package com.example.job_seeker.repository;

import com.example.job_seeker.model.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepository extends MongoRepository<Appointment, String> {
}
