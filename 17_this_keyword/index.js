"use strict";

// this in global space 
console.log(this); //globalObject - window for browser, global for node js

// this inside a function 
function x() {
    // the value depends on script mode or non strict mode
    // for strict mode: undefined
    // for non strict mode: window
    console.log(this);
}

// this substitution: if the value if this keywork is undefined or null at anytime this is replaced by the value of global object
// the value of this keyword also depends on how the function is called

x(); // function called without a reference, this becomes undefined in script mode
window.x(); // function called from a reference

const obj = {
    a: 10,
    x: function() {
        console.log(this.a);
    },
    y: ()=> {
        console.log(this);
    },
    z: function() {
        const s = () => {
            console.log(this);
        }
        s();
    }
};

const obj2 = {
    a: 20
};

obj.x(); // 10

// obj.x.call(); // Uncaught exception due to read properties of undefined

obj.x.call(obj2); // 20

// arrow functions have the value of this from the lexical environment where they are enclosed

obj.y(); // window object

obj.z(); // obj itself

// this inside dom elements is reference to html element