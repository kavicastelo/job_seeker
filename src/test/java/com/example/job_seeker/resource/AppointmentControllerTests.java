package com.example.job_seeker.resource;

import com.example.job_seeker.DTO.ApiResponseTests;
import com.example.job_seeker.model.AppointmentTests;
import com.example.job_seeker.repository.AppointmentRepositoryTests;
import com.example.job_seeker.service.EmailServiceTests;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class AppointmentControllerTests {
    @Autowired
    AppointmentRepositoryTests appointmentRepositoryTests;

    @Autowired
    EmailServiceTests emailServiceTests;

    @PostMapping("/api/v1/saveAppointment")
    public ResponseEntity<ApiResponseTests> saveAppointment(@RequestBody AppointmentTests appointmentTests) {
        appointmentRepositoryTests.save(appointmentTests);

        ApiResponseTests response = new ApiResponseTests("Saved "+ appointmentTests.getId()+" successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/getAllAppointments")
    public List<AppointmentTests> getAllAppointments() {
        return appointmentRepositoryTests.findAll();
    }

    @GetMapping("/api/v1/getAppointmentById/{id}")
    public Optional<AppointmentTests> getAppointmentById(@PathVariable String id) {
        return appointmentRepositoryTests.findById(id);
    }

    @DeleteMapping("/api/v1/deleteAppointment/{id}")
    public ResponseEntity<ApiResponseTests> deleteAppointment(@PathVariable String id) {
        appointmentRepositoryTests.deleteById(id);

        ApiResponseTests response = new ApiResponseTests("Deleted Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/updateAppointment/{id}")
    public ResponseEntity<ApiResponseTests> updateAppointment(@PathVariable String id, @RequestBody AppointmentTests appointmentTests) {
        Optional<AppointmentTests> selectedAppointment = appointmentRepositoryTests.findById(id);

        if (selectedAppointment.isPresent()){
            AppointmentTests a = selectedAppointment.get();

            a.setApproved(true);
            appointmentRepositoryTests.save(a);

            String to = a.getEmail();
            String subject = "Appointment Approved";
            String text = "Your appointment has been approved.\n\n" +
                    "Appointment ID: "+a.getId()+"\nAppointment Date: "+ a.getDate().split("T", 1) +"\nConsultant Name: "+a.getConsultant()+"\n\n" +
                    "Your appointment time will be update soon.\nDo you have any questions? support@jobseeker.com";
            emailServiceTests.sendSimpleEmail(to, subject, text);
        }

        ApiResponseTests response = new ApiResponseTests("Approved Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }
}
