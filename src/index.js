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
// destructuring before
var collection5 = [10, "C", true];
var num = collection5[0];
var Uname = collection5[1];
var isAvailable = collection5[2];
// destructuring new from ES5
var collection5 = [10, "C", true];
var n = collection5[0], Pname = collection5[1], Flag = collection5[2];
console.log("Number= ".concat(num, " \nName= ").concat(Pname, " \nIs Available = ").concat(Flag));
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
//union of types
// var collections: string[] | number[] = [10, "A", 20];
var collections = [];
collections[0] = 10;
collections[1] = "A";
collections[2] = 20;
