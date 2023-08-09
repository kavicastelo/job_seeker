package com.example.job_seeker.repository;

import com.example.job_seeker.model.Consultant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConsultantRepository extends MongoRepository<Consultant, Integer> {
}
