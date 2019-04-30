var express = require('express');
var router = express.Router();
const debug = require('debug')('gists');
//export DEBUG='gists'

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});
router.get('/git-gist-you-rang'), function(request, response, next){

}

/*  This is in get-gist microservice server
router.get('/get-basic-list', function(request, response) {
    logger.log('GET BASIC LIST CALLED');
    let gh = getGitHub();
    const me = gh.getUser();
    logger.log('ME', me);
    me
        .listGists()
        .then(function({ data }) {
            logger.log('FILES PROMISE', Object.keys(data[0].files));
            const results = data.map(item => ({
                htmlUrl: item.html_url,
                id: item.id,
                gitPullUrl: item.git_pull_url,
                description: item.description,
                ownerLogin: item.owner.login,
                avatarUrl: item.owner.avatar_url,
                files: Object.keys(item.files)
            }));
            response.status(200).send({
                count: results.length,
                result: results
            });
        })
        .catch(function(err) {
            logger.log('USER Promise Rejected', err);
            response.status(500).send({ result: err });
        });
});
*/


module.exports = router;
