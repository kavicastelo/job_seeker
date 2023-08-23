package com.example.job_seeker.DTO;

public class ApiResponseTests {
    private String message;

    public ApiResponseTests(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
