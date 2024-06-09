// print i value after every second

/*
function print() {
    for(var i = 1; i <= 5; i++) {
        function p(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
        }
        p(i);
    }
}

print();
*/

// demonstrating callback queue execution

console.log("start");

// callback function to be eecuted after 5 seconds
setTimeout(function() {
    console.log("callback");
}, 5000);

var currentTime = new Date().getTime(); // current time
var targetTime = currentTime + 10000; // current time + 10 seconds
// blocking the main thread of execution
while(currentTime < targetTime) {
    currentTime = new Date().getTime(); // update the current time
}

console.log("end")

// as this code block the main thread of execution for 10 seconds, the callback will keep waiting for its turn inside callback queue. Here in this case it will take 10 seconds