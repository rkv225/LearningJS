localStorage.setItem("hello", "world");
localStorage.setItem("name", "rishabh");

console.log(localStorage.getItem("name")); // rishabh

localStorage.removeItem("name");

console.log(localStorage.getItem("name")); // null
console.log(localStorage.getItem("hello")); // world

localStorage.clear();

console.log(localStorage.getItem("hello")); // null

let object = {
    name: "rishabh",
    city: "aligarh"
};

// storage and retrieval of objects

localStorage.setItem("user", JSON.stringify(object));

console.log(localStorage.getItem("user"));

let parsedObject = JSON.parse(localStorage.getItem("user"));

console.log(parsedObject);