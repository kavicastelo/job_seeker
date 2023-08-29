# Test Plan
## Introduction
The test plan designed to describe the scope, approach, resources and all of the testing activities of project Job Seeker Online Appointment web application.

## 1. Test Strategy
### 1.1 Scope
### 1.1.1. Featured to be tested
| Module name                | Applicable Roles             | Description                                                                                                                                           |
|----------------------------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Request Help               | Job seeker                   | Job seeker can request a help for seek best consultant                                                                                                |
| Request Appointment        | Job seeker<br/>Receptionist  | Job seeker can choose country, category, job role and fine best consultant and directly request an appointment                                        |
| Apply Consultant           | Consultant                   | If someone need become a consultant, he/she can apply for a job                                                                                       |
| Login                      | Receptionist<br/>Consultant  | Receptionist and consultant both have different login interfaces and dashboards. Receptionist haas default login credentials for the first time login |
| View Consultants Requests  | Receptionist                 | Receptionist can view consultant request for joining the crew                                                                                         |
| View consultant list       | Receptionist                 | Receptionist can view all current consultants’ data                                                                                                   |
| Add consultant             | Receptionist                 | Receptionist can add new consultants                                                                                                                  |
| Ban consultant             | Receptionist                 | Receptionist can remove current consultant from the system                                                                                            |
| Accept request help        | Receptionist                 | After job seeker requests a help, receptionist can find a consultant according to given information as a job seeker                                   |
| View appointment requests  | Consultant                   | Consultant can view appointment requests                                                                                                              |
| Approve appointment        | Consultant                   | Consultants can approve or decline their appointment requests                                                                                         |
| View approved appointments | Consultant                   | Consultant can view approved appointment information                                                                                                  |
| Set unavailable dates      | Consultant                   | Consultant can set unavailable dates after approving the appointment                                                                                  |
| Send custom emails         | Receptionist<br/>Consultant  | Receptionists and consultants can send custom emails to the users for announcing about their appointment information (date, venue, platform)          |
| Change privacy             | Receptionist<br/>Consultant  | Both can change their login credentials                                                                                                               |
| Logout                     | Receptionist<br/>Consultant  | System cookies are stored for 5 days. Once logged in no one needs to login again within 5 days. If someone wants, he can log out                      |

### 1.1.2.	Features not to be tested
-	System Hardware
-	User interfaces 

### 1.2.	Risk and Issues
| Risk                                                  | Mitigation                                        |
|-------------------------------------------------------|---------------------------------------------------|
| Frontend and backend developed different technologies | Use same type of testing method to do the testing |
| Low skilled testers                                   | Improve skills with trainings                     |

### 1.3.	Test logistics 
After completing these resources, starts the testing process
-	Application is available
-	Testing environment created
-	Enough Human resources and testing resources created

## 2.	Resource planning
### 2.1	System resources
| Resource     | Description                                                            |
|--------------|------------------------------------------------------------------------|
| Testing tool | Automation testing tool (jUnit, Cypress)                               |
| PC / Laptop  | Minimum 3 devices with 3 different OSs and different screen sizes.     |
| Smart phone  | Minimum 2 smart phones with different screen sizes and different OSs.  |

### 2.2	Human resources
| Resource      | Description                                       |
|---------------|---------------------------------------------------|
| Manager       | Looks and manage whole project                    |
| Administrator | Supply the requirements and build the environment |
| Developer     | Handle errors                                     |
| Tester        | Identify problems and describe                    |

## 3.	Test Cases

- **Test case ID** - Function_1
- **Test priority (low/medium/good)** - good
- **Module name** – request help  
- **Test title** - can be send request message without errors
- **Description** - test request string message and store it successfully in database
- **Pre-condition** - no 

| Step                      | Test steps                      | Test data                    | Expected results                                       | Actual result               | Status |
|---------------------------|---------------------------------|------------------------------|--------------------------------------------------------|-----------------------------|--------|
| 1                         | Launch application              | email<br/>proper description | send string request successfully and store in database | help requested successfully | pass   |
| 2                         | Click `Request help` in nav bar |||||
| 3                         | Enter a valid email             |||||
| 4                         | Enter the description           |||||
| 5                         | Click `Submit`                  |||||

- **Test case ID** - Function_2
- **Test priority (low/medium/good)** - good
- **Module name** – request appointment
- **Test title** - can be send appointment request without errors
- **Description** - test request appointment filtering the consultant and store appointment data in to database
- **Pre-condition** - country list, job category list, available consultants, available job roles according to consultant, consultant available dates

| Step | Test steps               | Test data                                                                    | Expected results                                              | Actual result                               | Status |
|------|--------------------------|------------------------------------------------------------------------------|---------------------------------------------------------------|---------------------------------------------|--------|
| 1    | Launch application       | country<br/>category<br/>consultant<br/>job role<br/>name<br/>email<br/>date | Filtering best matched data and make appointment successfully | Appointment 156gf78s successfully requested | pass   |
| 2    | Select country           |||||
| 3    | Select category          |||||
| 4    | Select consultant        |||||
| 5    | Select job role          |||||
| 6    | Enter the name           |||||
| 7    | Enter valid email        |||||
| 8    | Select available date    |||||
| 9    | Click `Make Appointment` |||||

- **Test case ID** - Function_3
- **Test priority (low/medium/good)** - good
- **Module name** – apply consultant
- **Test title** - can be apply consultant job without errors
- **Description** - test apply consultant job successfully and store applicant data in database
- **Pre-condition** - no

| Step | Test steps                             | Test data                                                                                 | Expected results                                                                  | Actual result                 | Status |
|------|----------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|-------------------------------|--------|
| 1    | Launch application                     | name<br/>email<br/>phone<br/>address<br/>country<br/>category<br/>job roles<br/>portfolio | Filtering available vacancies, check valid information and store data in database | Job request sent successfully | pass   |
| 2    | Click `Become a consultant` in top bar |||||
| 3    | Click `Apply now`                      |||||
| 4    | Fill the form                          |||||
| 5    | Click `Apply Consultant Job`           |||||
| or   ||||||
| 1    | Launch application                     |||||
| 2    | Click `Become a consultant` in nav bar |||||
| 3    | Fill the form                          |||||
| 4    | Click `Apply Consultant Job`           |||||
