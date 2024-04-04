import {Demo} from './demo';

class Myclass { 
    somemethod(){
      console.log('some method');
      let d = new Demo(); 
      d.greet();
      
    }
  }

  let m = new Myclass();
  m.somemethod();