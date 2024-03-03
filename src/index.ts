var username:string = 'Ravi';
// document.write("Hello! " + username);
console.log("Hello! " + username);
 

var Name:string = 'Iphone';
var Price:number|undefined;
if(Price){
    console.log(`The ${Name} costs ${Price}`); //interpolation
} else{
    console.log(`Name= ${Name}`);
}
// if(Price == undefined){
    
// }



var collection: any[] = [10, "C", true];
console.log(collection);

// var collection1: any[] = new Array(10, "C ");
// console.log(collection1);

var collection2: any[] = new Array(10, 20);
console.log(collection2);

// var collection3: any[] = new Array("A", 20);
// console.log(collection3);

var collection4: any[] = new Array();
collection4[0] = 5;
collection4[1] = "B";
console.log(collection4);

console.log("------------------------------------");

// destructuring before
var collection5: any[] = [10, "C", true];
var num = collection5[0];
var Uname = collection5[1];
var isAvailable = collection5[2];


// destructuring new from ES5
var collection5: any[] = [10, "C", true];
var [n, Pname, Flag] = collection5;
console.log(`Number= ${num} \nName= ${Pname} \nIs Available = ${Flag}`);

console.log("------------------------------------");

// Function in an array
var arr: any[] = [10, "C", true, ["Mumbai", "Chennai"], function(){console.log("Function in an array")}];
console.log(arr[3][0]);
arr[4]();


// Properties - For in loop
var categories:string[] = ["Electronics", "Footwear", "Jewellery"];
for(var property in categories){
    console.log(property);
}


// Values - For of loop
var categories:string[] = ["Electronics", "Footwear", "Jewellery"];
for(var value of categories){
    console.log(value);
}

// Properties & values both- For in loop
var categories:string[] = ["Electronics", "Footwear", "Jewellery"];
for(var property in categories){
    console.log(`${property} - ${categories[property]} `);
}
console.log("------------------------------------");


//union of types
// var collections: string[] | number[] = [10, "A", 20];

var collections: string[] | number[] = [];
collections[0] = 10;
collections[1] = "A";
collections[2] = 20;

// Object in TS

let  person : {name: string , age:number}  ={
    name:"John Doe" ,
    age:35
    // gender:  'Male' // Not allowed as it is not part of the interface
    };

console.log(`Name is ${person.name}`);
console.log(`Age is ${person.age}`);


// optional parameter
let  person1 : {name: string , age:number, gender?:string}  ={
    name:"John Doe" ,
    age:35
    // gender:  'Male' // Not allowed as it is not part of the interface
    };

console.log(`Name is ${person1.name}`);
console.log(`Age is ${person1.age}`);
console.log("------------------------------------");

// function in object , optional function
let car: {Name: string, Price: number, Qty: number,  Total: any, Print?: any} = {
    Name: "Tesla",
    Price:  89764,
    Qty:    2,
    Total: function() { return this.Price * this.Qty },
    Print: function () { console.log (`\nName:${this.Name}\nPrice:${this.Price}\nQuantity:${this.Qty}\nTotal = ${this.Total()}`) }
}

car.Print();
console.log("------------------------------------");

let car1: {Name: string, Price: number, Qty: number, Cities: string[], Rating: {Rate: number, Count: number},  Total: any, Print: any} = {
    Name: "Tesla",
    Price:  89764,
    Cities: ["Mumbai", "Delhi"],
    Rating: { Rate: 5.0, Count: 1000},
    Qty:    2,
    Total: function() { return this.Price * this.Qty },
    Print: function () { 
    console.log (`
    Name =${this.Name}\n
    Price=${this.Price}\n
    Quantity=${this.Qty}\n
    Total= ${this.Total()}\n
    Cities: ${this.Cities.toString()}\n
    Rating= ${this.Rating.Rate} [${this.Rating.Count}]`) }
}

car1.Print();
console.log("------------------------------------");

// Array of Objects

let students: {Name: string, Age: number}[] = [{Name: "John", Age: 23}, { Name: "Jane", Age: 21}];

for(var student of students){
    console.log(`${student.Name} - ${student.Age}`);
}


console.log("------------------------------------");

//Map Type
// to use run -> npm i @types/node
let data: Map<string,number> = new Map();
data.set('India', 12)
data.set("USA", 3);
console.log(data);

console.log("------------------------------------");

let newData: Map<any,any> = new Map();
newData.set('India', 12);
newData.set(3, "USA");
console.log(newData);
console.log("------------------------------------");


// date type

let Mfg = new Date();
console.log("Mfg = " + Mfg.toLocaleDateString());
console.log("------------------------------------");
let Mfg1 = new Date("2024-05-06 10:20:32.99");
console.log("Mfg = " + Mfg1.toLocaleDateString());