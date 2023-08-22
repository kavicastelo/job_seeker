# Database Schema Documentation

## Overview

This documentation provides an overview of the database schema for the Job Seeker application. It describes the
structure, entities, and relationships in the database.

## Entity Descriptions

### Appointment

The Appointment entity represents an appointment made by a job seeker with a consultant. It stores information about the
appointment, including date, location, consultant details, and approval status.

- `id` (String): Unique identifier for the appointment.
- `country` (String): The country where the appointment is scheduled.
- `category` (String): The category of the appointment.
- `consultant` (String): The consultant assigned to the appointment.
- `jobRole` (String): The job role associated with the appointment.
- `name` (String): The name of the individual making the appointment.
- `email` (String): The email address of the individual making the appointment.
- `date` (String): The date and time of the appointment.
- `approved` (boolean): Flag indicating whether the appointment is approved.

### Consultant

The Consultant entity represents a consultant who provides guidance and assistance to job seekers. It stores information
about the consultant, including their contact details, expertise, and availability.

- `country` (String): The country where the consultant is located.
- `jobCategory` (String): The category of jobs the consultant specializes in.
- `jobRole` (Array): An array of job roles the consultant can assist with.
- `name` (String): The name of the consultant.
- `email` (String): The email address of the consultant.
- `phone` (String): The contact phone number of the consultant.
- `address` (String): The address of the consultant.
- `unavailableDates` (List): A list of dates when the consultant is unavailable.
- `portfolio` (String): The consultant's portfolio or summary of expertise.
- `verified` (Boolean): Flag indicating whether the consultant's account is verified.

### JobSeeker

The JobSeeker entity represents an individual seeking assistance and guidance in their job search. It stores their
contact information and any messages they wish to convey.

- `email` (String): The email address of the job seeker.
- `message` (String): A message from the job seeker regarding their needs or inquiries.
### loginInfo
The loginInfo entity stores authentication information for users of the application.

- `email` (String): The email address associated with the user account.
- `password` (String): The password associated with the user account.
## Entity Relationships
- `Appointment` and `Consultant`: An appointment is associated with a specific consultant. The `consultant` field in the
`Appointment` entity references a consultant's details.
- `Appointment` and `JobSeeker`: An appointment is requested by a job seeker. The `name` and `email` fields in the `Appointment`
entity are linked to the `JobSeeker` entity.
- `Consultant` and `JobSeeker`: Consultants may interact with job seekers through appointments. The `JobSeeker` entity is not
directly linked to the `Consultant` entity.
## Conclusion
This documentation provides an overview of the database schema for the Job Seeker application. It describes the
entities, attributes, and relationships that define the structure of the database. Understanding this schema is crucial
for maintaining and developing the application's functionality.
## References
- Application Source Code and Entity Definitions
