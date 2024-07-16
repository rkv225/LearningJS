/*
// Fetching and consuming the promise
const GITHUB_API = "https://api.github.com/users/rkv225";
const user = fetch(GITHUB_API);
console.log(user);
user.then((data) => {
    console.log(data);
});
*/

// Creating own promises and chain them

function validateCart(cart) {
    if(cart.length) {
        return true;
    }
    return false;
}

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        // create order
        if(!validateCart(cart)) {
            const err = new Error("Cart not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 2000);
        }
    });
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve({
            orderId: orderId,
            paymentMethod: "credit card",
            amount: 100,
            status: "success"
        });
    });
}

function showOrderSummary(paymentInfo) {
    console.log(paymentInfo);
}

const invalidCart = [];
const cart = ["shoes", "pants", "kurta"];

createOrder(cart).then(function(orderId) {
    return proceedToPayment(orderId);
}).then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
}).catch((err) => {
    console.log(err.message);
});

// Demonstrating the use of promise methods

function p1s() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P1 success");
        }, 3000);
    });
}

function p1f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("P1 fail");
        }, 3000);
    });
}

function p2s() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P2 success");
        }, 1000);
    });
}

function p2f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("P2 fail");
        }, 1000);
    });
}

function p3s() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P3 success");
        }, 2000);
    });
}

function p3f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("P3 fail");
        }, 2000);
    });
}

Promise.all([p1s(), p2s(), p3s()]).then(res => {
    console.log('Output from Promise.all([p1s(), p2s(), p3s()]):', res);
});
// output: ['P1 success', 'P2 success', 'P3 success']

Promise.all([p1s(), p2f(), p3s()]).then(res => {
    console.log('Output from Promise.all([p1s(), p2f(), p3s()]):', res);
}).catch(err => {
    console.error('Error from Promise.all([p1s(), p2f(), p3s()]):', err);
});
// output: P2 fail

Promise.allSettled([p1s(), p2f(), p3f()]).then(res => {
    console.log('Output from Promise.allSettled([p1s(), p2f(), p3f()]):', res);
});
/*
output:
[
    {
        "status": "fulfilled",
        "value": "P1 success"
    },
    {
        "status": "rejected",
        "reason": "P2 fail"
    },
    {
        "status": "rejected",
        "reason": "P3 fail"
    }
]
*/

Promise.race([p1f(), p2f(), p3f()]).then(res => {
    console.log('Output from Promise.race([p1f(), p2f(), p3f()]):', res);
}).catch(err => {
    console.error('Error from Promise.race([p1f(), p2f(), p3f()]):', err);
});
// output: P2 fail

Promise.race([p1f(), p2s(), p3s()]).then(res => {
    console.log('Output from Promise.race([p1f(), p2s(), p3s()]):', res);
}).catch(err => {
    console.error('Error from Promise.race([p1f(), p2s(), p3s()]):', err);
});
// output: P2 success

Promise.any([p1f(), p2f(), p3s()]).then(res => {
    console.log('Output from Promise.any([p1f(), p2f(), p3s()]):', res);
}).catch(err => {
    console.error('Error from Promise.any([p1f(), p2f(), p3s()]):', err);
});
// output: P3 success

Promise.any([p1f(), p2f(), p3f()]).then(res => {
    console.log('Output from Promise.any([p1f(), p2f(), p3f()]):', res);
}).catch(err => {
    console.error('Error from Promise.any([p1f(), p2f(), p3f()]):', err);
    console.log('Errors from Promise.any([p1f(), p2f(), p3f()]):', err.errors);
});
/*
output: AggregateError: All promises were rejected
[
    "P1 fail",
    "P2 fail",
    "P3 fail"
]
*/

Promise.any([p1f(), p2s(), p3s()]).then(res => {
    console.log('Output from Promise.any([p1f(), p2s(), p3s()]):', res);
}).catch(err => {
    console.error('Error from Promise.any([p1f(), p2s(), p3s()]):', err);
});
// output: P2 success