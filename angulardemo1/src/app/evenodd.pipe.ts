import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenodd',
  pure:false
})
export class EvenoddPipe implements PipeTransform {
  count =1;
  transform(value:any){
    this.count++;
    console.log('---Executed---'+this.count);
   if(value%2==0){
    return value + 'is Even Number';
   }
   return value +'is Odd Number';

  } 

}
