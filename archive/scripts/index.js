// Cycles through all the descriptions and displays them one-by-one
const descriptions = ["software engineer", "web developer", "problem-solver"];
let counter = 0;

// Populate the Description Slider with data on website load.
window.onload = function() {
    document.getElementById("descriptionSlider").innerHTML = descriptions[counter];
}

console.log("foo");
setInterval(function() {
    console.log("bar");
    let selectedDescription = descriptions[counter];
    document.getElementById("descriptionSlider").innerHTML = selectedDescription;
    counter += 1;

    if (counter >= descriptions.length) {
        counter = 0;
    }
}, 2000);