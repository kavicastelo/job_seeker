package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponseTests;
import com.example.job_seeker.DTO.PasswordDTOTests;
import com.example.job_seeker.model.loginInfoTests;
import com.example.job_seeker.repository.LoginInfoRepositoryTests;
import com.example.job_seeker.service.ConsultantServiceTests;
import com.example.job_seeker.service.EmailServiceTests;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class LoginInfoControllerTests {

    @Autowired
    private LoginInfoRepositoryTests loginInfoRepositoryTests;

    @Autowired
    private EmailServiceTests emailServiceTests;

    @PostMapping("/api/v1/addConsultant")
    public ResponseEntity<ApiResponseTests> saveLoginInfo(@RequestBody loginInfoTests logininfo) {
        loginInfoRepositoryTests.save(logininfo);

        String to = logininfo.getEmail();
        String subject = "Request Approved";
        String text = "Welcome to our community!\nWe are happy to have you. Please use following credentials to login.\n\nUsername: " + logininfo.getEmail() + "\nPassword: " + logininfo.getPassword()+"\n\nDo you have any questions? support@jobseeker.com";
        emailServiceTests.sendSimpleEmail(to, subject, text);

        ApiResponseTests response = new ApiResponseTests("Saved successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getConsultantByEmail/{email}")
    public ResponseEntity<loginInfoTests> findByEmail(@PathVariable String email) {
        Optional<loginInfoTests> consultant = loginInfoRepositoryTests.findOneByEmail(email);

        return consultant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.ok(null));
    }

    @PutMapping("/api/v1/updateAuth/{email}")
    public ResponseEntity<ApiResponseTests> updateAuth(@PathVariable String email, @RequestBody PasswordDTOTests dto) {
        Query query = new Query(Criteria.where("email").is(email));
        Update update = new Update().set("password", dto.getPassword());

        UpdateResult result = ConsultantServiceTests.mongoTemplate.updateFirst(query, update, loginInfoTests.class);

        if (result.getModifiedCount() > 0) {
            ApiResponseTests response = new ApiResponseTests("Credentials updated successfully");
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.ok(null);
        }
    }
}
