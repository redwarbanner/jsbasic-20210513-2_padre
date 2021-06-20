import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement("div");
    this.elem.classList.add("card");
    this.render(product);
    let button = this.elem.getElementsByClassName("card__button")[0];
    button.addEventListener("click", (event) => this.onClick(event));
  }

  render(product) {
    this.elem.innerHTML = `
    <div class="card__top">
        <img src="/assets/images/products/${
          product.image
        }" class="card__image" alt="product">
        <span class="card__price">€${Number(product.price).toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `;
  }

  onClick(event) {
    this.elem.dispatchEvent(
      new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true,
      })
    );
  }
}
