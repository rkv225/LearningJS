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

## Callback Functions

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

### Event bubbling and capturing(trickling)

When an event is fired inside browser it flows from 3 phases within the DOM. These are capuring, target and bubbling phase.
- **Capturing Phase**: The flow goes from outermost parent of an element clicked to the target element. Event handler is called from parent(global) to child(target) i.e. trickles down if capturing is enabled.
- **Target Phase**: Target element is the element where the event originally occurred. Event handlers registered on the element are called.
- **Bubbling Phase**: It is reverse of Capturing phase and default scenario with `addEventListener` method. In this phase, the event bubbles up the target element through its parent element, the ancestor to the global window object.

When event is fired, event listeners are executed if their eventPhase value is equal to current phase.

```js
document.querySelector("#child").addEventListener('click', () => {
    console.log("click event");
}, false); // bubbling is set by default or we can explicitly set to false

document.querySelector("#parent").addEventListener('click', () => {
    console.log("click event");
}, true); // propagating
```

### event.stopPropagation

`event.stopPropagation()` method stops propagation of event and breaks the chain.

```js
document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("click event");
    e.stopPropagation(); // stops event flow
}, true);
```

## Function Currying

It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. 

```js
function calculateVolume(length, breadth, height) {
    return length * breadth * height;
}
console.log(calculateVolume(4, 5, 6));

// converted to currying function
function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));
```