 # What is JavaScript?

**Javascript is a synchronous single threaded language**

JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich.

JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:

- Browser Application Programming Interfaces (APIs) built into web browsers, providing functionality such as dynamically creating HTML and setting CSS styles; collecting and manipulating a video stream from a user's webcam, or generating 3D graphics and audio samples.
- Third-party APIs that allow developers to incorporate functionality in sites from other content providers, such as Disqus or Facebook.
- Third-party frameworks and libraries that you can apply to HTML to accelerate the work of building sites and applications.

# Execution Context

**Everything in JavaScript happens inside an "Execution Context"**

```mermaid
block-beta
    columns 2
    memory["Memory(variable environment)"] code["Code(thread of execution)"]
    keyvalue["key : value \n a : 10 \n fn: { ... } \n . \n ."] c1["---------- \n ---------- \n ---------- \n ---------- \n ----------"]
```

## How JavaScript code is executed?

- A `Global execution context` is created by js engine when we run a code. This execution context is created in two phases:
    1. Memory creation phase
    2. Code execution phase
- In **memory creation phase** js engine scans the code and places all variables encountered with a special value `undefined` and for functions with their definitions.
- In **code execution phase** js engine executes code line by line. As soon it enconters any function, it creates a new execution context and starts the same execution process again.
- After the executon of code the current execution context is destroyed.

## Call Stack

**Call stack maintains the order of execution of execution contexts**

When a javascript program is run, call stack is populated with a global execution context. All the function invocations, their execution context is pushed onto the call stack. When a function return or finishes execution then the execution context is popped out of the call stack.

# Hoisting

Access a variable without initializing it.

```js
console.log(x); // undefined
var x = 10;
console.log(x); // 10
console.log(y); // ReferenceError : y is not defined
```

# Window Object

Global object created by js engine. In global space `this` refers to `window`.

# async and defer

## Default Behaviour
```html
<script src="example.js"></script>
```

When a `<script>` tag is encountered, parsing of HTML is blocked untilthe javascript is fetched and executed. This leads to slower page load times. It is generally a practice to keep `<script>` tag at last within `<body>` so that the page gets loaded first.

```mermaid
---
displayMode: compact
---
gantt
    title Default Behaviour
    axisFormat %
    section HTML
        HTML parsing           :active, a, 0, 1d
        HTML parsing paused    :milestone, b, after a, 2d
        HTML parsing continue  :active, c, after b, 1d
    section Javascript
        Script download        :d, after a, 1d
        Script execution       :crit, e, after d, 1d
```

## Async
```html
<script src="example.js" async></script>
```

Scripts are loaded in parallel without blocking the HTML. Once script is downloaded, it is executed regardless of HTML finished parsing or not. It is useful to load scripts in this manner which doesn't depend on DOM being fully loaded or other scripts.

```mermaid
---
displayMode: compact
---
gantt
    title async behaviour
    axisFormat %
    section HTML
        HTML parsing           :active, a, 0, 1d
        HTML parsing           :active, b, after a, 1d
        HTML parsing paused    :milestone, c, after b, 1d
        HTML parsing continue  :active, d, after c, 1d
    section Javascript
        Script download        :e, after a, 1d
        Script execution       :crit, f, after e, 1d
```

## Defer
```html
<script src="example.js" defer></script>
```

Scripts are loaded in parallel without blocking the HTML. Scripts will defer their execution until the HTML has been parsed. They order execute in the order they appear in the document. It is useful when the script relies on the DOM being fully parsed or when script execution order is important.

```mermaid
---
displayMode: compact
---
gantt
    title defer behaviour
    axisFormat %
    section HTML
        HTML parsing           :active, a, 0, 1d
        HTML parsing           :active, b, after a, 1d
        HTML parsing           :active, c, after b, 1d
    section Javascript
        Script download        :d, after a, 1d
        Script execution       :crit, e, after c, 1d
```