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
var NewProduct = /** @class */ (function () {
    function NewProduct() {
        this.Name = "TV";
        this.Rating = {
            CustomerRating: { Rate: 3.5, Count: 4000 },
            VendorRating: { Rate: 4.5, Count: 3000 }
        };
    }
    Object.defineProperty(NewProduct.prototype, "VendorRating", {
        get: function () {
            return this.Rating.VendorRating.Rate;
        },
        enumerable: false,
        configurable: true
    });
    return NewProduct;
}());
var tv = new NewProduct();
// console.log(`Vendor rating: ${tv.Rating.VendorRating.Rate}`)
console.log("Vendor rating: ".concat(tv.VendorRating));
console.log("======================================================");
//Methods
var Database = /** @class */ (function () {
    function Database(dbName) {
        console.log("Connected with ".concat(dbName, " Database"));
    }
    Database.prototype.Insert = function () {
        console.log("Data Inserted");
    };
    Database.prototype.Delete = function () {
        console.log("Data Deleted");
    };
    return Database;
}());
// let ins = new Database; // () - not required as constructor will be called automatically
var ins = new Database("Oracle");
//() is required if constructor is expecting parameters
ins.Insert();
