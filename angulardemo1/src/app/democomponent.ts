import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { GreetService } from "./greet.service";

@Component({
  selector:'demo-comp',
  templateUrl:'./demo.html',
  //providers :[GreetService]
})

export class DemoComponent {


    // @Input()
    // msg:any;

    // @Output()
    // testdata = new EventEmitter();

    // getData(event : any){
    //   this.testdata.emit('Hello I am From childComponent'+event);
    // }

    // ngOnDestroy(){
    //   console.log('--NgOnDestroy--');
    // }

    // @Input()
    // msg:any;


    // ngOnChanges(simple:SimpleChanges){
    //   console.log(simple)

    // }
    

    // ngDoCheck(){
    //   console.log('do Check')

    // }

    greetmsg : any;
constructor(private greet:GreetService){

}
    getMessage(){
      this.greetmsg=this.greet.display();
    }
}