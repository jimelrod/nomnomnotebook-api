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
    .get('/', (req, res) => {
        res.json(new Response([{
            id: 1,
            displayName: "Joe Smith",
            email: "elrod.development@gmail.com"
        },
        {
            id: 2,
            displayName: "Jim Elrod",
            email: "elrod.development+001@gmail.com"
        }]));
    })
    .get('/:id', (req, res) => {
        res.json(new Response({
            id: req.params.id,
            displayName: "Joe Smith",
            email: "elrod.development@gmail.com"
        }));
    });


/*******************************
 *    Export
 *******************************/
module.exports = router;