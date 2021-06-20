function initCarousel() {
  let right = document.getElementsByClassName(
    "carousel__arrow carousel__arrow_right"
  )[0];
  let left = document.getElementsByClassName(
    "carousel__arrow carousel__arrow_left"
  )[0];
  let inner = document.getElementsByClassName("carousel__inner")[0];
  let slide = document.querySelectorAll(".carousel__slide");
  let width = null;
  let num = 1;
  width = slide[0].offsetWidth;
  left.style.display = "none";
  right.addEventListener("click", function () {
    inner.style.transform = "translateX(-" + width * num + "px)";
    num++;
    left.style.display = "";
    if (num === 4) {
      right.style.display = "none";
    }
  });
  left.addEventListener("click", function () {
    let numLeft = num === 2 ? 0 : num - 2;
    inner.style.transform = "translateX(-" + numLeft * width + "px)";
    num--;
    right.style.display = "";
    if (num === 1) {
      left.style.display = "none";
    }
  });
}
