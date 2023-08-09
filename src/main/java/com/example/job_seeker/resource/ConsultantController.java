package com.example.job_seeker.resource;

import com.example.job_seeker.model.Consultant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.job_seeker.repository.ConsultantRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class ConsultantController {

    @Autowired
    private ConsultantRepository consultantRepository;

    @PostMapping("/saveConsultant")
    public String saveConsultant(@RequestBody Consultant consultant) {
        consultantRepository.save(consultant);
        return "Saved "+consultant.getName()+"successfully";
    }

    @GetMapping("/getAllConsultants")
    public List<Consultant> getAllConsultants() {
        return consultantRepository.findAll();
    }

    @GetMapping("/getConsultantById/{id}")
    public Optional<Consultant> getConsultantById(@PathVariable int id) {
        return consultantRepository.findById(id);
    }

    @DeleteMapping("/deleteConsultant/{id}")
    public String deleteConsultant(@PathVariable int id) {
        consultantRepository.deleteById(id);
        return "Deleted "+id+" successfully";
    }

    @PutMapping("/updateConsultant/{id}")
    public String updateConsultant(@PathVariable int id, @RequestBody Consultant consultant) {
        consultantRepository.save(consultant);
        return "Updated "+id+" successfully";
    }
}
