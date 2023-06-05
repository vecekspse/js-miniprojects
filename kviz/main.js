"use strict"
const levels = [{
        title: "vitezny oblouk",
        img: "images/obrazek1.jpg"
    },
    {
        title: "koloseum",
        img: "images/obrazek2.jpg"
    },
    {
        title: "eiffelova vez",
        img: "images/obrazek3.jpg"
    }
];


class Kviz {
    constructor() {
        this.tiles = document.querySelectorAll(".game > div");
        this.levels = levels;
        this.levelIndex = 0;
        this.scoreCounter = 0;
        this.scoreContainer = document.querySelector(".tip-number");
        this.tipContainer = document.querySelector("input.your-tip");

        this.tilesReveals();
        this.sendAnswer();
        this.nextGame();
        this.changeImage();
    }

    changeImage() {
        document.querySelector(".game").style.backgroundImage = "url("+ this.levels[this.levelIndex].img +")";
    }

    nextGame() {
        document.querySelector(".next").addEventListener("click", () => {
            this.levelIndex++;
            if(this.levelIndex === this.levels.length) {
                this.levelIndex = 0;
            }
            this.tilesReset();
            this.scoreChange(true);
            this.changeImage();
            this.tipContainer.value = "";
            console.log(this.levelIndex);
        })
    }

    sendAnswer() {
        document.querySelector(".answer").addEventListener("click", () => {
            if(this.tipContainer.value == this.levels[this.levelIndex].title) {
                alert("Je to správně! Máte " + (20 - this.scoreCounter) + " bodů!");
            } else {
                alert("Je to špatně :(" + this.levels[this.levelIndex].title);
            }
        });
    }

    tilesReveals() {
        this.tiles.forEach(tile => {
            tile.addEventListener("click", () => {
                if(tile.className === "bg-primary") {
                    this.scoreChange();
                }
                tile.className = "bg-transparent";
            })
        })
    }

    tilesReset() {
        this.tiles.forEach(tile => {
            tile.className = "bg-primary";            
        })
    }

    scoreChange(reset = false) {
        if(reset) {
            this.scoreCounter == 0;
            this.scoreContainer.textContent = 0;
        }
        this.scoreContainer.textContent = ++this.scoreCounter;
    }
}

let k = new Kviz();