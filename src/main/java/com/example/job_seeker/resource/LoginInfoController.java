package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponse;
import com.example.job_seeker.model.loginInfo;
import com.example.job_seeker.repository.LoginInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class LoginInfoController {

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @PostMapping("/api/v1/addConsultant")
    public ResponseEntity<ApiResponse> saveLoginInfo(@RequestBody loginInfo logininfo) {
        loginInfoRepository.save(logininfo);

        ApiResponse response = new ApiResponse("Saved successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getConsultantByEmail/{email}")
    public ResponseEntity<loginInfo> findByEmail(@PathVariable String email) {
        Optional<loginInfo> consultant = loginInfoRepository.findOneByEmail(email);

        return consultant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.ok(null));
    }
}
