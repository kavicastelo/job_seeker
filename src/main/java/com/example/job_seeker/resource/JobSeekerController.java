package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponse;
import com.example.job_seeker.model.JobSeeker;
import com.example.job_seeker.repository.JobSeekerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class JobSeekerController {
    @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @PostMapping("/api/v1/sendMessage")
    public ResponseEntity<ApiResponse> saveJobSeeker(@RequestBody JobSeeker jobSeeker) {
        jobSeekerRepository.save(jobSeeker);

        ApiResponse response = new ApiResponse("Sent "+jobSeeker.getEmail()+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/loadJobSeekerRequests")
    public List<JobSeeker> getAllJobSeekers() {
        return jobSeekerRepository.findAll();
    }

    @GetMapping("/api/v1/getJobSeekerById/{id}")
    public Optional<JobSeeker> getJobSeekerById(@PathVariable int id) {
        return jobSeekerRepository.findById(id);
    }

    @DeleteMapping("/api/v1/deleteJobSeeker/{id}")
    public String deleteJobSeeker(@PathVariable int id) {
        jobSeekerRepository.deleteById(id);
        return "Deleted "+id+" successfully";
    }

    @DeleteMapping("/api/v1/deleteMessageRequest/{email}")
    public ResponseEntity<ApiResponse> deleteJobSeekerByEmail(@PathVariable String email) {
        jobSeekerRepository.deleteByEmail(email);

        ApiResponse response = new ApiResponse("Deleted "+email+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateJobSeeker/{id}")
    public String updateJobSeeker(@PathVariable int id, @RequestBody JobSeeker jobSeeker) {
        jobSeekerRepository.save(jobSeeker);
        return "Updated "+id+" successfully";
    }
}
