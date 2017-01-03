// TODO: Get shit from config...
var admin = require("firebase-admin");
var serviceAccount = require("C:/keys/nomnomnotebook-firebase-adminsdk-uiiy9-e861d48d8a.json");

(function test5() {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://nomnomnotebook.firebaseio.com"
    });
    console.log("Firebase app initialized");
})();

function parseToken(authHeader) {
    if (/^Bearer ([^\s\.]+\.){2}[^\s\.]+$/.test(authHeader)) {
        return authHeader.replace(/^Bearer /, '');
    }
}

function authenticate(req, res, next) {
    let token = parseToken(req.headers.authorization);
    if (!token) {
        // TODO: Better error messages?
        res.status(401).json("Malformed/Missing Token");
        return;
    }

    admin
        .auth()
        .verifyIdToken(parseToken(req.headers.authorization))
        .then(decodedToken => {
            //user = decodedToken;
            req.firebaseUser = decodedToken;
            next();
        })
        .catch(error => {
            // TODO: Log this...

            // TODO: Send 500 or something
            res.status(401).json("Invalid Token");
        });
};



module.exports = authenticate;

