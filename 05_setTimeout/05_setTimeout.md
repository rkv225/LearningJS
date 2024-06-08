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