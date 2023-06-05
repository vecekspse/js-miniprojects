"use strict"
let pocitadlo = 0;

const obrazky = document.querySelectorAll(".thumbnails img");
const mainImg = document.querySelector(".main-image img");

const next = document.querySelector(".next");
next.addEventListener("click", function () {
    pocitadlo++;
    if(pocitadlo > obrazky.length - 1) {
        pocitadlo = 0;
    }
    mainImg.src = obrazky[pocitadlo].src;
});

const prev = document.querySelector(".prev");
prev.addEventListener("click", function () {
    pocitadlo--;
    if(pocitadlo < 0) {
        pocitadlo = obrazky.length -1;
    }
    mainImg.src = obrazky[pocitadlo].src;
});

obrazky.forEach(obrazek => {
    obrazek.addEventListener("click", function (e) {
        pocitadlo = [...obrazky].indexOf(obrazek);
        mainImg.src = obrazky[pocitadlo].src;
    });
})