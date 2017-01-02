// TODO: Get shit from config...
var admin = require("firebase-admin");
var serviceAccount = require("C:/keys/nomnomnotebook-firebase-adminsdk-uiiy9-e861d48d8a.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nomnomnotebook.firebaseio.com"
});

function parseToken(authHeader) {
    if (/^Bearer ([^\s\.]+\.){2}[^\s\.]+$/.test(authHeader)) {
        return authHeader.replace(/^Bearer /, '');;
    }
}

module.exports = (req, res, next) => {
    let token = parseToken(req.headers.authorization);
    if (!token) {
        res.status(401).json("Malformed/Missing Token");
        return;
    }

    admin
        .auth()
        .verifyIdToken(parseToken(req.headers.authorization))
        .then(decodedToken => {
            // TODO: Figure out if we can use the decoded token...
            next();
        })
        .catch(error => {
            // TODO: Log this...

            // TODO: Send 500 or something
            res.status(401).json("Invalid Token");
        });
};