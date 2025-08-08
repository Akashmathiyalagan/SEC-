let current=new Date();
let day=current.getDate()+1;
console.log(current);
console.log(current.toString());//local
console.log(day);


class Sample{
    constructor(personName){
        this.personName=personName;
        console.log(personName)
    }
}
let result=new Sample("John Doe");

class Bank{
    constructor(initialamount=0){
        this._balance=initialamount;
    }
    get balance(){
        return this._balance;
    }
    set balance(amount){
        if(amount>0){
        this._balance+=amount;
        console.log(amount)
      }    
    }
}
let b=new Bank(1000);
console.log(b._balance);

b.balance=500;
console.log(b.balance);