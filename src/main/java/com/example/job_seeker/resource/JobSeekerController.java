package com.example.job_seeker.resource;

import com.example.job_seeker.model.JobSeeker;
import com.example.job_seeker.repository.JobSeekerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class JobSeekerController {
    @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @PostMapping("/api/v1/saveJobSeeker")
    public String saveJobSeeker(@RequestBody JobSeeker jobSeeker) {
        jobSeekerRepository.save(jobSeeker);
        return "Saved "+jobSeeker.getName()+"successfully";
    }

    @GetMapping("/api/v1/getAllJobSeekers")
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

    @PutMapping("/api/v1/updateJobSeeker/{id}")
    public String updateJobSeeker(@PathVariable int id, @RequestBody JobSeeker jobSeeker) {
        jobSeekerRepository.save(jobSeeker);
        return "Updated "+id+" successfully";
    }
}
