package com.example.job_seeker.repository;

import com.example.job_seeker.model.loginInfoTests;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface LoginInfoRepositoryTests extends MongoRepository<loginInfoTests, String> {
    Optional<loginInfoTests> findOneByEmail(String email);
}
