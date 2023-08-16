package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponse;
import com.example.job_seeker.model.loginInfo;
import com.example.job_seeker.repository.LoginInfoRepository;
import com.example.job_seeker.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class LoginInfoController {

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/api/v1/addConsultant")
    public ResponseEntity<ApiResponse> saveLoginInfo(@RequestBody loginInfo logininfo) {
        loginInfoRepository.save(logininfo);

        String to = logininfo.getEmail();
        String subject = "Request Approved";
        String text = "Welcome to our community!\nWe are happy to have you. Please use following credentials to login.\n\nUsername: " + logininfo.getEmail() + "\nPassword: " + logininfo.getPassword()+"\n\nDo you have any questions? support@jobseeker.com";
        emailService.sendSimpleEmail(to, subject, text);

        ApiResponse response = new ApiResponse("Saved successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getConsultantByEmail/{email}")
    public ResponseEntity<loginInfo> findByEmail(@PathVariable String email) {
        Optional<loginInfo> consultant = loginInfoRepository.findOneByEmail(email);

        return consultant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.ok(null));
    }
}
