package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponse;
import com.example.job_seeker.model.Consultant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.job_seeker.repository.ConsultantRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class ConsultantController {

    @Autowired
    private ConsultantRepository consultantRepository;

    @PostMapping("/api/v1/saveConsultant")
    public ResponseEntity<ApiResponse> saveConsultant(@RequestBody Consultant consultant) {
        consultantRepository.save(consultant);

        ApiResponse response = new ApiResponse("Saved " + consultant.getName() + "successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAllConsultants")
    public List<Consultant> getAllConsultants() {
        return consultantRepository.findAll();
    }

    @GetMapping("/api/v1/getConsultantById/{id}")
    public Optional<Consultant> getConsultantById(@PathVariable int id) {
        return consultantRepository.findById(id);
    }

    @DeleteMapping("/api/v1/deleteConsultant/{id}")
    public String deleteConsultant(@PathVariable int id) {
        consultantRepository.deleteById(id);
        return "Deleted " + id + " successfully";
    }

    @DeleteMapping("/api/v1/deleteConsultantByEmail/{email}")
    public ResponseEntity<ApiResponse> deleteConsultantByEmail(@PathVariable String email) {
        consultantRepository.deleteByEmail(email);

        ApiResponse response = new ApiResponse("Delete successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateConsultant/{id}")
    public String updateJobSeeker(@PathVariable int id, @RequestBody Consultant consultant) {
        consultantRepository.save(consultant);
        return "Updated " + id + " successfully";
    }

    @GetMapping("/api/v1/getConsultant/{email}")
    public ResponseEntity<Consultant> findByEmail(@PathVariable String email) {
        Optional<Consultant> consultant = consultantRepository.findOneByEmail(email);

        return consultant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.ok(null));
    }

    @PutMapping("/api/v1/updateConsultantByEmail/{email}")
    public ResponseEntity<ApiResponse> updateConsultantByEmail(@PathVariable String email, @RequestBody Consultant updatedConsultant) {
        Optional<Consultant> existingConsultantOptional = consultantRepository.findOneByEmail(email);

        if (existingConsultantOptional.isPresent()) {
            Consultant existingConsultant = existingConsultantOptional.get();

            existingConsultant.setVerified(updatedConsultant.getVerified());
            consultantRepository.save(existingConsultant); // this will save another result because email is coming with router address. I use email address to handle methods because ID handling are complex to users

            ApiResponse response = new ApiResponse("Updated consultant with email: " + email);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.ok(null);
        }
    }

}
