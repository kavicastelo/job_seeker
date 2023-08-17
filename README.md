# JobSeeker

JobSeeker is a web application developed as a university assignment. It is designed to facilitate the interaction between job seekers and consultants. The project uses Angular 15 for the frontend and Spring Boot 3 for the backend.

# [Demo](https://seeker-by-kavi.netlify.app/)

## Table of Contents
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Login Credentials](#login-credentials)
- [Functionality](#functionality)
- [Deployment](#deployment)
- [Security](#security)
- [Local Setup](#local-setup)

## Technologies

- Frontend: Angular 15
- Backend: Spring Boot 3
- Database: MongoDB

## Getting Started

To get started, follow the steps below:

1. Clone this repository.
2. Configure environment files in both the frontend and backend.
3. Install required dependencies.
4. Run the frontend and backend applications.

## Usage

The application serves as a platform for job seekers to connect with consultants. Users can filter job listings based on country, job category, consultant name, and job role. Follow these steps to make an appointment:

1. Choose a country (e.g., American Samoa).
2. Select a job category (e.g., Art & Design Related).
3. Choose a consultant (e.g., Kavi Castelo).
4. Select a job role under the chosen category.

## Login Credentials

### Reception Panel:
- Username: admin@gmail.com
- Password: Admin@12345

You can use consultants credentials too

### Consultant Login (Sign In):
- Username: kavindu123450@gmail.com
- Password: 123456


- Username: kkavindu221@gmail.com
- Password: 123456

### Consultant Apply:
`nav bar > become a consultant` or `top bar > become a consultant > apply now`

## Functionality

- CRUD operations for job listings.
- Reception and consultant login with shared credentials.
- Filter function on the homepage for searching job listings.
- Authenticated access for secure operations.

Described only main function. Many more functions to have consultant and reception panels.

## Deployment

- Frontend: Hosted on Netlify (https://seeker-by-kavi.netlify.app/)
- Backend: Hosted on Render (https://jobseeker-ftq4.onrender.com/)

Note: Backend loading time might be up to 30 seconds due to the free hosting plan.

## Security

- Authentication and authorization mechanisms are integrated.
- CORS is configured to allow frontend access to backend APIs.
- Reception and consultant login credentials are shared for educational purposes.
- Passwords are not encrypted for simplicity and educational purposes.

## Local Setup

To run the project locally:

1. Clone the repository.
2. Checkout the `frontend` branch and configure the environment files as instructed.
3. Checkout the `backend` branch and configure the CORS settings and application.properties.
4. Run the frontend and backend applications.

Remember to wait for a minute after loading the website for optimal data transfer.

---

Feel free to explore and contribute to this educational project! For any questions or issues, contact [Kavindu Kokila](mailto:kavindu.kokila.info@gmail.com?subject=[GitHub]%20JobSeeker%20Project%20Problems).
