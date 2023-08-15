package com.example.job_seeker.service;

import com.example.job_seeker.repository.ConsultantRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Getter

@Service
public class ConsultantService {
    private final ConsultantRepository consultantRepository;
    public static MongoTemplate mongoTemplate;

    @Autowired
    public ConsultantService(ConsultantRepository consultantRepository, MongoTemplate mongoTemplate) {
        this.consultantRepository = consultantRepository;
        this.mongoTemplate = mongoTemplate;
    }
}
