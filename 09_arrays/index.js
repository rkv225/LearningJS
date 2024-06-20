// map
function double(x) {
    return 2 * x;
}

const nums = [1, 2, 3, 4, 5, 6]

var doubleNums = nums.map(double);
console.log(doubleNums);

var tripleNums = nums.map(x => 3 * x);
console.log(tripleNums);

// filter
function even(x) {
    return x % 2 === 0;
}
const evenValues = nums.filter(even);
console.log(evenValues);

const oddValues = nums.filter(x => x % 2);
console.log(oddValues);

// reduce

const sum = nums.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(sum);

function findMax(max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}
const maximum = nums.reduce(findMax, -1);
console.log(maximum);

const users = [
    { firstName: "akshay", lastName: "sharma", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

const output = users.reduce(function(acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] = acc[curr.age] + 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(output);