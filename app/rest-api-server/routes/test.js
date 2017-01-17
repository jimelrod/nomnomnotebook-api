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
        let Connection = require('tedious').Connection;
        let Request = require('tedious').Request;
        var TYPES = require('tedious').TYPES;

        let config = {
            userName: "sa2",
            password: "unclejim32",
            server: "DESKTOP-STNOHJO",
            options: {
                database: "NomNomNotebook",
                useColumnNames: true,
                camelCaseColumns: true
            }
        };

        let connection = new Connection(config);

        connection.on('connect', err => {
            if (err) {
                res.status(500).json(err);
            }

            let query = "INSERT INTO [NomNomNotebook].[dbo].[User] (FirebaseId, DisplayName, Email, PhotoUrl, IsVerified) VALUES (@firebaseId, @displayName, @email, @photoUrl, @isVerified)";

            let request = new Request(query, (err, rowCount, rows) => {
                console.log("Errors: ", err);
                console.log("RowCount: ", rowCount);
                console.log("Rows: ", rows);

                console.log("Closing db connection");
                connection.close()
                
                res.json("It went or something...");
            });

            request.addParameter('firebaseId', TYPES.VarChar, req.firebaseUser.uid);
            request.addParameter('displayName', TYPES.VarChar, req.firebaseUser.name);
            request.addParameter('email', TYPES.VarChar, req.firebaseUser.email);
            request.addParameter('photoUrl', TYPES.VarChar, req.firebaseUser.picture);
            request.addParameter('isVerified', TYPES.Bit, req.firebaseUser.email_verified);



            connection.execSql(request);
        });
    });


var addUser = firebaseUser => {
    
};



/*******************************
 *    Export
 *******************************/
module.exports = router;