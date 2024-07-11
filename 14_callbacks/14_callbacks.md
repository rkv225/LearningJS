# Callback Function

## Definition

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

## Drawbacks

- Callbacks don't scale well in complex asynchronous code, it gets hard and complex to read and even more tricky to debug.
- Inefficient as everything executes sequentially.
- Nested callbacks occur when we need to execute things based on previous results. This is also called as callback hell.
