console.log("-----GLOBAL SCOPE-----")
let x=10;//global scope
function sendMessage(){
    console.log("hii")
    console.log(x+10)//ans="20".inside the function the variable is called if the value is changed inside the function it will not effect the outside object.
}
sendMessage();
console.log(x)//ans=10
//------function scope------ 
// it only accessible in the function inn which they are declared.
console.log("-----FUNCTION SCOPE-----")
function scope(){
    let y=15;
    console.log(y);
}
scope()
console.log("y is not defined")
//console.log(y) it cannot be accessable 

//BLOCK LEVEL
console.log("-----BLOCK LEVEL-----")
function check(){
    if(true){
        let name="AKASH";// let is works only in block level
        var z=true;//var keywork is an global key word 
        console.log(name);
    }
    console.log(z)
}
check()
//local scope combain block and function
//-----CALL BACK FUNCTION-----
// A Callback function in js ia a function that is passed as an argument to another function.
// andit is executed after the completion 
console.log("-----CALL BACK-----");
function first1(){
    console.log("function call back one(1)");
}
function second1(){
    first1()// the first function called in the second function
    console.log("function call back two(2)")
}
second1()
// //-----settimeout-----
// console.log("-----setTimeout-----");
 function first(){
     console.log("function call back one(1)");
}
 function second(callback){
    console.log("function call back two(2)")
     setTimeout(callback,2000);
     setInterval(callback,5000);
    clearInterval()
 }
second(first);
let count=0;
let input=()=>{
    count++
    console.log(count);
    if (count<=5){
        input()
    }
}
input()