// Event handler demonstration

function attachEventListener() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function onButtonClick() {
        console.log("Button Clicked", ++count);
    });
}

attachEventListener();