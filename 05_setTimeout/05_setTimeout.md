# setTimeout

This function takes a callback function and number of milliseconds to wait before executing the callback function.

```js
function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 3000);
    console.log("hello");
}
x();

// output:
// hello
// 1
```

The callback is queued inside callback queue and event loop pushes it to call stack when call stack is empty. The setTimeout guarantees that the code will atleast wait for the provided number of milliseconds before getting a chance to get executed. This is the reason why it is a good practise to not block the main thread so that the callback can get chance to execute quickly.

```js
console.log("start");

setTimeout(function() {
    console.log("callback")
}, 0);

console.log("end");

// output:
// start
// end
// callback
```