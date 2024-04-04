import { Product } from "./Product";
class Order{

    product:Product;
    constructor(prd:Product){
        this.product=prd;

    }

    getOrderDetails(){
        console.log(this.product.name+"placed sucessfully");
    }
}

let o = new Order(new Product(1,'book',2,true));
o.getOrderDetails();