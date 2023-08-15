package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponse;
import com.example.job_seeker.model.Appointment;
import com.example.job_seeker.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class AppointmentController {
    @Autowired
    AppointmentRepository appointmentRepository;

    @PostMapping("/api/v1/saveAppointment")
    public ResponseEntity<ApiResponse> saveAppointment(@RequestBody Appointment appointment) {
        appointmentRepository.save(appointment);

        ApiResponse response = new ApiResponse("Saved "+appointment.getId()+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAllAppointments")
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @GetMapping("/api/v1/getAppointmentById/{id}")
    public Optional<Appointment> getAppointmentById(@PathVariable int id) {
        return appointmentRepository.findById(id);
    }

    @DeleteMapping("/api/v1/deleteAppointment/{id}")
    public String deleteAppointment(@PathVariable int id) {
        appointmentRepository.deleteById(id);
        return "Deleted "+id+" successfully";
    }

    @PutMapping("/api/v1/updateAppointment/{id}")
    public String updateAppointment(@PathVariable int id, @RequestBody Appointment appointment) {
        appointmentRepository.save(appointment);
        return "Updated "+id+" successfully";
    }
}
