package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponseTests;
import com.example.job_seeker.DTO.UnavailableDatesDTOTests;
import com.example.job_seeker.model.ConsultantTests;
import com.example.job_seeker.repository.ConsultantRepositoryTests;
import com.example.job_seeker.service.ConsultantServiceTests;
import com.example.job_seeker.service.EmailServiceTests;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ConsultantControllerTests {

    @Autowired
    private ConsultantRepositoryTests consultantRepositoryTests;

    @Autowired
    private EmailServiceTests emailServiceTests;

    @PostMapping("/api/v1/saveConsultant")
    public ResponseEntity<ApiResponseTests> saveConsultant(@RequestBody ConsultantTests consultantTests) {
        consultantRepositoryTests.save(consultantTests);

        ApiResponseTests response = new ApiResponseTests("Saved " + consultantTests.getName() + "successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAllConsultants")
    public List<ConsultantTests> getAllConsultants() {
        return consultantRepositoryTests.findAll();
    }

    @GetMapping("/api/v1/getConsultantById/{id}")
    public Optional<ConsultantTests> getConsultantById(@PathVariable int id) {
        return consultantRepositoryTests.findById(id);
    }

//    delete consultant without email sending
    @DeleteMapping("/api/v1/deleteConsultant/{email}")
    public ResponseEntity<ApiResponseTests> deleteConsultant(@PathVariable String email) {
        consultantRepositoryTests.deleteByEmail(email);

        ApiResponseTests response = new ApiResponseTests("Delete successfully");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/api/v1/deleteConsultantByEmail/{email}")
    public ResponseEntity<ApiResponseTests> deleteConsultantByEmail(@PathVariable String email) {
        consultantRepositoryTests.deleteByEmail(email);

        String to = email.toString();
        String subject = "Account Blocked";
        String text = "Your account has been blocked. Please contact support@jobseeker.com";
        emailServiceTests.sendSimpleEmail(to, subject, text);

        ApiResponseTests response = new ApiResponseTests("Delete successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateConsultant/{id}")
    public String updateJobSeeker(@PathVariable int id, @RequestBody ConsultantTests consultantTests) {
        consultantRepositoryTests.save(consultantTests);
        return "Updated " + id + " successfully";
    }

    @GetMapping("/api/v1/getConsultant/{email}")
    public ResponseEntity<ConsultantTests> findByEmail(@PathVariable String email) {
        Optional<ConsultantTests> consultant = consultantRepositoryTests.findOneByEmail(email);

        return consultant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.ok(null));
    }

    @PutMapping("/api/v1/updateConsultantByEmail/{email}")
    public ResponseEntity<ApiResponseTests> updateConsultantByEmail(@PathVariable String email, @RequestBody ConsultantTests updatedConsultantTests) {
        Optional<ConsultantTests> existingConsultantOptional = consultantRepositoryTests.findOneByEmail(email);

        if (existingConsultantOptional.isPresent()) {
            ConsultantTests existingConsultantTests = existingConsultantOptional.get();

            existingConsultantTests.setVerified(updatedConsultantTests.getVerified());
            consultantRepositoryTests.save(existingConsultantTests); // this will save another result because email is coming with router address. I use email address to handle methods because ID handling are complex to users

            ApiResponseTests response = new ApiResponseTests("Updated consultant with email: " + email);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @PutMapping("/api/v1/setUnavailableDates/{email}")
    public ResponseEntity<ApiResponseTests> updateUnavailableDates(@PathVariable String email, @RequestBody UnavailableDatesDTOTests dto) {
        Query query = new Query(Criteria.where("email").is(email));
        Update update = new Update().set("unavailableDates", dto.getUnavailableDates());

        UpdateResult result = ConsultantServiceTests.mongoTemplate.updateFirst(query, update, ConsultantTests.class);

        if (result.getModifiedCount() > 0) {
            ApiResponseTests response = new ApiResponseTests("Unavailable dates updated successfully");
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.ok(null);
        }
    }
}
