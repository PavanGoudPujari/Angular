var ArrowFunctionDemo = /** @class */ (function () {
    function ArrowFunctionDemo() {
    }
    ArrowFunctionDemo.prototype.display = function () {
        console.log('hello all');
    };
    ArrowFunctionDemo.prototype.greet = function () {
        console.log('Hello i am greet');
        this.display();
    };
    return ArrowFunctionDemo;
}());
var a = new ArrowFunctionDemo();
a.greet();
