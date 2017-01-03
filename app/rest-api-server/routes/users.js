/*******************************
 *    Imports...
 *******************************/
var express = require('express');
var Response = require('../models/response');

/*******************************
 *    Handlers
 *******************************/
var router = express.Router();

router
    .get('/:userid', (req, res) => {
        res.json(new Response({
            id: req.params.userid,
            displayName: "Joe Smith",
            email: "elrod.development@gmail.com"
        }));
    })
    .post('/', (req, res) => {
        


    });


/*******************************
 *    Export
 *******************************/
module.exports = router;