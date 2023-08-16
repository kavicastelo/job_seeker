package com.example.job_seeker.repository;
import com.example.job_seeker.model.JobSeeker;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface JobSeekerRepository extends MongoRepository<JobSeeker, Integer> {
    Optional<JobSeeker> deleteByEmail(String email);
}
