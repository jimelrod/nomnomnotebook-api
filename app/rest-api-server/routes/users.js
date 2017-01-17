/*******************************
 *    Imports...
 *******************************/
var express = require('express');
var Response = require('../models/response');

// TEMO SHIT.....
var Connection = require('tedious').Connection;
var config = {
    userName: "sa2",
    password: "unclejim32",
    server: "DESKTOP-STNOHJO",
    options: {
        database: "NomNomNotebook",
        useColumnNames: true,
        camelCaseColumns: true
    }
};
var connection = new Connection(config);
var TYPES = require('tedious').TYPES;

var Request = require('tedious').Request;

/*******************************
 *    Handlers
 *******************************/
var router = express.Router();

router
    // .get('/:userid', (req, res) => {
    //     res.json(new Response({
    //         id: req.params.userid,
    //         displayName: "Joe Smith",
    //         email: "elrod.development@gmail.com"
    //     }));
    // })
    .get('/', (req, res) => {

    })
    .get('/:userid', (req, res) => {
        res.json(new Response({
            id: req.params.userid,
            displayName: "Joe Smith",
            email: "elrod.development@gmail.com"
        }));
    })
    .post('/', (req, res) => {
        let val = null;

        let query = "INSERT INTO USER (FirebaseId, DisplayName, Email, PhotoUrl, IsVerified) VALUES (@firebaseId, @displayName, @email, @photoUrl, @isVerified)";
        
        let request = new Request(query, (err, rowCount, rows) => {
            console.log("Errors: ", err);
            console.log("RowCount: ", rowCount);
            console.log("Rows: ", rows);

            console.log("Closing db connection");
            connection.close();
        });

        request.addParameter('firebaseId', TYPES.VarChar, req.firebaseUser.uid);
        request.addParameter('displayName', TYPES.VarChar, req.firebaseUser.name);
        request.addParameter('email', TYPES.VarChar, req.firebaseUser.email);
        request.addParameter('photoUrl', TYPES.VarChar, req.firebaseUser.picture);
        request.addParameter('isVerified', TYPES.Bit, req.firebaseUser.email_verified);

        connection.execSql(request, err => console.log(err));

    });


/*******************************
 *    Export
 *******************************/
module.exports = router;