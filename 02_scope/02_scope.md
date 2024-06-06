# Variables and scope in Javascript

### Scope

Boundary where we can access a variable is called scope.

### Lexical Environment

Local memory + environment of parent is accessible from a function.

### Scope Chain

If we try to access variable inside a function. It will first look into the local memory of execution context of current function involcation and then goes on to parent in lexical order. This is called scope chain.

## let and const 

**let and const declarations are hoisted**

### Temporal deadzone

The time till a variable is declared and not initialized is called Temporal Deadzone. Within this time if we access our variable a Reference Error will be thrown.

```js
console.log(y); // undefined
var y = 50;

console.log(x); // Reference Error: cannot use x before initialization
let x = 100;
```

| let/const                                                             | var                                                                         |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| can't access variable before initialization                           | can access variable before initialization though it will return `undefined` |
| stored in separate space called `script` or `block` if inside a block | stored in `global`                                                          |
| not attached to `window` object                                       | attached to `window` object                                                 |
| doesn't allow redeclaration                                           | allows redeclaration                                                        |


**Usage preference: const > let > var**

To minimize temporal deadzone, try to initialize variables on top of the script.

### Block

`{ }` also called **compound statement**. let and const are block scope.

### Shadowing

Redeclaration of same named variable in block/function leads to shadowing.

```js
// Shadowing concept
let b = 100;
{
    let b = 10;
    let a = 10;
    console.log(a); // 10
    console.log(b); // 10
}
console.log(b); // 100
```

**Illegal shadowing:**

Redeclaration below is illegal as `a` is crossing the boundary.

```js
let a = 20;
{
    var a = 30;
}
```