/*******************************
 *    Imports...
 *******************************/
var express = require('express');
var Response = require('../models/response');
var authHandler = require('../auth-handler');

/*******************************
 *    Handlers
 *******************************/
var router = express.Router();

router
    .get('/:id', (req, res) => {
        res.json(new Response({
            id: req.params.id,
            displayName: "Joe Smith",
            email: "elrod.development@gmail.com"
        }));
    })
    .post('/', (req, res) => {
        var user = authHandler.getUser();


    });


/*******************************
 *    Export
 *******************************/
module.exports = router;