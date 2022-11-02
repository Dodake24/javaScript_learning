var square =function(n){
    console.log(n*n);
}
console.log("square of 5");
var result = square (5);
console.log("square of 6");
  var result =square (6)
  console.log("square of 25");
  var result =  square(25);
  console.log("square of 100");
  var result =square(100);
  console.log("function  type-",typeof square);
  console.log(".............................................");
  var triangalArea = function ( base, hight){
    var area =1/2*(base*hight);
    console.log("Total Triangle Area is="+area);
    console.log("............................");

  }
  triangalArea(45,34);

//  function of area of rectangle
var rectangleArea = function(length,width){
    var rarea =length*width;
    console.log("Total Rectangula Area is ="+rarea);
    console.log("....................................");
}
rectangleArea(499,917);

function swap_values(cricketer,actress){
console.log("Before Swap");
console.log(cricketer,actress);
console.log("after swap");
var temp =cricketer;
cricketer =actress;
console.log(cricketer,actress);
}
swap_values("Virat","Anushka");
swap_values("1000","2000");
console.log(".......................................");

var stringUse = "JavaScript is the most papular language"

// char availabl in the string
console.log("Total char available in the string");
var len =stringUse.length;
console.log(len);
console.log("......................................");
console.log("find the index of char 'S' ");
console.log(stringUse.indexOf ("S"));
console.log(".............................................");
console.log("find the index of string of 'lang' ");
console.log(stringUse.indexOf("lang"));
console.log("................................................");
console.log("find the last char using lenth property");
console.log(stringUse.charAt(stringUse.length-1));
console.log("..................................................");
  