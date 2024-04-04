"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var Order = /** @class */ (function () {
    function Order(prd) {
        this.product = prd;
    }
    Order.prototype.getOrderDetails = function () {
        console.log(this.product.name + "placed sucessfully");
    };
    return Order;
}());
var o = new Order(new Product_1.Product(1, 'book', 2, true));
o.getOrderDetails;
