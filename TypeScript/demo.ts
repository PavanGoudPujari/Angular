// class Demo{  //      Encapsulation
//     //rollnumber =100;
//     //rollnumber:number =100;
//     rollnumber:string ='hello';

//     mymethod(){
//         this.rollnumber='demo';
//     }
// }

// let d = new Demo();

// console.log(d.rollnumber);





export class Demo{
    username:string = 'vivek';
    protected address:string ='Hyd';
    private pin: number = 123;
    static contact: 9999999;
    greet(){
        console.log('grret method');
    }

    sayHello(name){
        console.log("sayheloo"+name)
    }
}


// let d = new Demo();

// console.log(d.username);
// d.greet(); //above  we binded methods and variables in sinlge entity is called encapsulation
// d.sayHello('Anand');

class Myclass { // extends Demo   extends used is a relation
  somemethod(){
    console.log('some method');
    let d = new Demo(); // has a relation == used object of other class object in this class 
    d.greet;
    
  }
}

let m = new Myclass();

//m.greet();