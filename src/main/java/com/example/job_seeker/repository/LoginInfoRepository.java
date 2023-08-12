package com.example.job_seeker.repository;

import com.example.job_seeker.model.loginInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface LoginInfoRepository extends MongoRepository<loginInfo, String> {
    Optional<loginInfo> findOneByEmail(String email);
}
