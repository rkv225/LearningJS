let arr = ["akshay", "rishabh"];
let object = {
    name: "Rishabh",
    city: "Aligarh",
    getIntro: function() {
        console.log(this.name + " is from " + this.city);
    }
}
function fun() { }
console.log(arr.__proto__ === Array.prototype); // true
console.log(object.__proto__ === Object.prototype); // true
console.log(object.__proto__.__proto__ === null); // true
console.log(fun.__proto__ === Function.prototype); // true
console.log(fun.__proto__.__proto__ === Object.prototype); // true 

let object2 = {
    name: "Akshay"
}

// Never do this
object2.__proto__ = object;
console.log(object2.name); // Rishabh
console.log(object2.city); // Aligarh
console.log(object2.getIntro()); // Akshay is from Aligarh