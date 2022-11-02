console.log("......print the number from 5 to 15 by incrementing 1.......");
// WAP to print the numvber form 5 to 15 by incrementnig 1

for (var test = 5; test <= 15; test++) {
    console.log(test);
}
console.log(".....print the number from 50 to 40 by decrementing by 1.....");
// WAP to print the numvber form 50 to 40 by decrementnig 1
for (var test = 50; test > 40; test--) {
    console.log(test);
}

console.log(".....find the frist 15 ood number.....");
//WAP to find first 15 ood numbers
var countOdd = 0; // 2
for (let index = 0; index < 30; index++) { // 1  2
    if (index % 2 == 0) {
        console.log(index); // 0  2 
        countOdd = countOdd + 1;
        if (countOdd == 15) {
            break;
        }
    }

}

console.log(".....find the frist 10 even number.....");
//WAP to find first 10 even numbers
var countEven = 0; // 2
for (let test = 0; test < 20; test++) { // 1  2
    if (test % 2 == 0) {
        console.log(test); // 0  2 
        countEven = countEven + 1;
        if (countEven == 10) {
            break;
        }
    }

}
console.log(" ......print table of 5 like -> 5 10 15 20 25....50.");
// WAP to print the table 5 like 5 10 15 20 25...50

var i = 0;
for (let i = 5; i <= 50; i += 5) {
    if (i % 1 === 0) {
        console.log(i);
        i = i;
        if (i == 50) {
            break;
        }
    }
}
console.log(".......print the value like->10 20 30 40....100...");
// WAP print the value like->10 20 30 40....100.
var i = 0;
for (let i = 10; i <= 100; i +=5 ) {
    if (i % 2 == 0) {
        console.log(i);
        i = i + 5;
        if (i == 100) {
            break;
        }
    }
}
console.log("... the table of 10 in revers order like  100 90 80 70 .....10");
//WAP the table of 10 in revers order like  100 90 80 70 .....10

for (let index=100; index>=10; index=index-10){
    console.log(index);
}