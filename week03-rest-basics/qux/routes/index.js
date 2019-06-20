var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/:id', function(request, response) {
    response.send({'result': 'success', server: 'qux', message: 'I, Qux, am up and running.'});
});



module.exports = router;
