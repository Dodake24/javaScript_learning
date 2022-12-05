let teacher ={
    fullName:"Arifa Shaikh",
    quallification:"PH.D",
    Age:"35",
    degrees:{
        engineering:`csc`,
        PHD:`Adv Computing`,
        Certificates: {
            Certificate1: "Hacker Rank Participation",
            Certificate2:"Certificate in IFE COURSE",
            Certificate3:"Certificate in Adv Programing",
        },
        teaching :function(){
            let teach =`Teachers Dregrees are:${this.engineering},${this.PHD}`
            return teach;
        }
    }
}
console.log(teacher);
console.log("------------------------------------------");
let vTeach =teacher.degrees.teaching();
console.log(vTeach);
console.log("--------------------------------------------");

console.log(`Update new property City:"Akluj`);
teacher.city="Akluj";
console.log(teacher);
console.log("----------------------------------------------------");

console.log(`Modify existing property fullName`);
teacher.fullName="Arifa Tabrej Shaikh";
console.table(teacher);
console.log("-------------------------------------------------------");

console.log(`Total certificates before delete`);
console.log(teacher.degrees.Certificates);
console.log(teacher);
console.log|("------------------------------------------------------------");

console.log(`Total Certificates after delete`);
delete teacher.degrees.Certificates;
console.table(teacher.degrees.Certificates);
console.log("-------------------------------------------------------");

console.log(`Add new certificate in Nested object`);
teacher.degrees.Certificates.Certificates4="Data Science";
console.table(teacher.degrees.Certificates);
console.log("----------------------------------------------------------------");

console.log(Object.entries(teacher));
console.log(Object.keys(teacher));
console.log(Object.values(teacher));
console.log("---------------------------------------------------------------");


console.log(`log the nested object Certificate on console`);
teacher.Certificates="all";
console.log(teacher);




