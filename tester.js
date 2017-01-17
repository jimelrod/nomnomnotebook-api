var dbConfig = require('./config/db-config'); 
var DataLayer = require('./app/data');

var dataLayer = new DataLayer(dbConfig);

var users = dataLayer.users.get();