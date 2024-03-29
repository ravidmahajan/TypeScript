var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
var username = 'Ravi';
// document.write("Hello! " + username);
console.log("Hello! " + username);
var Name = 'Iphone';
var Price;
if (Price) {
    console.log("The ".concat(Name, " costs ").concat(Price)); //interpolation
}
else {
    console.log("Name= ".concat(Name));
}
// if(Price == undefined){
// }
var collection = [10, "C", true];
console.log(collection);
// var collection1: any[] = new Array(10, "C ");
// console.log(collection1);
var collection2 = new Array(10, 20);
console.log(collection2);
// var collection3: any[] = new Array("A", 20);
// console.log(collection3);
var collection4 = new Array();
collection4[0] = 5;
collection4[1] = "B";
console.log(collection4);
console.log("------------------------------------");
// destructuring before
var collection5 = [10, "C", true];
var num = collection5[0];
var Uname = collection5[1];
var isAvailable = collection5[2];
// destructuring new from ES5
var collection5 = [10, "C", true];
var n = collection5[0], Pname = collection5[1], Flag = collection5[2];
console.log("Number= ".concat(num, " \nName= ").concat(Pname, " \nIs Available = ").concat(Flag));
console.log("------------------------------------");
// Function in an array
var arr = [10, "C", true, ["Mumbai", "Chennai"], function () { console.log("Function in an array"); }];
console.log(arr[3][0]);
arr[4]();
// Properties - For in loop
var categories = ["Electronics", "Footwear", "Jewellery"];
for (var property in categories) {
    console.log(property);
}
// Values - For of loop
var categories = ["Electronics", "Footwear", "Jewellery"];
for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
    var value = categories_1[_i];
    console.log(value);
}
// Properties & values both- For in loop
var categories = ["Electronics", "Footwear", "Jewellery"];
for (var property in categories) {
    console.log("".concat(property, " - ").concat(categories[property], " "));
}
console.log("------------------------------------");
//union of types
// var collections: string[] | number[] = [10, "A", 20];
var collections = [];
collections[0] = 10;
collections[1] = "A";
collections[2] = 20;
// Object in TS
var person = {
    name: "John Doe",
    age: 35
    // gender:  'Male' // Not allowed as it is not part of the interface
};
console.log("Name is ".concat(person.name));
console.log("Age is ".concat(person.age));
// optional parameter
var person1 = {
    name: "John Doe",
    age: 35
    // gender:  'Male' // Not allowed as it is not part of the interface
};
console.log("Name is ".concat(person1.name));
console.log("Age is ".concat(person1.age));
console.log("------------------------------------");
// function in object , optional function
var car = {
    Name: "Tesla",
    Price: 89764,
    Qty: 2,
    Total: function () { return this.Price * this.Qty; },
    Print: function () { console.log("\nName:".concat(this.Name, "\nPrice:").concat(this.Price, "\nQuantity:").concat(this.Qty, "\nTotal = ").concat(this.Total())); }
};
car.Print();
console.log("------------------------------------");
var car1 = {
    Name: "Tesla",
    Price: 89764,
    Cities: ["Mumbai", "Delhi"],
    Rating: { Rate: 5.0, Count: 1000 },
    Qty: 2,
    Total: function () { return this.Price * this.Qty; },
    Print: function () {
        console.log("\n    Name =".concat(this.Name, "\n\n    Price=").concat(this.Price, "\n\n    Quantity=").concat(this.Qty, "\n\n    Total= ").concat(this.Total(), "\n\n    Cities: ").concat(this.Cities.toString(), "\n\n    Rating= ").concat(this.Rating.Rate, " [").concat(this.Rating.Count, "]"));
    }
};
car1.Print();
console.log("------------------------------------");
// Array of Objects
var students = [{ Name: "John", Age: 23 }, { Name: "Jane", Age: 21 }];
for (var _b = 0, students_1 = students; _b < students_1.length; _b++) {
    var student = students_1[_b];
    console.log("".concat(student.Name, " - ").concat(student.Age));
}
console.log("------------------------------------");
//Map Type
// to use run -> npm i @types/node
var data = new Map();
data.set('India', 12);
data.set("USA", 3);
console.log(data);
console.log("------------------------------------");
var newData = new Map();
newData.set('India', 12);
newData.set(3, "USA");
console.log(newData);
console.log("------------------------------------");
// date type
var Mfg = new Date();
console.log("Mfg = " + Mfg.toLocaleDateString());
console.log("------------------------------------");
var Mfg1 = new Date("2024-05-06 10:20:32.99");
console.log("Mfg = " + Mfg1.toLocaleDateString());
console.log("------------------------------------");
// Symbol
var ProductId = Symbol();
// let product: {Name: string, Price: number, ProductId: number} = {
//     ProductId: 1,
//     Name: "TV",
//     Price: 45000
// };
// for(property in product){
//     console.log(property);
// }
// datatype problem
// let product: {Name: string, Price: number, ProductId: number} = {
//     [ProductId]: 1 
//     Name: "TV",
//     Price: 45000
// };
// for(property in product){
//     console.log(property);
// }
var product = (_a = {},
    _a[ProductId] = 1,
    _a.Name = "TV",
    _a.Price = 45000,
    _a);
for (property in product) {
    console.log(property);
}
console.log("ProductId=" + product[ProductId]);
console.log("------------------------------------");
//Functions in Typescript
function HelloWorld() {
    console.log("Welcome to TypeScript");
}
HelloWorld();
function Hello(name) {
    return "Hello ".concat(name);
}
console.log(Hello("Ravi"));
//optional parameter in functions
// function Info1(Name: string, Price?: number, Model: string): void{
// // invalid - A required parameter cannot follow an optional parameter
// }
console.log("------------------------------------");
function Info2(Name, Price) {
    if (Price) {
        console.log("".concat(Name, "\n").concat(Price));
    }
    else {
        console.log("".concat(Name));
    }
}
Info2("Audi", 60000);
console.log("------------------------------------");
Info2("BMW");
console.log("------------------------------------");
var new_product = {
    Name: "Refrigerator",
    Price: 10000
};
var product2 = {
    Name: "Refrigerator",
    Price: 10000
};
// product2.Price = 50000; // invalid - readonly rule
product2.Name = "L.G. TV"; // valid
var item = {
    Name: "TV",
    Price: 5000,
    Qty: 2,
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("Name=".concat(this.Name, "\nPrice= ").concat(this.Price, "\nQty= ").concat(this.Qty, "\nTotal= ").concat(this.Total()));
    }
};
item.Print();
console.log("------------------------------------");
var low_compatible_user = {
    Personal: "Personal",
    NRI: "NRI"
};
var high_compatible_user = {
    Personal: "Personal",
    NRI: "NRI",
    Loans: "Loans"
};
var obj = {
    Name: "TV", // if both  classes have same property it will take from the 1st Interface (old will continue)
    Price: 60000,
    Title: "Smart TV",
    CategoryName: "Electronics"
};
// Class Declaration
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
// Class Expression
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
function Hello1() {
}
var welcome = function () {
};
console.log("------------------------------------");
var CategoryName = "Electronics";
var Demo = /** @class */ (function () {
    function Demo() {
    }
    return Demo;
}());
if (CategoryName == "Electronics") {
    Demo = /** @class */ (function () {
        function class_1() {
            this.ProductName = "TV";
            this.Price = 34000;
        }
        return class_1;
    }());
}
else {
    Demo = /** @class */ (function () {
        function class_2() {
            this.EmpName = "TV";
            this.Salary = 35000;
        }
        return class_2;
    }());
}
// A constructor, method, accessor, or property was expected
/*
class ProductDemo {
    var uname = "A";
}
*/
var ProductDemo = /** @class */ (function () {
    function ProductDemo() {
    }
    ProductDemo.prototype.Print = function () {
        var x = 10;
    };
    return ProductDemo;
}());
console.log("------------------------------------");
// Static
var DemoClass = /** @class */ (function () {
    function DemoClass() {
        this.n = 0; // non=static memory
        DemoClass.s = DemoClass.s + 1;
        this.n = this.n + 1;
    }
    DemoClass.prototype.Print = function () {
        console.log("s = ".concat(DemoClass.s, " n = ").concat(this.n));
    };
    DemoClass.s = 0; // static memory
    return DemoClass;
}());
var obj1 = new DemoClass();
obj1.Print();
var obj2 = new DemoClass();
obj2.Print();
var obj3 = new DemoClass();
obj3.Print();
console.log("------------------------------------");
//Access Modifier
var Parent = /** @class */ (function () {
    function Parent() {
        this.Name = "TV";
        this.Price = 23456;
        this.Rating = 5;
    }
    return Parent;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derived;
}(Parent));
var ob = new Derived();
ob.Name; // only Name can be accessed, protected member cannot be accessed outside derived class even using derived class object
