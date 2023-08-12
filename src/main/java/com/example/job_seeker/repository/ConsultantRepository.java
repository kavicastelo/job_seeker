package com.example.job_seeker.repository;

import com.example.job_seeker.model.Consultant;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ConsultantRepository extends MongoRepository<Consultant, Integer> {
    Optional<Consultant> findOneByEmail(String email);
    Optional<Consultant> deleteByEmail(String email);
}
