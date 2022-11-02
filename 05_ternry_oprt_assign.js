// check the gender is male and age>=21 marriage eligibility

console.log('===Male marriage Eligibility===');
var maleMarriageEligibility = function (gender,age,boyName) {
    //gender male age >=21 boy name 
        var result = gender =="male"&& age>=21 // false || true
            ? `Hey ${boyName} you are eligible for marriage`

            : ` Hey ${boyName} are not eligible for marriage`;
        console.log(result);
    }
        maleMarriageEligibility("male",21 ,"Billgates");
        console.log("......................................................................");
        maleMarriageEligibility("male", 17, "Stew Jobs");
        console.log("===Female Marriage Eligibility===");
        var femaleMarriageEligibility =function(gender,age,girlName){
            // gendermale age>=17 girlName
            var result = gender =="female"&& age>=16 // false || true
            ? `Hey ${girlName} you are eligible for marriage`
            : ` Hey ${girlName} are not eligible for marriage`;
        console.log(result);
    }
        femaleMarriageEligibility("female",16 ,"Jenifer");
        console.log("................................................................");
        femaleMarriageEligibility("female", 27, "Malinda Gates");

        
        
    