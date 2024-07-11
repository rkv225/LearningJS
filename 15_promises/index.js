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