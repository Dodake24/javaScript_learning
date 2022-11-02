var myName = " My name is Ashvini Dodake";
console.log(myName);
var myDetails = "My Graduation is complited in B.sc from Solapur Univercity";
console.log(myDetails);
function swap_values(crickter,actress){
    console.log("===================================");
    console.log("Before Swap");
    console.log(crickter,actress);
    console.log("========================================");
    console.log("after swap");
    var temp =crickter;
    crickter=actress;
    actress=temp;
    console.log(crickter,actress);
}
swap_values("Virat","Anushka");
swap_values("1000","2000");
console.log("=======addition of  three values============");
function add_three_numbers(num1,num2,num3){
    return num1+num2+num3;
}
var  addition =add_three_numbers(10.23,600,40);
console.log(addition);
var value =add_three_numbers("Hello","Good","Morning");
console.log(value);