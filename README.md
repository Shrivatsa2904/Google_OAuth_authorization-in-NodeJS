Author : Shrivatsa KS 

Instructions to run the project

1) git clone git clone https://github.com/Shrivatsa2904/quick_work_assignment.git // This will clone the repository to local machine.
2) npm install cookie-session ejs express nodemailer passport passport-google-oauth20

 // Instruction 2 will install all the dependencies for the project.
3) npm start
// Instruction 3 will start the server

4) "http:/localhost:3000" // Optional User Interface
// Instruction 4 will take us to the homepaghe ref: /screenshot/pic1.jpg

5) Endpoint :"http:/localhost:3000/auth/google" // Endpoint for getting User credentials
// Instruction 5 will ask the user to authenticate the server to give his crendials ref: /screenshot/pic2.jpg

6)Endpoint: "http:/localhost:3000/auth/google/redirect"
// Instruction 6 will show the message confirmation of login ref : /screenshot/pic3.jpg
// 'email.json' email:"Email address of user who has given autherization to server" will be the json file that stores the user credentials.

7) Endpoint :"http:localhost:3000/auth/google/sendmail" 
// Instruction 7 will send the message to email adress which is taken from user credentials using node mailer.

8) host:'smtp.mailtrap.io',
        auth: {
            user: 'user id',
            pass: 'user password'
        }
// Instruction 8 is the way to configure mailtrap.io which can e used to test the nodemailer.
// Login to mailtrap.io and in credentials section get user id and user password.

9) How to configure OAuth user id and user Secrect
// 1)go to google cloud platform
2)create new project
3) go to credentials section on the top left corner
4) select create new client id
5) set startpoint and redirect URL
6) save
7) Note down client id and client secret.

    

