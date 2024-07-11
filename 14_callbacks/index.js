function createOrder(next) {
    console.log("order create");
    next(showOrderSummary);
}

function proceedToPayment(next) {
    console.log("payment");
    next(updateWallet);
}

function showOrderSummary(next) {
    console.log("order summary");
    next();
}

function updateWallet() {
    console.log("updating wallet");
}

createOrder(proceedToPayment);