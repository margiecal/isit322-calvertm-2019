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

router.get('/qux-you-rang', (request, response) => {
    requester({'http://localhost:30027/qux-you rang', server: 'qux'});
});

module.exports = router;