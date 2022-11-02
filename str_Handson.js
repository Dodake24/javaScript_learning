var string= function (){
    console.log("==================Given String==========================================");
    var string="   Hey you are doing good,keep it up   ";
    console.log(string);
    console.log("================length of string=====================================");
    console.log(string.length);
    console.log("====================Remove extra spaces===============================");
    console.log(string.trim());
    console.log("=====================Print remove and count extra spaces========================");

    var trimResult=string.trim();
    console.log(trimResult .length);
    console.log("========================frist and last charcter=================================");
    var string="Hey you are doing good,keep it up"
    console.log(string .charAt (0));
    console.log(string.charAt(string.length-1));
    // or
    // console.log(string.charAt(2));
    // console.log (string.charAt(34,35));



}
string();
// using FE and without function argument and no return type
var string = function(){
    var string="Hey you are doing good,keep it up";
    console.log("======================Total words in string=============================");
    var stepSplit = string.split(" ");
    console.log(stepSplit);
    console.log(stepSplit .length);
    console.log("==============index()of and goods words from the given string===============");
    console.log(string .indexOf("good"));
    console.log("=========================substring() and slice()=======================");
    console.log(string.substring(22));
    console.log(string.slice(22));

    console.log("=====================check string end with up===================");
    console.log(string.endsWith("up"));
    console.log("==================check string starts with hey============================");
    console.log(string.startsWith("hey"));
}
string();







