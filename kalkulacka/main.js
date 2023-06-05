"use strict"

class Calculator {
    constructor() {
        this.resultContainer = document.querySelector(".calculator .result");
        this.result = 0;
        this.btnEvents();
    }

    btnEvents() {
        let btns = document.querySelectorAll(".numbers .btn");
        btns.forEach(btn => {
            if(btn.textContent === "=") {
                btn.addEventListener("click", ev => {
                    console.log(this.result);
                    this.resultContainer.textContent = eval(this.result);
                });
            } else if(btn.textContent === "C") {
                btn.addEventListener("click", () => {this.resultContainer.textContent = "0"})
                this.result = 0;
            } else {
                btn.addEventListener("click", ev => {
                    if(this.resultContainer.textContent == 0) {                  
                        this.result = "";
                    }
                    this.result += btn.textContent;
                    this.resultContainer.textContent = this.result;
                });
            }
        });
    }
}

let c = new Calculator();