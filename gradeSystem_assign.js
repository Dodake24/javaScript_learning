function gradeSystem (score){
    if(score < 35){
        console.log("You are failed.");
        console.log("----------------------------------");
    }
    if (score==35){
        console.log("You are passed");
        console.log("------------------------------------------");
    }
    if(score>=35 && score<60){
        console.log("Passed and GRADE is C");
        console.log("---------------------------------------------");
    }
    if(score>=60 && score <75){
        console.log("Passed and GRADE is B");
        console.log("---------------------------------------------");

    }
    if(score>=75&&score<90){
        console.log("Passed and GRADE is A");
        console.log("---------------------------------------------------");

    }
    if (score>=90&& score<=100){
        console.log("Passed and GRADE is A+");
        console.log("---------------------------------------------------");
        }
        if(score<0||score ==" "){
            console.log("Invalid input");
        console.log("--------------------------------------------------------------");    
        }
        if (score<0||score>=100||score==" "||score==null||score==undefined||typeof score==`string`){
            console.log("Invalid input");
            console.log("-----------------------------------------------------");
        }

}
console.log("score is 66");
gradeSystem(66)