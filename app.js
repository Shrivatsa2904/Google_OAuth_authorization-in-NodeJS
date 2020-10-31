const express = require('express'); // importing express
const app = express();
const cookiesession = require('cookie-session');
const passportsetup = require('./config/passport_setup');
const keys = require('./config/keys');
const passport = require('passport');

const f = require('fs');
const authRoutes = require('./routes/auth_routes');


app.set('view engine','ejs');

//setup routes
app.use(cookiesession({
    maxAge: 1 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth',authRoutes);

app.get('/',(req,res) => {
    res.render('home');
} );

app.listen(3000,() => {
    console.log("App listining at Port 3000");
});



