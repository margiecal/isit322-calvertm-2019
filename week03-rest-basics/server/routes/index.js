var express = require('express');
var router = express.Router();
const requester = require('request');



/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/qux-you-rang', function(request, response, next) {
    console.log("In server qux-you-rang, this is response: " + JSON.parse(response);
    requester('http://localhost:30027/qux-you-rang').pipe(response);
    console.log("requester: " + JSON.parse(response);
});

module.exports = router;
