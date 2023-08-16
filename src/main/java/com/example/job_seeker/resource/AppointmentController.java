package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponse;
import com.example.job_seeker.model.Appointment;
import com.example.job_seeker.repository.AppointmentRepository;
import com.example.job_seeker.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class AppointmentController {
    @Autowired
    AppointmentRepository appointmentRepository;

    @Autowired
    EmailService emailService;

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
    public Optional<Appointment> getAppointmentById(@PathVariable String id) {
        return appointmentRepository.findById(id);
    }

    @DeleteMapping("/api/v1/deleteAppointment/{id}")
    public ResponseEntity<ApiResponse> deleteAppointment(@PathVariable String id) {
        appointmentRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateAppointment/{id}")
    public ResponseEntity<ApiResponse> updateAppointment(@PathVariable String id, @RequestBody Appointment appointment) {
        Optional<Appointment> selectedAppointment = appointmentRepository.findById(id);

        if (selectedAppointment.isPresent()){
            Appointment a = selectedAppointment.get();

            a.setApproved(true);
            appointmentRepository.save(a);

            String to = a.getEmail();
            String subject = "Appointment Approved";
            String text = "Your appointment has been approved.\n\n" +
                    "Appointment ID: "+a.getId()+"\nAppointment Date: "+ a.getDate().split("T", 1) +"\nConsultant Name: "+a.getConsultant()+"\n\n" +
                    "Your appointment time will be update soon.\nDo you have any questions? support@jobseeker.com";
            emailService.sendSimpleEmail(to, subject, text);
        }

        ApiResponse response = new ApiResponse("Approved Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }
}
