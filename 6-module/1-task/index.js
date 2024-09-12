/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    let button = "<button>[X]</button>";
    this.elem = document.createElement("table");
    this.items = [];
    for (let elem of rows) {
      let line = `<td>${elem.name}</td>
      <td>${elem.age}</td>
      <td>${elem.salary}</td>
      <td>${elem.city}</td>
      <td>${button}</td>`;

      this.items.push(line);
    }
    this.render(this.items);
    let buttonReal = this.elem.querySelectorAll("button");
    for (let element of buttonReal) {
      element.addEventListener("click", (event) => this.onClick(event));
    }
  }

  render(items) {
    const list = items.map((value) => `<tr>${value}</tr>`).join("");
    this.elem.innerHTML = `
    <table>
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${list}
    </tbody>
  </table>
    `;
  }

  onClick(event) {
    event.target.parentNode.parentNode.remove();
  }
}
