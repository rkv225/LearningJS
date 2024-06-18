# Map, Filter and Reduce

## Map

Perform an operation and create a new array.

```js
// callback function is passed that takes array element as a param
function double(x) {
    return 2 * x;
}
const doubles1 = arr.map(double); 

// written as arrow function
const doubles2 = arr.map(x => 2 * x);
```

## Filter

Filter elements out of the array.

```js
function even(x) {
    return x % 2 === 0;
}
const evens = arr.filter(even);

// OR

const odds = arr.filter(x => x % 2);
```

## Reduce

Perform an operation on array and get final result which can be a complex object as well. Takes two params higher order function and initial accumulator value/object. This function must contain two params accumulator and current value.

```js
// calculating sum of array
const result = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
```

## Chaining

Map, filter and reduce methods can also be chained.

```js
const output = arr.filter(x => x.age === 26).map(x => x.firstName);
```