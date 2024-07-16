# Promises

## Definition
Promise is a proxy for a value not necessarily known when the promise is created.

A Promise is in one of these states:
1. pending: initial state or executing state
2. settled: it means that the promise has finished execution. This leads to one of the following state:
    - fulfilled/success/resolved: means operation was successfull
    - rejected/failure: means that the operation failed

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

## Promise methods
Takes iterables as an input. Noramlly an array of promises is passed as parameter.

### Promise.all
This makes parallel API calls and wait for all of them to finish.
- If all of them finish successfully then we get an array of results on index based on promise respectively.
- If any of the promise fails then the output will be thrown as error and other promises are not awaited(although they are not cancelled).

```js
//output format
['res1', 'res2', 'res3']
```

### Promise.allSettle
This makes parallel API calls and waits for all the promises to settle. Irrespective of promise state, we get an array containing result or error on respective index.

```js
// output format
[
    {
        status: 'fulfilled', 
        value: ''
    },
    {
        status: 'rejected',
        reason: ''
    }
]
```

### Promise.race
It return result from the first promise that gets settled. If first settled promise gives out result then that promise's result is returned else if it fails then that promise's error if returned.

### Promise.any
It return result result of first successfull promise. In case all of the promise fails then the result will be an `aggregate error` i.e. an array of all the errors.