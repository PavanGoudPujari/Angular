"use strict";
// class Demo{  //      Encapsulation
//     //rollnumber =100;
//     //rollnumber:number =100;
//     rollnumber:string ='hello';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = void 0;
//     mymethod(){
//         this.rollnumber='demo';
//     }
// }
// let d = new Demo();
// console.log(d.rollnumber);
var Demo = /** @class */ (function () {
    function Demo() {
        this.username = 'vivek';
    }
    Demo.prototype.greet = function () {
        console.log('grret method');
    };
    Demo.prototype.sayHello = function (name) {
        console.log("sayheloo" + name);
    };
    return Demo;
}());
exports.Demo = Demo;
// let d = new Demo();
// console.log(d.username);
// d.greet(); //above  we binded methods and variables in sinlge entity is called encapsulation
// d.sayHello('Anand');
var Myclass = /** @class */ (function () {
    function Myclass() {
    }
    Myclass.prototype.somemethod = function () {
        console.log('some method');
        var d = new Demo(); // has a relation == used object of other class object in this class 
        d.greet;
    };
    return Myclass;
}());
var m = new Myclass();
//m.greet();
