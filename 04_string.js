var greet ="Good morning bro and sis";
var replaceDemo =greet.replace ("Morning","Evening") ;
cosolne.log(replaceDemo);
console.log("==============toUpperCase() and toLowerCase()===============");
var greet ="Good morning bro and sis"
console.log(replaceDemo.toUpperCase(bro));
console.log(replaceDemo.toLowerCase(sis));

console.log("==============trim()===============");
var greet = "    Good Morning bro and sis            ";
console.log(greet.length);
var trimResult =  greet.trim();
console.log(trimResult.length);
console.log("==============substring()===============");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13, 17));

console.log("==============slice()===============");
console.log(greet.slice(13));
console.log(greet.slice(13, 17));
console.log("==============split()===============");
var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("|");
console.log(splitResult);
var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);


var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);

var fName = "Virat";
var lName = "Kohli";

// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`)


var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);

