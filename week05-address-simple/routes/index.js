var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
    'use strict';
    response.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/foo', (request, response) => {
    'use strict';
    response.send({
        "result": "success-foo"
    });
});


router.get('/bar', (request, response) => {
    'use strict';
    response.send({"result": "success-bar"});
});


module.exports = router;
