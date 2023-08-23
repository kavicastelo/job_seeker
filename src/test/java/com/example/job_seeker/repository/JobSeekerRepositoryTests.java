package com.example.job_seeker.repository;
import com.example.job_seeker.model.JobSeekerTests;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface JobSeekerRepositoryTests extends MongoRepository<JobSeekerTests, Integer> {
    Optional<JobSeekerTests> deleteByEmail(String email);
}
