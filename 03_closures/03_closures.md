# Closures

Function bind together with its lexical environment

```js
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
z(); // 7
```

**Uses of closures:**
- module design pattern
- currying
- functions like once
- memoize
- maintain state in async
- setTimeout
- iterators

