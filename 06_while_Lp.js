// WAP count the total number vowels from the given string a e i o u
var givenString="Good morning IT Champ";// Good morning IT Champ
for (let index=0; index < givenString.length; index++){
    var char=givenString .charAt(index);
    if( char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
        console.log(char);
    }

}
console.log("================2.===============");
//  WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = " I love JavaScript";
for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index); // a
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
        || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        console.log(char);
    }
}
console.log("=============3.================================");


var nums = ['1','2','3','4','5','6','7','8','9','10'];
let sum = 0;
for (let i = 1; i <= 10; i++) {
sum = sum + i;
}
console. log(sum)
//Output: 55.
console.log("================4.==================");
var num = i
var i =0
var num = ['1*1',+'2*2',+'3*3',+'4*4',+'5*5']

for(let i= 1; i<=5;i++)
{
sum =  sum ;
}
console.log(sum);
console.log("=======================5.=======================");
myString="Hard work always pays back";
function evenPositionedChars(myString){
    index=myString;
    for (let index = 0; index < myString.length; index++) {
    //    console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       var chh = myString.charAt(index);
       console.log(chh); 
    }
}

evenPositionedChars("Hard work always pays back");
console.log("==================================5.1=====================================");
myString="Soon I will be Angular IT Champ";
function evenPositionedChars(myString){
    index=myString;
    for (let index = 0; index < myString.length; index++) {
    //    console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       var chh = myString.charAt(index);
       console.log(chh); 
    }
}
  
evenPositionedChars("Soon I will be Angular IT Champ");

console.log("=============odd position charcter=============");
myString="Hard work always pays back";
function oddPositionedChars(myString){
    index=myString;
    for (let index = 0; index < myString.length; index+=2) {
    //    console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       var chh = myString.charAt(index);
       console.log(chh); 
    }
}
  
oddPositionedChars("Hard work always pays back");  

console.log("===============odd position character======================");
myString="Soon I will be Angular IT Champ";
function oddPositionedChars(myString){
    index=myString;
    for (let index = 0; index < myString.length; index+=2) {
    //    console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       var chh = myString.charAt(index);
       console.log(chh); 
    }
}
  
oddPositionedChars("Soon I will be Angular IT Champ");  













