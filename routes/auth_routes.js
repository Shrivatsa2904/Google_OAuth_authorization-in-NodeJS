const router = require('express').Router();
const passport = require('passport');
const nodemailer = require('nodemailer');
const log = console.log;

var email ;

router.get('/logout',(req,res) => {
    res.send("Logging out");
});

//auth with google

router.get('/google',passport.authenticate('google',{
    scope : ['profile','email']
}));

//call back 
router.get('/google/redirect',passport.authenticate('google'),(req,res) => {
    email = req.user.email;
    res.send("Thank you for logging in");
    
});
 router.get('/google/sendmail',(req,res) => {
    let transporter = nodemailer.createTransport({
        host:'smtp.mailtrap.io',
        auth: {
            user: '0859dbc8cc6a1c',
            pass: '5d3b1acdb9a9f1'
        }
    });

    let mailOptions = {
        from: 'elonmusk@tesla.com', // TODO: email sender
        to: email, // TODO: email receiver
        subject: 'Nodemailer - Test',
        text: 'It worked'
    };
    
    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return log('Error occurs');
        }
        return log('Email sent!!!');
    });
    res.send("Email sent to the mail id: "+email);
 }) 


module.exports = router;