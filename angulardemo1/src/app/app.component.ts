import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { GreetService } from './greet.service';
import { UserService } from './user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //providers :[GreetService]
  styleUrls:['./app.component.css']
})
export class AppComponent {

  // users:any=[];

  // constructor(private greet:GreetService, private userservice:UserService){}


  // displayusers(){
    
  //   this.userservice.getUsers().subscribe(data => this.users=data);
  // }
   title = 'angulardemo1';
//   result:any;
//   msg= 'hello wakeup';

//   price = 20;

//   setPrice(val:any){
//     this.price=val;
//   }

//   convertUpper(){
//     this.msg=this.msg.toUpperCase();
//   }

//   constructor(){
//     this.convertUpper();
//   }
  
//   age:number =17;

//   // res:any;
//   // op:any;



//   // display(val:any){
//   //   console.log('hello i am a method'+val);
    
//   // }

//   // add(no1:any,no2:any){
//   //   this.res =Number(no1)+Number(no2);
//   // }
//   // sub(no1:any,no2:any){
//   //   this.res =Number(no1)-Number(no2);
//   // }

// getValue(item:any){
//   this.result=item;
// }

// // getsomething(val:any){
// //   this.op=val;
// // }



// topics =['components','services', 'forms', 'directives','routers']

// isEligible(item:any){
//   this.age = item;
// }



// show=true;
// childinput:any;
// ngOnInit(){
//   console.log('hello i am from oninit ----');
//  // alert('Hello');

// }

// display(){
//   this.show =!this.show;
// }

// ngOnDestroy(){

//   console.log("destroyed");

// }
// ngAfterContentInit(){
//   console.log("content Init");
// }
// ngAfterContentChecked(){
//   console.log("content checked");
// }
// ngAfterViewInit(){
//   console.log("viewInit");
// }

// ngAfterViewChecked(){
//   console.log("ViewChecked");
// }

// setMessage(val:any){
//   this.childinput=val;
// }

// msg:any;

// constructor(private greet:GreetService){

// }

// ngOnInit(){
//   this.msg=this.greet.display();
// }


//Forms

//  msg:any;

//  setValue(val:any){
//   this.msg=val;
//   console.log('setvalue method '+this.msg);
//   this.update();

//  }

//  update(){
//   this.msg='Updated Value';
//   console.log('update method '+this.msg);
//  }

// changeValue(){
//  this.msg="updating from ts"
// }


//Reactive Forms

// signupform:FormGroup;


// constructor(){
// this.signupform= new FormGroup({});
// }
// ngOnInit(){
//   this.signupform = new FormGroup({
//        'username': new FormControl(null,Validators.required),
//        'password' :new FormControl(null),
//        'contact':new FormControl(null),
//        'email':new FormControl(null,[Validators.email,Validators.maxLength(10)])
//   });
// }

// submitData(){
//   console.log(this.signupform);
// }

//Template Driven Forms

getdetails(details:any){
  console.log(details);
}

}
