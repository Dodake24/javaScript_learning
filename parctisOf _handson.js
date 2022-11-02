var string = function() {
    console.log("..............1.print the string as it is....................");
    var string =`    Hey you are doing good,keep it up    `;
    console.log( string);
    console.log("...................2.............................");
    console.log( string.length);
    console.log(`Length of string is:${count }`);
    console.log("...................3.................................................");
    var trimString =str.trim();
    console.log(`Remove extra spaces:${trimString} `);
    console.log(".......................4..........................................");
    var finalResult =count-trimString.length;
    console.log(`Count of extra spaces${finalResult}`);
    console.log("..................5.................................................");
    console.log(`Frist cahr after trim :${trimString.charAt(0)}`);
    console.log(`Last char after trim:${trimString.charAt(33)}` );
    console.log("................6..............................................");
    var stepSplit = trimString.split(" ");
    console.log(`Count of total words :${stepSplit.length}`);
    console.log(".......................7..................................");
    var test =trimString.indexOf("good");
    console.log(`Index of word good is:${test}`);
    console.log(".........................8..................................................");
    console.log(`Using substring starting from index 22:${ trimString.substring (22)}`);
    console.log(`Using slice starting from index 22:${ trimString.slice (22)}`);
    console.log("......................9.......................................");
    console.log(`Is string ends with up :${trimString.endsWith(up)}`);
console.log("...........................10....................................................");
    console.log(`Is string starts with hey :${trimString.endsWith(hey)}`);
}
stringHandsOn();





























