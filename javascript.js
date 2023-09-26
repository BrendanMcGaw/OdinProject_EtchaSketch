
let targetContainer = document.querySelector(".sketch-container");
// getElementsByClassName actually returns an array. So you must select 0 to target the box as its in position 0 of the array.
let promptButton = document.getElementsByClassName("promptButton")[0];
let totalSquares;
let numberOfSquares = 0;  // = prompt("Please enter the amount of squares you wish to use.");
let sizePercentage;

promptButton.addEventListener("click", function() {
    numberOfSquares = prompt("Please enter an amount of squares, less than 100.");
    if (numberOfSquares > 100) {
        alert("You have entered too high a count. Please try again.")
        numberOfSquares = prompt("Please enter an amount of squares, less than 100.");
    }
    calculateBoxSize();
    totalSquares = numberOfSquares *  numberOfSquares;
    gridBuilder();
});


calculateBoxSize = () => {
    sizePercentage = 100 / numberOfSquares;
}
// We want  to allow the user to input a numberto use  in the grid.
// We therefore must allow the boxbuilder box width  and heig2133ht to be calculated based on a mathematical formula used from the amount of boxes per side.
// 100 /  (User input number.) == Percentage both width and height.
// %width %height = 100 / (userInputNumber)55




gridBuilder = () => {
    for (let i = 0; i < totalSquares; i++) {
        boxBuilder();
    }
}

boxBuilder = () => {
    const box = document.createElement("div");
    box.classList.add('box');
    box.style.display = "flex";
    box.style.width = sizePercentage.toString() + "%";
    box.style.height = sizePercentage.toString() + "%";
    box.style.background = "white";
    targetContainer.appendChild(box);
    box.addEventListener("mouseover", function() {
        this.style.backgroundColor = "red";
    });
}

// box.addEventListener("mouseover", function() {
//     this.style.backgroundColor = "red";
// });
