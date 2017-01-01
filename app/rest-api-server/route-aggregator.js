/*******************************
 *    Imports...
 *******************************/
var fs = require("fs");
var path = require("path");

/*******************************
 *    Main
 *******************************/
module.exports = () => {
    let jsExtensionPattern = /\.js$/;
    let routeDir = 'routes';
    let routes = [];

    fs 
        .readdirSync(path.join(__dirname, routeDir))
        .filter(file => {
            return jsExtensionPattern.test(file);
        })
        .forEach(file => {
            let name = file.replace(jsExtensionPattern, '');
            
            let endpoint = `/${name}`;
            let router = require(`./${routeDir}/${name}`);

            routes.push({
                endpoint: endpoint,
                router: router
            });
        });

    return routes;
};