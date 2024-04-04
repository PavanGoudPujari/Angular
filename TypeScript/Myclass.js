"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_1 = require("./demo");
var Myclass = /** @class */ (function () {
    function Myclass() {
    }
    Myclass.prototype.somemethod = function () {
        console.log('some method');
        var d = new demo_1.Demo();
        d.greet();
    };
    return Myclass;
}());
var m = new Myclass();
m.somemethod();
