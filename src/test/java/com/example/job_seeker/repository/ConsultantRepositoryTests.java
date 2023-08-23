package com.example.job_seeker.repository;

import com.example.job_seeker.model.ConsultantTests;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ConsultantRepositoryTests extends MongoRepository<ConsultantTests, Integer> {
    Optional<ConsultantTests> findOneByEmail(String email);
    Optional<ConsultantTests> deleteByEmail(String email);
}
