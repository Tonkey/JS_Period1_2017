//Constants are immutable variables, however the content of the constant can be changed.
const PI = 3.141593 //ES6 constant
PI > 3.0

//Below is the ES5 version of a constant.
//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})
PI > 3.0;
