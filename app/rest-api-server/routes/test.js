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
        res.json(new Response({
            displayName: "Joe Smith",
            email: "elrod.development@gmail.com"
        }));
    })
    .get('/:id', (req, res) => {
        
        var testError = () => {
            throw {
                msg: "Umm...",
                time: new Date()
            };
        };

        let response;

        try {
            if (req.params.id == 42) {
                testError();
            }

            response = new Response({
                id: req.params.id,
                displayName: "Joe Smith",
                email: "elrod.development@gmail.com"
            });
        }
        catch(e) {
            response = new Response(e, "Fail");
        }
        
        res.json(response);
    });


/*******************************
 *    Export
 *******************************/
module.exports = router;