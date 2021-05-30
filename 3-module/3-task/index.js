function camelize(str) {
  return str
    .split("-") //возвращаем новый массив, разделителем является "-"
    .map((text, i) => (i == 0 ? text : text[0].toUpperCase() + text.slice(1))) //снова создаём новый массив, из результатов вызова (=>)
    .join(""); //объдиняем элементы массива str
}
