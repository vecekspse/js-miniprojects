"use strict"

const mainImg = document.querySelector(".main-image img");

const next = document.querySelector(".controls .next");

next.addEventListener("click", function () {
    mainImg.src = "images/image6.jpg";
});