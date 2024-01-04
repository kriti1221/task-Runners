document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert("Button clicked!");
        });
    });

    console.log("Sample JS loaded and ready!");
});

function sampleFunction() {
    console.log("This is a sample function from the external JavaScript file.");
}

let sampleVar = "This is a sample variable.";