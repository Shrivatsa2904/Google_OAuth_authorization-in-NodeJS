const { profile } = require('console');
const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

passport.serializeUser((user, done) => {
    done(null,user );
});

passport.deserializeUser((user, done) => {
        done(null, user);
});


passport.use(
    new GoogleStratergy({
        // options for google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken,refreshToken,profile,done) => {
        // passport callback function
        const fs = require('fs');
        const data = JSON.stringify(profile);
        fs.writeFile(profile._json.email+'.json', data, (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        console.log(profile);
    });
    done(null,profile._json);
    })
);
