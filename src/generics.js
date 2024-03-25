// class GenDemo {
//     public Print<T>(a: T, b: T){
//         console.log(`a=${a}\nb=${b}`);
//     }
// }
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.GetData = function (data) {
        for (var property in data) {
            console.log("".concat(property, ": ").concat(data[property]));
        }
    };
    return Service;
}());
var newObj = new Service();
console.log("--------------Employee Details---------------");
newObj.GetData({ FirstName: "John", Designation: "Manager", Salary: 50000 });
console.log("--------------Product Details---------------");
newObj.GetData({ Name: "Laptop", Price: 3000 });
newObj.GetData([{ Name: "Laptop", Price: 3000 }, { Name: "Keyboard", Price: 2000 }]);
var DB = /** @class */ (function () {
    function DB() {
        this.connectionString = null;
    }
    DB.prototype.Connect = function () {
        for (var property in this.connectionString) {
            console.log("".concat(property, ": ").concat(this.connectionString[property]));
        }
    };
    return DB;
}());
console.log("--------------Oracle Connection---------------");
var oracle = new DB();
oracle.connectionString = {
    userName: 'scott',
    password: 'tiger',
    database: 'orcl'
};
oracle.Connect();
console.log("--------------MySQL Connection---------------");
var mysql = new DB();
mysql.connectionString = {
    host: 'localhost',
    user: 'root',
    pwd: "123456",
    db: 'Empdb'
};
mysql.Connect();
console.log("--------------Mongo Connection---------------");
var mongo = new DB();
mongo.connectionString = {
    url: "mongodb://127..0.0.1:34565"
};
mongo.Connect();
// Enum
// only numbers have auto implementation
var ErrorCodes;
(function (ErrorCodes) {
    // oK
    ErrorCodes[ErrorCodes["OK"] = 200] = "OK";
    // Success = 202
    ErrorCodes[ErrorCodes["Success"] = 201] = "Success";
    ErrorCodes[ErrorCodes["NotFound"] = 404] = "NotFound";
    ErrorCodes[ErrorCodes["InternalError"] = 405] = "InternalError"; // 405 
})(ErrorCodes || (ErrorCodes = {}));
console.log("".concat(ErrorCodes.NotFound, ": ").concat(ErrorCodes[404])); // reverse mapping of enums
console.log("Status codes for OK: ".concat(ErrorCodes.OK));
console.log("Status codes for OK: ".concat(ErrorCodes.Success));
// string does not have auto implementation
(function (ErrorCodes) {
    // OK // will be 0
    ErrorCodes["Forbidden"] = "Forbidden";
    // OK // invalid
    ErrorCodes[ErrorCodes["ServerError"] = 503] = "ServerError";
})(ErrorCodes || (ErrorCodes = {}));
console.log("ErrorCodes: ".concat(ErrorCodes.Forbidden));
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["A"] = 10] = "A";
    ErrorCodes[ErrorCodes["B"] = 20] = "B";
    ErrorCodes[ErrorCodes["C"] = 30] = "C";
    //    C = A > B // boolean enums not allowed 
})(ErrorCodes || (ErrorCodes = {}));
console.log("Addition: ".concat(ErrorCodes.C));
