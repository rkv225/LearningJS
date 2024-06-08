# Functions in Javascript

### Function statement / Function declaration

```js
function a() {
    console.log("a");
}
```

### Function expression

```js
var b = function() {
    console.log("b");
}
```

### Anonymous function

```js
function() {

}
```

### Named function expression

```js
var b = function xyz() {
    console.log("b");
}

b(); // legal
xyz(); // illegal - throws ReferenceError
```

### Params and arguments

```js
function a(parameter) {
    console.log(parameter);
}
argument = "a";
a(argument); // a
```

### First class functions

When a function is passed as an argument to a function or a function returned from a function.

```js
function a(b) {
    b();
}
arg = function() {
    console.log("b");
}
a(arg); // b
```

### Arrow Functions

### Callback Functions

Passed as first class citizen and executed inside the function called

```js
function exe(cb) {
    console.log("exe");
    cb();
}

exe(function() {
    console.log("cb");
});
```

### Event Listeners

Event Listeners can be attached to an element which takes a callback function that is called when a particular event takes place.

```js
document.getElementById("clickMe").addEventListener("click", function onButtonClick() {
    console.log("Button Clicked");
});
```

In this the callback functions creates a closure with the outer scope. This crates a burden on memory if we attach a lot of event listeners. In order to reduce this burden we need to remove event listeners when we don't need them. When we remove the event listeners the memory occupied by the closures get freed up.