
// console.log("=================================");
// class Person{
//     fullName,
//     city,
//     age,
//     gender
//     constructor(myName,myCity,myAge,myGender){
//      this.fullName=myName;
//      this.city=myCity;
//      this.age=myAge;
//      this.gender=myGender;
//     }
// }
// let sachin = new Person("sachin Tendulkr","Pune","45","male");

// let rohit = new Person("Rohit Sharma","Mumbai","43","male");
// console.log(sachin);
// console.log(rohit);

// function show(arg1,arg2){

// }
// show (10,20);

class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(
            sachin.details(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`));
    }

    
}
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);

