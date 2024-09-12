import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement("div");
    this.elem.classList.add("carousel");
    this.render(this.elem, slides);
    let button = this.elem.querySelectorAll(".carousel__button");
    for (let elem of button) {
      elem.addEventListener("click", (event) => this.onClick(event));
    }
    this.Carusel();
  }
  render(caruselInner, slides) {
    const list = slides
      .map(
        (value) => `
        <div class="carousel__slide" data-id=${value.id}>
        <img src="/assets/images/carousel/${
          value.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
        <span class="carousel__price">€${Number(value.price).toFixed(2)}</span>
        <div class="carousel__title">${value.name}</div>
        <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
        </div>
        </div>
      `
      )
      .join("");
    caruselInner.innerHTML = `<div class="carousel__arrow carousel__arrow_right"><img src="/assets/images/icons/angle-icon.svg" alt="icon"></div>
    <div class="carousel__arrow carousel__arrow_left"> <img src="/assets/images/icons/angle-left-icon.svg" alt="icon"></div>
    <div class="carousel__inner"> ${list}</div>`;
  }

  onClick(event) {
    let slide = event.target.closest(".carousel__slide");
    let id = slide.dataset.id;
    this.elem.dispatchEvent(
      new CustomEvent("product-add", {
        detail: id,
        bubbles: true,
      })
    );
  }

  Carusel() {
    let right = this.elem.getElementsByClassName(
      "carousel__arrow carousel__arrow_right"
    )[0];
    let left = this.elem.getElementsByClassName(
      "carousel__arrow carousel__arrow_left"
    )[0];
    let inner = this.elem.getElementsByClassName("carousel__inner")[0];
    let width = null;
    let num = 1;
    let slide = this.elem.querySelectorAll(".carousel__slide");
    let length = slide.length;
    width = slide[0];
    left.style.display = "none";
    right.addEventListener("click", function () {
      inner.style.transform = "translateX(-" + width.offsetWidth * num + "px)";
      num++;
      left.style.display = "";
      if (num === Number(length)) {
        right.style.display = "none";
      }
    });
    left.addEventListener("click", function () {
      let numLeft = num === 2 ? 0 : num - 2;
      inner.style.transform =
        "translateX(-" + numLeft * width.offsetWidth + "px)";
      num--;
      right.style.display = "";
      if (num === 1) {
        left.style.display = "none";
      }
    });
  }
}
