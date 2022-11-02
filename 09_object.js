let variable_name="";
let person ={
    fullName :"Sachin tendulkar",
    city:"Mumbai",
    Age:"42",
    ismarried:"true",
    address:{
        street:"abc",
        pinCode:"12344",
        city:"Pune",
        State:"Mh"
    

},
eat:function(){
    console.log("I am vegeterian");
},
walk: function(){
    console.log("I do walk everyday");
},
details:function(){ `${this.fullName},${this.Age},${this.address.city}` 
    let personDetails=``
}

}

console.log("=========== in operator================");
let isAvailable = "fullName" in mohitPerson;
console.log(isAvailable);
console.log("city" in mohitPerson);
console.log("===========================");

person.details();
console.log(person.address);
person.pinCode = 123456;
console.log(person);
person.profession="Angular Developer"
console.log(person);
delete person.Age;
person. eat();
console.log(person);
console.log(person.city);
console.log(person["Age"]);
let personFullName=person.fullName;
console.log(personFullName);



console.log("=======================");
let collageAbc={

}
console.log(collageAbc);