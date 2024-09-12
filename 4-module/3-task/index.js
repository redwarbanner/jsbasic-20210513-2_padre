function highlight(table) {
  for (let elem = 1; elem < table.rows.length; elem++) {
    let row = table.rows[elem];
    let status = row.cells[3];
    let gender = row.cells[2].innerHTML;
    let age = row.cells[1].innerHTML;

    if (status.hasAttribute("data-available")) {
      if (status.getAttribute("data-available") === "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }
    } else {
      row.setAttribute("hidden", "");
    }
    if (gender === "m") {
      row.classList.add("male");
    } else {
      row.classList.add("female");
    }
    if (age < 18) {
      row.style = "text-decoration: line-through";
    }
  }
}
