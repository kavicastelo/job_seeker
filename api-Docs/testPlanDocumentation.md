# Test Plan
## Introduction
The test plan designed to describe the scope, approach, resources and all the testing activities of project Job Seeker Online Appointment web application.

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
- **Test title** - can be sent request message without errors
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
- **Test title** - can be sent appointment request without errors
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
- **Test title** - can be applied consultant job without errors
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

- **Test case ID** - Function_4
- **Test priority (low/medium/good)** - good
- **Module name** – login
- **Test title** - can be login different dashboards
- **Description** - test login has two different dashboards for receptionist and consultant.
- **Pre-condition** - default email, default password, email, password

| Step | Test steps                                       | Test data                                                 | Expected results                                                                 | Actual result     | Status |
|------|--------------------------------------------------|-----------------------------------------------------------|----------------------------------------------------------------------------------|-------------------|--------|
| 1    | Launch application                               | email<br/>password                                        | Check credentials from the database and set dashboard according to the position  | Login successful  | Pass   |
| 2    | Click `Become a consultant` in top bar           |||||
| 3    | Click `Sign in`                                  |||||
| 4    | Enter given email and password                   |||||
| 5    | Click `Authorize`                                |||||
| and  ||||||
| 1    | Launch application                               | email<br/>password<br/>default email<br/>default password | Check credentials from the database and set dashboard according to the position  | Login successful  | Pass   |
| 2    | Click `Reception` in nav bar(for dev mode)       |||||
| 3    | Enter default credentials or updated credentials |||||
| 4    | Click `Authorize`                                |||||

- **Test case ID** - Function_5
- **Test priority (low/medium/good)** - good
- **Module name** – view consultant requests
- **Test title** - can be view consultant job applicant's information
- **Description** - test consultant applicant data view correctly
- **Pre-condition** - name, email, phone, address, country, category, job roles, portfolio

| Step | Test steps                                 | Test data                                                                                  | Expected results                                    | Actual result             | Status |
|------|--------------------------------------------|--------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------|--------|
| 1    | Launch application                         | name<br/>email<br/>phone<br/>address<br/>country<br/>category<br/>job roles<br/>portfolio  | get applicant data from database and show correctly | `[load data to a table]`  | pass   |
| 2    | Click `Reception` in nav bar(for dev mode) |||||
| 3    | Click `Authorize`                          |||||
| 4    | Login successfully                         |||||

- **Test case ID** - Function_6
- **Test priority (low/medium/good)** - good
- **Module name** – view consultant list
- **Test title** - can be view current consultants information
- **Description** - test current consultants data view correctly
- **Pre-condition** - name, email, phone, address

| Step | Test steps                                  | Test data                             | Expected results                                      | Actual result             | Status |
|------|---------------------------------------------|---------------------------------------|-------------------------------------------------------|---------------------------|--------|
| 1    | Launch application                          | name<br/>email<br/>phone<br/>address  | get consultants data from database and show correctly | `[load data to a table]`  | pass   |
| 2    | Click `Reception` in nav bar(for dev mode)  |||||
| 3    | Click `Authorize`                           |||||
| 4    | Login successfully                          |||||
| 4    | Click `View Consultant List`                |||||

- **Test case ID** - Function_7
- **Test priority (low/medium/good)** - good
- **Module name** – add consultant
- **Test title** - can be added new consultants to the system
- **Description** - test add new consultant using email and new passwords then send automatic email to registered email with credentials
- **Pre-condition** - no

| Step | Test steps                                  | Test data          | Expected results                                                                    | Actual result                                                  | Status |
|------|---------------------------------------------|--------------------|-------------------------------------------------------------------------------------|----------------------------------------------------------------|--------|
| 1    | Launch application                          | email<br/>password | check email is valid and add login data to the database then sent a automatic email | consultant added successfully and send email to the consultant | pass   |
| 2    | Click `Reception` in nav bar(for dev mode)  |||||
| 3    | Click `Authorize`                           |||||
| 4    | Login successfully                          |||||
| 5    | Click `Add Consultants`                     |||||
| 6    | Add consultant's email                      |||||
| 7    | Add password                                |||||
| 8    | Re type password                            |||||
| 9    | Click `Add Consultant`                      |||||

- **Test case ID** - Function_8
- **Test priority (low/medium/good)** - good
- **Module name** – ban consultant
- **Test title** - can be remove current consultants from the system
- **Description** - test remove current then send automatic email to banned account
- **Pre-condition** - [need to visible in `consultant list`]

| Step | Test steps                                      | Test data          | Expected results                                                       | Actual result                                                           | Status |
|------|-------------------------------------------------|--------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------|--------|
| 1    | Launch application                              | email<br/>password | check account is not [null] and set account verified status to [false] | [consultant email] banned successfully and send email to the consultant | pass   |
| 2    | Click `Reception` in nav bar(for dev mode)      |||||
| 3    | Click `Authorize`                               |||||
| 4    | Login successfully                              |||||
| 5    | Click `View Consultant List`                    |||||
| 6    | Click `Ban` button in front of the account data |||||
| 7    | Click `OK` from the confirmation message        |||||

- **Test case ID** - Function_9
- **Test priority (low/medium/good)** - good
- **Module name** – accept request help
- **Test title** - can be accepted help request from jobseekers
- **Description** - test help requests are loading from the database and can remove from database
- **Pre-condition** - [need to visible in `job seeker requests`]

| Step | Test steps                                          | Test data | Expected results                                                  | Actual result                                                                                      | Status |
|------|-----------------------------------------------------|-----------|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|--------|
| 1    | Launch application                                  | email     | check send emails without errors and remove requests successfully | device email composer open successfully with seeker email address<br/>message removal successfully | pass   |
| 2    | Click `Reception` in nav bar(for dev mode)          |||||
| 3    | Click `Authorize`                                   |||||
| 4    | Login successfully                                  |||||
| 5    | Click `Job Seeker Requests`                         |||||
| 6    | Click on seeker's email                             |||||
| 7    | Send custom message for him                         |||||
| 8    | After end of the conversation click `remove` button |||||

- **Test case ID** - Function_10
- **Test priority (low/medium/good)** - good
- **Module name** – view appointment requests
- **Test title** - can be view appointment requests' information
- **Description** - test appointment request's data view correctly
- **Pre-condition** - ID, name, email, job roles, date

| Step | Test steps                             | Test data                                   | Expected results                                                  | Actual result             | Status |
|------|----------------------------------------|---------------------------------------------|-------------------------------------------------------------------|---------------------------|--------|
| 1    | Launch application                     | ID<br/>name<br/>email<br/>job role<br/>date | get appointment requests' data from database and show correctly   | `[load data to a table]`  | pass   |
| 2    | Click `Become a consultant` in top bar |||||
| 3    | Click `Sign in`                        |||||
| 4    | Login successfully                     |||||

- **Test case ID** - Function_11
- **Test priority (low/medium/good)** - good
- **Module name** – approve appointment
- **Test title** - can be approved appointment by consultant
- **Description** - test appointment approve and send automatic email to job seeker
- **Pre-condition** - ID

| Step | Test steps                              | Test data | Expected results                                                                         | Actual result                                                     | Status |
|------|-----------------------------------------|-----------|------------------------------------------------------------------------------------------|-------------------------------------------------------------------|--------|
| 1    | Launch application                      | ID        | remove appointment from the requested list and set approved status to [true] in database | 37hg47j34d approved successfully and remove appoint from the list | pass   |
| 2    | Click `Become a consultant` in top bar  |||||
| 3    | Click `Sign in`                         |||||
| 4    | Login successfully                      |||||
| 5    | Click `approve` in front of the request |||||

- **Test case ID** - Function_12
- **Test priority (low/medium/good)** - good
- **Module name** – view approved appointments
- **Test title** - can be view approved appointments by consultant
- **Description** - test approved appointments' data load correctly
- **Pre-condition** - ID, name, email, job roles, date

| Step | Test steps                             | Test data                                    | Expected results                                                         | Actual result            | Status |
|------|----------------------------------------|----------------------------------------------|--------------------------------------------------------------------------|--------------------------|--------|
| 1    | Launch application                     | ID<br/>name<br/>email<br/>job role<br/>date  | load `status:approved appointment` data from database and show correctly | `[load data to a table]` | pass   |
| 2    | Click `Become a consultant` in top bar |||||
| 3    | Click `Sign in`                        |||||
| 4    | Login successfully                     |||||
| 5    | Click `Approved List`                  |||||

- **Test case ID** - Function_13
- **Test priority (low/medium/good)** - good
- **Module name** – set unavailable dates
- **Test title** - can be set unavailable dates
- **Description** - test set list of unavailable dates and add them to calendar
- **Pre-condition** - no

| Step | Test steps                             | Test data | Expected results                        | Actual result           | Status |
|------|----------------------------------------|-----------|-----------------------------------------|-------------------------|--------|
| 1    | Launch application                     | dates     | hide unavailable dates from calenders   | Unavailable dates added | pass   |
| 2    | Click `Become a consultant` in top bar |||||
| 3    | Click `Sign in`                        |||||
| 4    | Login successfully                     |||||
| 5    | Click `Set Unavailable Dates`          |||||
| 5    | Choose unavailable dates and `Submit`  |||||

- **Test case ID** - Function_14
- **Test priority (low/medium/good)** - low
- **Module name** – send custom emails
- **Test title** - can be sent custom emails according to provided emails
- **Description** - test send custom emails to clicking any email address from any dashboard
- **Pre-condition** - email

| Step | Test steps                                              | Test data | Expected results           | Actual result                                   | Status |
|------|---------------------------------------------------------|-----------|----------------------------|-------------------------------------------------|--------|
| 1    | ...                                                     | email     | open device email composer | Opened device email composer with clicked email | pass   |
| 2    | Click any email address from any where in any dashboard |||||

- **Test case ID** - Function_15
- **Test priority (low/medium/good)** - good
- **Module name** – Change credentials
- **Test title** - can be update login information
- **Description** - test update login credentials according to current email
- **Pre-condition** - email

| Step | Test steps                                       | Test data | Expected results                                 | Actual result        | Status |
|------|--------------------------------------------------|-----------|--------------------------------------------------|----------------------|--------|
| 1    | Launch application                               | email     | Check email is available and update new password | updated successfully | Pass   |
| 2    | Click `Become a consultant` in top bar           |||||
| 3    | Click `Sign in`                                  |||||
| 4    | Login successfully                               |||||
| 5    | Click `Settings`                                 |||||
| 6    | Add new credentials                              |||||
| 7    | Click `Update Credentials`                       |||||
| and  ||||||
| 1    | Launch application                               | email     | Check email is available and update new password | updated successfully | Pass   |
| 2    | Click `Reception` in nav bar(for dev mode)       |||||
| 3    | Click `Authorize`                                |||||
| 4    | Login successfully                               |||||
| 5    | Click `Settings`                                 |||||
| 6    | Add new credentials                              |||||
| 7    | Click `Update Credentials`                       |||||

- **Test case ID** - Function_16
- **Test priority (low/medium/good)** - medium
- **Module name** – logout
- **Test title** - can be logged uot from the system
- **Description** - test logout the system with clearing the cookies
- **Pre-condition** - no

| Step | Test steps                                 | Test data | Expected results                         | Actual result                    | Status |
|------|--------------------------------------------|-----------|------------------------------------------|----------------------------------|--------|
| 1    | Launch application                         | cookies   | clear cookies and logout from the system | logged out and redirect to login | Pass   |
| 2    | Click `Become a consultant` in top bar     |||||
| 3    | Click `Sign in`                            |||||
| 4    | Login successfully                         |||||
| 5    | Click `Logout`                             |||||
| and  ||||||
| 1    | Launch application                         | cookies   | clear cookies and logout from the system | logged out and redirect to login | Pass   |
| 2    | Click `Reception` in nav bar(for dev mode) |||||
| 3    | Click `Authorize`                          |||||
| 4    | Login successfully                         |||||
| 5    | Click `Logout`                             |||||
