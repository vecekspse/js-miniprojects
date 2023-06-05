"use strict"

class Galerie {
    constructor() {
        this.index = 0;
        this.mainImg = document.querySelector(".gallery .main-image img");
        this.thumbs = document.querySelectorAll(".gallery .thumbnails img");
        this.imgEvents();
        this.slideRuns = false;
    }
    
    changeMainImage() {
        this.clearStyle();
        this.mainImg.src = this.thumbs[this.index].src;
        this.thumbs[this.index].classList.add("active");
    }

    nextImage() {
        this.index++;
        if(this.index === this.thumbs.length) {
            this.index = 0;
        }
        this.changeMainImage();
    }

    prevImage() {
        this.index--;
        if(this.index < 0) {
            this.index = this.thumbs.length - 1;
        }
        this.changeMainImage();
    }

    imgEvents() {
        for(let i = 0; i < this.thumbs.length; i++) {
            this.thumbs[i].addEventListener("click", () => {
                this.index = i;
                this.changeMainImage();
            });
        }
        document.querySelector(".gallery .prev").addEventListener("click", () => { this.prevImage();})
        document.querySelector(".gallery .next").addEventListener("click", () => { this.nextImage();})

        document.querySelector(".gallery .slideshow").addEventListener("click", () => {
            var interval;
            if(this.slideRuns === false) {
               interval = setInterval(() => {this.nextImage()}, 2000);
               this.slideRuns = true;
            } else {
                clearInterval(interval);
                this.slideRuns = false;
            }
        })
    }

    clearStyle() {
        this.thumbs.forEach(thumb => { thumb.classList.remove("active"); })
    }

}
let g = new Galerie();