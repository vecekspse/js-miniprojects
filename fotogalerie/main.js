"use strict"

let pocitadlo = 0;

const mainImg = document.querySelector(".main-image img");
const obrazky = document.querySelectorAll(".thumbnails img");

const next = document.querySelector(".controls .next");

next.addEventListener("click", function () {
    pocitadlo++;
    if(pocitadlo > obrazky.length - 1) {
        pocitadlo = 0;
    }
    mainImg.src = obrazky[pocitadlo].src;
});
const prev = document.querySelector(".controls .prev");

prev.addEventListener("click", function () {
    pocitadlo--;
    if(pocitadlo < 0) {
        pocitadlo = obrazky.length - 1;
    }
    mainImg.src = obrazky[pocitadlo].src;
});