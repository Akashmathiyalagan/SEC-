//an array of object is a collection where each element is an object is an object with properties.
// This is used to group related data together in a structured way.
let details={
    name:"js",
    totalmark:100
}
console.log(details.name);
console.log(details["totalmark"]);
//Nexted object
console.log("---Nexted object---")
let mark={
    name:"js",
    totalmark:100,
    subject:{
        dbms:100,
        java:100
    },
sum:function(){
    let sum=this.subject.dbms+this.subject.java;
    console.log(sum)
}
}
console.log(mark.subject.dbms);
console.log(mark.subject["java"]);
mark.sum()
//Array object
console.log("---Array object---")
// all the function is typed inside the square brackets[].
console.log("all the function is typed inside the square brackets[]")
let Array1=[{
    name:"js",
    totalmark:100,
    subject:{
        dbms:100,
        java:100
    },
sum:function(){
    let sum=this.subject.dbms+this.subject.java;
    console.log(sum)
}
}]
console.log(Array1[0].subject.dbms);
console.log(Array1[0].subject["java"]);
Array1[0].sum()


//object destructuring is a synatax in javascript that allows you to extract values from object and assign 
// them to variables in a clean and readeable way.
console.log("---object destructuring---")
let person={
    job:"SoftwareTester",
    salary:25000
}
const {job, salary}=person
console.log(job+" "+salary);
//also it can be called by const {job:Firstkey,salary:Secondkey}
//console.log(Firstkey+" "+Secondkey)


//Array Methods
// in js the array can be any type of data
console.log("---Array methods---");
let arr=new Array(1,2,3,"Name");// 1,2,3 is an integer type and Name is a character,here the array is declaried with the parantheses.
console.log(arr[2]);
let arr1=["js",true,false]//here the array is declaried in the square brackets [].
//Array destructuring
console.log("---Array Destructuring---");
const[name,b1,b2]=arr1;
console.log(name)

//Array
//Filter
console.log("---Array---")
let student=[
    {name:"Akash",grade:"A+"},
    {name:"john",grade:"D+"}
]
let gradestudents=student.filter(student=> student.grade==="A+");
console.log(gradestudents);

//2.splice()
console.log("---Splice method---");
let names=["Asha","Bala","Charan"];
names.splice(1,1,"David"); //Remove 1 iteam at index 1, insert "David"
console.log(names);