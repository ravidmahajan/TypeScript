//Accessors

// var uname:string|null = prompt("Enter Name");
// var role: string|null = prompt("Enter role", "admin|manager|customer");
// var productName: string|null = prompt("Enter Product name");

// class NewProduct {
//     public _productName: string|null = null; // _productName means it needs further implementation

//     get ProductName(){
//         return this._productName;
//     }

//     set ProductName(NewName: string| null){
//         if(role == "admin"){
//             this._productName = NewName; // property in methods inside class can be accessed by using this
//         } else {
//             document.write(`Hello ${uname} your role ${role} is not authorized to set product Name`);
//         }
//     }
// }

// let tv = new NewProduct();
// // tv._productName = productName
// tv.ProductName = productName; // we don't use property name, we use alias Name
// //if(tv.ProductName != undefined) {
// if(tv.ProductName){
//     document.write("Product Name: " + tv.ProductName);
// }


console.log("======================================================");
//Multilevel hierarchy accessor

class NewProduct {
    public Name: string = "TV";
    public Rating: any = {
        CustomerRating: {Rate: 3.5, Count: 4000},
        VendorRating: {Rate: 4.5, Count: 3000}
    }

    get VendorRating(){
        return this.Rating.VendorRating.Rate;
    }
}

let tv = new NewProduct();
// console.log(`Vendor rating: ${tv.Rating.VendorRating.Rate}`)
console.log(`Vendor rating: ${tv.VendorRating}`);


console.log("======================================================");

//Methods

class Database {

    constructor(dbName:string){
        console.log(`Connected with ${dbName} Database`);
    }

    public Insert(): void {
        console.log("Data Inserted")
    }

    public Delete(): void {
        console.log("Data Deleted")
    }
}

// let ins = new Database; // () - not required as constructor will be called automatically
let ins = new Database("Oracle");
//() is required if constructor is expecting parameters
ins.Insert();