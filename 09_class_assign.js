// Q1.Define a class for vehichal which should contains.
// 1.Properties or attributes or data member.
// 2. Constructer.

class vehichal{
    name
    color
    engine
    price
    constructor(name,color,engine,price)
    {
this.name=name;
this.color = color;
this.engine=engine;
this.price=price;
    } ;   
}
let bike = new vehichal("KTM","red","125cc","2.2lack");
let car = new vehichal("Ertica","Gray","758cc","22lack");
let bike2 = new vehichal("Bullet 350","golden","346cc","2.1lack");
let car2 = new vehichal("Ginnee","red","896cc","2corror");
console.log(bike);
console.log(car);
console.log(bike2);
console.log(car2);

console.log("---------------------------------------------------------------");
// Q2. Define class for Collage which must contain.
// 1.Properties or attributes or data member.
// 2.constructer

class collage{
    constructor(collage_name,collage_address,collage_established,collage_faculty){
        this.collage_name =collage_name;
        this.collage_address =collage_address;
        this.collage_established =collage_established;
        this.collage_faculty =collage_faculty;
    }
    details(){;
        
        console.log(`collage Details :${this.collage_name}${this.collage_address}${this.collage_established}${this.collage_faculty}`);

    }

}
let collage1 =new collage("MMP collage","Mangalwedha",2009, 40);
let collage2 =new collage("KBP collage","Pandharpur",1980, 50);
let collage3 =new collage("sveri collage","Pandharpur",1990, 70);
let collage4 =new collage("SSDM collage","Mangalwedha",1985, 30);

console.log(collage1);
console.log(collage2);
console.log(collage3);
console.log(collage4);

console.log("-------------------------Details-----------------------------------");
collage1.details();
collage3.details();
console.log("---------------------------typeof--------------------------------------");
console.log(typeof collage);
console.log(collage1 instanceof collage);
console.log("***********************************************************************************");
// Q3.Write a function -->travers
console.log("----------------------------Q3 traverse object(using for-in-loop)----------------------");
// function travers_object() with one arg .such that it travers the complete

function travers(object){
    
    for(const key in collage1){
        if (Object .hasOwnProperty.call(key)){
            
            console.log (`${key}:${collage1[key]}`);
        }
    }
}
travers(collage1);
console.log("-------------------------------------------------------------------------------");
function travers(myObject){
    for(const key in collage2){
        if(Object.hasOwnProperty.call(collage2,key)){
            console.log (`${key}:${collage2[key]}`);
        }
    }
}

travers(collage2);
console.log("-------------------------------------------------------------------------------");
function travers(myObject){
    for(const key in collage3){
        if(Object.hasOwnProperty.call(collage3,key)){
            
            console.log (`${key}:${collage3[key]}`);
        }
    }
}
travers(collage3);
console.log("********************************************************************************");
// Q4.WAP to print fiboonacci series till 7th occurrence

function getFibonacci(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }

    return b;
  }
  console.log(getFibonacci(7));