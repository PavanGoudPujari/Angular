"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo_1 = require("./demo");
var Other = /** @class */ (function () {
    function Other() {
    }
    Other.prototype.otherMethod = function () {
        var d = new demo_1.Demo();
        d.greet();
    };
    return Other;
}());
console.log(' :: otherClass ::');
var o = new Other();
o.otherMethod();
