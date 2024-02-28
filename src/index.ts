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



// destructuring before
var collection5: any[] = [10, "C", true];
var num = collection5[0];
var Uname = collection5[1];
var isAvailable = collection5[2];


// destructuring new from ES5
var collection5: any[] = [10, "C", true];
var [n, Pname, Flag] = collection5;
console.log(`Number= ${num} \nName= ${Pname} \nIs Available = ${Flag}`);

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



//union of types
// var collections: string[] | number[] = [10, "A", 20];

var collections: string[] | number[] = [];
collections[0] = 10;
collections[1] = "A";
collections[2] = 20;