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
        res.json("Get all COOL");
    })
    .get('/:id', (req, res) => {
        res.json(`Get ${req.params.id} COOL`);
    })
    .post('/', (req, res) => {
        res.json(JSON.stringify(req));
    });


var addUser = firebaseUser => {
    
};



/*******************************
 *    Export
 *******************************/
module.exports = router;