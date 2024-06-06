// Scope:
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}
a();

// let and const

console.log(y); // undefined
var y = 50;

// console.log(x); // Reference Error: cannot use x before initialization
let x = 100;

// const zz; // Syntax Error: Missing initializer in const declaration

const z = "hi";
console.log(z); // hi
// z = "bye"; // Type Error: Assignment to constant variable

var y = 60; // redeclaration allowed
console.log(y); // 60

// let x; // Syntax Error: Identifier x has already been declared


// Shadowing:
let t = 100;
{
    let t = 10;
    let u = 10;
    console.log(t); // 10
    console.log(u); // 10
}
console.log(t); // 100


// Illegal Shadowing:
let w = 20;
{
    // var w = 30; // Uncaught SyntaxError: Identifier 'w' has already been declared
}