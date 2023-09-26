
let targetContainer = document.querySelector(".sketch-container");
// getElementsByClassName actually returns an array. So you must select 0 to target the box as its in position 0 of the array.
let promptButton = document.getElementsByClassName("promptButton")[0];
let totalSquares;
let numberOfSquares = 0;  // = prompt("Please enter the amount of squares you wish to use.");
let sizePercentage;


// Creates an event listener that upon clicking the "Button" will prompt the user to input the amount of detail desired in the grid.
promptButton.addEventListener("click", function() {
    numberOfSquares = prompt("Please enter an amount of squares, less than 100.");
    // Limits the number of squares to 100 x 100 for performance sake.
    if (numberOfSquares > 100) {
        alert("You have entered too high a count. Please try again.")
        numberOfSquares = prompt("Please enter an amount of squares, less than 100.");
    }
    calculateBoxSize();
    // Finds us the total amount of squares in the grid.
    totalSquares = numberOfSquares *  numberOfSquares;
    gridBuilder();
});

// Takes the amount of squares chosen and finds what percentage it takes for those numberOfSquares to distribute covering 100% of the container.
// Can then be used in the boxBuilder to individually create the boxes at the correct width and height percentage.
calculateBoxSize = () => {
    sizePercentage = 100 / numberOfSquares; 
}


// We want  to allow the user to input a number to use  in the grid.
// We therefore must allow the boxbuilder box width  and height to be calculated based on a mathematical formula used from the amount of boxes per side.
// 100 /  (User input number.) == Percentage both width and height.
// %width %height = 100 / (userInputNumber)55


// Builds the grid based on the total number of squares that will be present within the container.
gridBuilder = () => {
    for (let i = 0; i < totalSquares; i++) {
        boxBuilder();
    }
}

// Creates a new box everytime the function is run, calculating the correct height and width of each box given the users input.
boxBuilder = () => {
    const box = document.createElement("div");
    // required to create a class named box for each div created.
    box.classList.add('box');
    box.style.display = "flex";
    box.style.width = sizePercentage.toString() + "%";  // Must change the number to a string in order to use it as a valid CSS input.
    box.style.height = sizePercentage.toString() + "%"; // Must change the number to a string in order to use it as a valid CSS input.
    box.style.background = "white";
    // Makes our div elements class named box, append to the sketch-container limiting their location to be created to within the box.
    targetContainer.appendChild(box);
    box.addEventListener("mouseover", function() {
        // this allows it to target the element class named box and make changes based on the event's function.
        this.style.backgroundColor = "red";
    });
}

// box.addEventListener("mouseover", function() {
//     this.style.backgroundColor = "red";
// });
