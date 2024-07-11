# Prototype and Prototypal Inheritance

When you create an object in js, js engine attaches a object prototype to the newly created object. We can access prototype properties from that object then.

```js
let arr = ["a", "b"];
let object = { };
function fun() { }
console.log(arr.__proto__ === Array.prototype); // true
console.log(object.__proto__ === Object.prototype); // true
console.log(object.__proto__.__proto__ === null); // true
console.log(fun.__proto__ === Function.prototype); // true
console.log(fun.__proto__.__proto__ === Object.prototype); // true 
```

When we introduce a new property or function into the prototype, then all the object having that prototype will get access to them.

