package com.example.job_seeker.service;

import com.example.job_seeker.repository.ConsultantRepositoryTests;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Getter

@Service
public class ConsultantServiceTests {
    private final ConsultantRepositoryTests consultantRepositoryTests;
    public static MongoTemplate mongoTemplate;

    @Autowired
    public ConsultantServiceTests(ConsultantRepositoryTests consultantRepositoryTests, MongoTemplate mongoTemplate) {
        this.consultantRepositoryTests = consultantRepositoryTests;
        this.mongoTemplate = mongoTemplate;
    }
}
