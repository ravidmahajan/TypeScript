//Interitance

class Super{
    constructor(){
        console.log("Super Class Constructor")
    }
}

class Derived extends Super{
    constructor(){
        super();
        console.log("Derived Class Constructor")
    }
}

let object = new Derived();