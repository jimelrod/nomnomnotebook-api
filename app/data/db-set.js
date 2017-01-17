var Request = require('tedious').Request;

module.exports = class {
    constructor(model, connection) {
        this.model = model;
        this.connection = connection;

        console.log(model.prototype);
    }

    add(model) {
        
    }

    executeQuery() {
        let query = `SELECT * FROM [${this.connection.config.options.database}].[dbo].[${this.model.name}]`;

        let request = new Request(query, (err, rowCount, rows) => {
            console.log("Errors: ", err);
            console.log("RowCount: ", rowCount);
            console.log("Rows: ", rows);

            console.log("Closing db connection");
            this.connection.close();
        });

        let rows = [];
        let rowHanler = function(row) {
            rows.push(row);
        };

        request.on('row', function(row) {
            rowHanler(row);
        });

        request.on('done', function(rowCount, more, rows) {
            console.log("--------------------DONE------------------");
            
            console.log("More: ", more);
            console.log("RowCount: ", rowCount);
            console.log("Rows: ", rows);
        });

        this.connection.execSql(request, err => console.log(err));
    }

    get(arg) {
        // Get all
        if (!arg) {

            this.connection.on('connect', err => {
                if (err) console.log(err);
                else this.executeQuery();
            });
        }

        // switch(typeof arg) {
        //     // Get with filter
        //     case 'function':

        //         // TODO: Figure out how to implement this without 
        //         //       being stupid on DB performance

        //         throw "Using a function to filter GET requests is not currently supported.";

        //         break;

        //     case 'number':



        //         break;

        //     // Unsopprted opperation
        //     default:
        //         throw {
        //             arg: arg,
        //             type: typeof arg,
        //             message: "Unsopprted argument. Please use function or number."
        //         };
        //         break;
        // }
    }

    update(model) {

    }

    delete(modelOrId) {

    }
}