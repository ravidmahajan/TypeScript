//Interitance

class Super{
    constructor(){
        console.log("Super Class Constructor")
    }
}

class Derived extends Super{
    constructor(){
        super();
        console.log("Super Class Constructor")
    }
}

let object = new Derived();