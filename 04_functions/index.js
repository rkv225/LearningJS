// Event handler demonstration

function attachEventListener() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function onButtonClick() {
        console.log("Button Clicked", ++count);
    });
}

attachEventListener();

// function currying using bind

function x(a, b) {
    console.log(a, b);
}

let y = x.bind(this, 2);
y(3);

// function currying using closures

function clf(s) {
    return function(t) {
        console.log(s, t);
    }
}
 
let clfHandle = clf(5);
clfHandle(6);