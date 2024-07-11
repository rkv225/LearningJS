# Promises

## Definition

Promise is a proxy for a value not necessarily known when the promise is created. 

A Promise is in one of these states:
1. pending: initial state or executing state
2. fulfilled: means operation was successfull
3. rejected: means that the operation failed

Promises also solve the problem of callback hell by promise chaining.

```js
let promise = new Promise((resolve, reject) => {
    // do some operation
    if(success) {
        resolve(data);
    }
    if(!success) {
        reject(error);
    }
});
```
