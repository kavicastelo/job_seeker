package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponseTests;
import com.example.job_seeker.model.JobSeekerTests;
import com.example.job_seeker.repository.JobSeekerRepositoryTests;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class JobSeekerControllerTests {
    @Autowired
    private JobSeekerRepositoryTests jobSeekerRepositoryTests;

    @PostMapping("/api/v1/sendMessage")
    public ResponseEntity<ApiResponseTests> saveJobSeeker(@RequestBody JobSeekerTests jobSeekerTests) {
        jobSeekerRepositoryTests.save(jobSeekerTests);

        ApiResponseTests response = new ApiResponseTests("Sent "+ jobSeekerTests.getEmail()+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/loadJobSeekerRequests")
    public List<JobSeekerTests> getAllJobSeekers() {
        return jobSeekerRepositoryTests.findAll();
    }

    @GetMapping("/api/v1/getJobSeekerById/{id}")
    public Optional<JobSeekerTests> getJobSeekerById(@PathVariable int id) {
        return jobSeekerRepositoryTests.findById(id);
    }

    @DeleteMapping("/api/v1/deleteJobSeeker/{id}")
    public String deleteJobSeeker(@PathVariable int id) {
        jobSeekerRepositoryTests.deleteById(id);
        return "Deleted "+id+" successfully";
    }

    @DeleteMapping("/api/v1/deleteMessageRequest/{email}")
    public ResponseEntity<ApiResponseTests> deleteJobSeekerByEmail(@PathVariable String email) {
        jobSeekerRepositoryTests.deleteByEmail(email);

        ApiResponseTests response = new ApiResponseTests("Deleted "+email+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateJobSeeker/{id}")
    public String updateJobSeeker(@PathVariable int id, @RequestBody JobSeekerTests jobSeekerTests) {
        jobSeekerRepositoryTests.save(jobSeekerTests);
        return "Updated "+id+" successfully";
    }
}
