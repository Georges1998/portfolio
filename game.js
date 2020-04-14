var colors = generateRandomColor(6);
var colorclickedColor;
var squares = document.querySelectorAll(".square");
var correctColor = document.querySelector("#correctColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var playAgain = document.querySelector("#playAgain");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

correctColor.textContent = colors[pickColor()];
generateSquares();

easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    squares[3].style.display = "none";
    squares[4].style.display = "none";
    squares[5].style.display = "none";
    colors = generateRandomColor(3);
    correctColor.textContent = colors[pickColor()];
    generateSquares();
});

hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected")
    squares[3].style.display = "block";
    squares[4].style.display = "block";
    squares[5].style.display = "block";
    colors = generateRandomColor(6);
    correctColor.textContent = colors[pickColor()];
    generateSquares();
});

playAgain.addEventListener("click", function() {
    location.reload();
});


function generateSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function() {
            clickedColor = this.style.background;
            this.style.background = "black";
            if (correctColor.textContent === clickedColor) {
                message.textContent = "You Win";
                h1.style.background = clickedColor;
                changeColors(clickedColor);
                playAgain.textContent = "Playe Again"

            } else {
                message.textContent = "Try Again"
            }
        });
    }
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var num;
    num = -1;
    while (num < 0 || num >= colors.length) {
        num = Math.ceil(Math.random() * 10) - 1;
    }
    console.log(num);
    return num;
}

function generateRandomColor(num) {
    var arr = [];
    // repeat num times.
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}