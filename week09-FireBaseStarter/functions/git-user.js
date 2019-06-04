
const express = require('express');

const router = express.Router();



router.get('/you-rang', (request, response) => {
    response.send({ result: 'You rang?', server: 'git-user' });
});


module.exports = router;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
