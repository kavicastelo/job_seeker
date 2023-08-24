# Job Seeker Backend API Documentation
This document provides information about the APIs exposed by the Job Seeker backend system. These APIs allow you to perform various actions such as managing appointments, consultants, job seekers, and login information.

## Table of Contents
1. [Introduction](#introduction)
2. [Authentication](#authentication)
3. [Appointments](#appointments)
4. [Consultants](#consultants)
5. [Job Seekers](#job-seekers)
6. [Login Information](#login-information)
## Introduction <a name="introduction"></a>
The Job Seeker backend APIs allow authorized users to manage appointments, consultants, job seekers, and login information. All API endpoints require proper authentication to access.

### Base URL
The base URL for all API endpoints is `https://jobseeker-ftq4.onrender.com/api/v1`.

## Authentication <a name="authentication"></a>
To access the Job Seeker backend APIs, you need to include an authentication token in the request headers.

### Request Headers
- `Authorization`: Bearer `<token>`

Replace `<token>` with your valid authentication token.

## Appointments <a name="appointments"></a>
### Create an Appointment
Endpoint: `POST /api/v1/saveAppointment`

Create a new appointment.

Request Body:

```json
{
"country": "Country Name",
"category": "Appointment Category",
"consultant": "Consultant Name",
"jobRole": "Job Role",
"name": "Client Name",
"email": "client@example.com",
"date": "2023-08-15T10:00:00",
"approved": false
}
```
### Get All Appointments
Endpoint: `GET /api/v1/getAllAppointments`

Retrieve a list of all appointments.

### Get Appointment by ID
Endpoint: `GET /api/v1/getAppointmentById/{id}`

Retrieve details of a specific appointment by ID.

### Delete an Appointment
Endpoint: `DELETE /api/v1/deleteAppointment/{id}`

Delete an appointment by ID.

### Update Appointment Approval
Endpoint: `PUT /api/v1/updateAppointment/{id}`

Update the approval status of an appointment by ID.

### Update Appointment
Endpoint: `PUT /api/v1/updateAppointment/{id}`

Update appointment details by ID.

## Consultants <a name="consultants"></a>
### Create a Consultant
Endpoint: `POST /api/v1/saveConsultant`

Create a new consultant.

Request Body:

```json
{
"country": "Country Name",
"jobCategory": "Job Category",
"jobRole": ["Role 1", "Role 2"],
"name": "Consultant Name",
"email": "consultant@example.com",
"phone": "123-456-7890",
"address": "Consultant Address",
"unavailableDates": ["2023-08-10", "2023-08-11"],
"portfolio": "Consultant Portfolio",
"verified": false
}
```
### Get All Consultants
Endpoint: `GET /api/v1/getAllConsultants`

Retrieve a list of all consultants.

### Get Consultant by Email
Endpoint: `GET /api/v1/getConsultant/{email}`

Retrieve details of a specific consultant by email.

### Delete a Consultant
Endpoint: `DELETE /api/v1/deleteConsultantByEmail/{email}`

Delete a consultant by email and send an email notification.

### Update Consultant Information
Endpoint: `PUT /api/v1/updateConsultantByEmail/{email}`

Update consultant information by email.

### Update Consultant Unavailable Dates
Endpoint: `PUT /api/v1/setUnavailableDates/{email}`

Update consultant's unavailable dates by email.

## Job Seekers <a name="job-seekers"></a>
### Send a Message
Endpoint: `POST /api/v1/sendMessage`

Send a message as a job seeker.

Request Body:

```json
{
"email": "jobseeker@example.com",
"message": "Message content."
}
```
### Get All Job Seeker Requests
Endpoint: `GET /api/v1/loadJobSeekerRequests`

Retrieve a list of all job seeker requests.

### Get Job Seeker by ID
Endpoint: `GET /api/v1/getJobSeekerById/{id}`

Retrieve details of a specific job seeker request by ID.

### Delete a Job Seeker Request
Endpoint: `DELETE /api/v1/deleteMessageRequest/{email}`

Delete a job seeker request by email.

### Update Job Seeker Request
Endpoint: `PUT /api/v1/updateJobSeeker/{id}`

Update job seeker request by ID.

## Login Information <a name="login-information"></a>
### Add a Consultant
Endpoint: `POST /api/v1/addConsultant`

Add login information for a new consultant.

Request Body:

```json
{
"email": "consultant@example.com",
"password": "password123"
}
```
### Get Consultant Login Info by Email
Endpoint: `GET /api/v1/getConsultantByEmail/{email}`

Retrieve login information of a consultant by email.

### Update Consultant Authentication
Endpoint: `PUT /api/v1/updateAuth/{email}`

Update consultant's authentication password by email.
