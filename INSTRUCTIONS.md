# Instructions for job-seeker web application

## Local setup getting started
To get started, follow the steps below:

1. Clone this repository.
2. Ensure the current branch is frontend branch. `git checkout frontend`
3. Install required dependencies. `npm install` if something error occurred, `npm i -force`
4. Run the frontend. `ng serve` (port 4200)
5. Create folder called `backend` in your device.
6. Clone this repository again into backend folder.
7. Checkout backend branch. `git checkout backend`
8. Clean and install maven dependencies. `mvn clean install`
9. Run the backend. (port 8080)
10. Read the commented instructions and setting up to local run paths. (in default, I add deployment paths)

Pre requests: Need to install `mongoDB Composer` in your device.

## Deployment
- Frontend deployed on `netlify`
- Backend deployed on `Render` (Docker deployment)
- Database deployed on `mongoDB M0 atlas cluster`
- **Note:-** Some cases backend loading time getting up to 2min. Because this is educational project and I hosted in free platforms.

## Run on server
1. Browse [this link](https://seeker-by-kavi.netlify.app/#/home).
2. Wait to the backend is load.
3. Now you are ready to go!
- **Note:-** This application is for whole world and it has to be a large scale database. I only added few data for only testing purposes. Follow with these data to check the app.

### Request an appointment
1. Choose country - american samoa
2. Choose category - art & design
3. Choose consultant - kavi castelo
4. Choose and enter data as you want for other forms
- **Note:-** Make sure to use valid and correct email address.

### Login credentials
1. Email - kavindu123450@gmail.com
2. Password - 123456

or
1. Email - kkavindu221@gmail.com
2. Password - 123456
- **Note:-** Reception and consultant both can use these credentials and after login, store login cookies for 5 days. If you need to check login interfaces one by one, you need to log out first. after logout refresh the page, and you will navigate to the login.

### Restrictions
- Don't change or delete any default data.
- Always use valid own emails to check the app.
- Don't do any unauthorized things.

**All rights received [Kavindu Kokila](mailto:kavindu.kokila.info@gmail.com?subject=[GitHub]%20JobSeeker%20Project%20Problems)**
