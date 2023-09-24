
let  targetContainer = document.querySelector(".sketch-container");

gridBuilder = () => {
    for (let i = 0; i < 256; i++) {
        boxBuilder();
    }
}

boxBuilder = () => {
    const box = document.createElement("div");
    box.classList.add('box');
    box.style.display = "flex";
    box.style.width = "25px";
    box.style.height = "25px";
    box.style.background = "white";
    targetContainer.appendChild(box);
    box.addEventListener("mouseover", function() {
        this.style.backgroundColor = "red";
    });
}

// box.addEventListener("mouseover", function() {
//     this.style.backgroundColor = "red";
// });
