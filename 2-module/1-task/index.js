function sumSalary(salaries) {
  const sum = Object.values(salaries).reduce(
    (sum, val) => sum + (parseInt(val) >= 0 || parseInt(val) <= 0 ? val : 0),
    0
  );
  return sum;
}
