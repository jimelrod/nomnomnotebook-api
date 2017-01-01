// TODO: Get shit from config...
var admin = require("firebase-admin");

var serviceAccount = require("C:/keys/nomnomnotebook-firebase-adminsdk-uiiy9-e861d48d8a.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nomnomnotebook.firebaseio.com"
});




module.exports = (req, res, next) => {
    
    debugger;

    // admin
    //     .auth()
    //     .verifyIdToken(idToken)
    //     .then(decodedToken => {
    //         console.log(decodedToken);
    //         next();
    //     })
    //     .catch(error => {
    //         console.log("ERROR authentication token", error);
    //     });
        
    // TEST ONLY!
    next();
};