var express = require('express');
var router = express.Router();
const requester = require('request');
const debug = require('debig')('main-server');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/qux-you-rang', function(req, res, next) {
    'use strict';
    debug('MAIN SERVER QUX YOU RANG CALLED');
   requester("http://localhost:30027/you-rang").pipe(response);

});

router.get('/git-user-you-rang', function(req, res, next) {
    'use strict';
    debug('MAIN SERVER QUX YOU RANG CALLED');
    requester("http://localhost:30028/you-rang").pipe(response);

});

router.get('/git-user-get-user', function(req, res, next) {
    'use strict';
    debug('MAIN SERVER QUX YOU RANG CALLED');
    requester("http://localhost:30028/get-user").pipe(response);

});

module.exports = router;
