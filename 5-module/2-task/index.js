function toggleText() {
  let element = document.getElementsByClassName("toggle-text-button");
  for (let value of element) {
    value.addEventListener("click", function () {
      let text = document.getElementById("text");
      if (text.hasAttribute("hidden")) {
        text.removeAttribute("hidden");
      } else {
        text.setAttribute("hidden", "");
      }
    });
  }
}
