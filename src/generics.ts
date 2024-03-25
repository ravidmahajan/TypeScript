// class GenDemo {
//     public Print<T>(a: T, b: T){
//         console.log(`a=${a}\nb=${b}`);
//     }
// }

// let genObj = new GenDemo();
// genObj.Print<number>(10, 20);

// genObj.Print<string>("A", "B");


interface IProduct{
    Name: string;
    Price: number;
}

interface IEmployee {
    FirstName: string;
    Designation: string;
    Salary: number;
}

class Service {
    public GetData<T>(data: T){
        for(var property in data){
            console.log(`${property}: ${data[property]}`);
        }
    }
}


let newObj = new Service();
console.log(`--------------Employee Details---------------`);
newObj.GetData<IEmployee>({FirstName: "John", Designation:"Manager", Salary:50000 });
console.log(`--------------Product Details---------------`);
newObj.GetData<IProduct>({Name : "Laptop", Price: 3000});   

newObj.GetData<IProduct[]>([{Name : "Laptop", Price: 3000}, {Name : "Keyboard", Price: 2000}]);   



interface IOracle {
    userName: string;
    password: string;
    database: string;
}

interface IMysql {
    host: string;
    user: string;
    pwd: string;
    db: string;
}

interface IMongoDB {
    url: string;
}

class DB<T>{
    public connectionString: T|null = null;
    public Connect(): void{
        for(var property in this.connectionString){
            console.log(`${property}: ${this.connectionString[property]}`);
        }
    }
}

console.log(`--------------Oracle Connection---------------`);
let oracle = new DB<IOracle>();
oracle.connectionString = {
    userName: 'scott',
    password: 'tiger',
    database: 'orcl'
}

oracle.Connect();

console.log(`--------------MySQL Connection---------------`);

let mysql = new DB<IMysql>();
mysql.connectionString = {
    host: 'localhost', 
    user: 'root',
    pwd: "123456",
    db: 'Empdb'
}

mysql.Connect();

console.log(`--------------Mongo Connection---------------`);

let mongo = new DB<IMongoDB>();
mongo.connectionString = {
    url: "mongodb://127..0.0.1:34565"
}

mongo.Connect();


// Enum
// only numbers have auto implementation

enum ErrorCodes {
    // oK
    OK = 200, // if not initialized , it starts with 0
    // Success = 202
    Success, // incremented based on prev value
    NotFound = 404,
    InternalError // 405 
}

console.log(`${ErrorCodes.NotFound}: ${ErrorCodes[404]}`); // reverse mapping of enums

console.log(`Status codes for OK: ${ErrorCodes.OK}`);
console.log(`Status codes for OK: ${ErrorCodes.Success}`);


// string does not have auto implementation
enum ErrorCodes {
    // OK // will be 0
    Forbidden =  'Forbidden',
    // OK // invalid
    ServerError = 503
}


console.log(`ErrorCodes: ${ErrorCodes.Forbidden}`);

enum ErrorCodes {
   A = 10,
   B=20,
   C= A + B,
//    C = A > B // boolean enums not allowed 
}

console.log(`Addition: ${ErrorCodes.C}`);