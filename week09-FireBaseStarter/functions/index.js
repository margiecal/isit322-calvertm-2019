const functions = require('firebase-functions');
const express = require('express');
const app = express();
const userRouter = require('./git-user');

app.get('/', function (req, res) {
    console.log("HOME CALLED");
    res.send({data: "Default home page route called"});
});


app.get('/bar', function (req, res) {
    console.log("bar CALLED");
    res.send({data: "bar route called"});
});


app.use('/users', userRouter);

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
