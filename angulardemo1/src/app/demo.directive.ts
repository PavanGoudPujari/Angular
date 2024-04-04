import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  // constructor(private el:ElementRef) {

  //   console.log("Directive applied");

  //   el.nativeElement.styleUrl="background-color:teal;color:white";

  //  }

}
