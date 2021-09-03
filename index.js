// Setting up Website Backend.
const express = require('express');
const app = express();
const port = 3000;

// Middleware for Webhosting.
app.use(express.static('public'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
    next();
});

// Redirect
//app.get();