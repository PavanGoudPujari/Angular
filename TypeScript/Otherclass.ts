import {Demo} from './demo';

class Other{
    otherMethod(){
        let d = new Demo();
        d.greet();
        
    }
}
console.log(' :: otherClass ::')
let o = new Other();
o.otherMethod();