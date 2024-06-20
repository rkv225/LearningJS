// call method
let myName = {
    firstName: "Rishabh",
    lastName: "Varshney",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

myName.printFullName(); // normal function call
myName.printFullName.call(); // this will call function but reference is not passed
myName.printFullName.call(myName); // call function with reference as myName

let myFriend = {
    firstName: "Akshay",
    lastName: "Sharma"
}

// function borrowing
myName.printFullName.call(myFriend);

let sendMessage = function (message) {
    console.log("Say " + message + " to " + this.firstName + " " + this.lastName);
}

sendMessage.call(myName, "hello");
sendMessage.call(myFriend, "bye");

// apply method
sendMessage.apply(myName, ["hello"]);

// bind method
let sendMessageHandle = sendMessage.bind(myName, ["hello"]);
sendMessageHandle();

// polyfills for bind -- custom bind method
let printAddress = function(city, state, country) {
    console.log(this.firstName + " lives in " + city + ", " + state + ", " + country);
}

Function.prototype.myBind = function(...args1) {
    let curObj = this;
    let params = args1.slice(1);
    return function(...args2) {
        curObj.apply(args1[0], [...params, ...args2]);
    }
}

let handleFromMyBind = printAddress.myBind(myName, "aligarh");
handleFromMyBind("uttar pradesh", "india");