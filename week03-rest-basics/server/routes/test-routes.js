var express = require('express');
var router = express.Router();

/* Set up a route called foo. */
router.get('/foo', function(request, response) {
    var infoToSend = { result: 'success', server: 'main', message: 'Hi from Main server foo.' };
    console.log('Foo called:\n' + JSON.stringify(infoToSend, null, 4));
    response.send(infoToSend);
});

module.exports = router;
