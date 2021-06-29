function employeesCount(employeesData) {
  const hash = {};
  const result = {};

  for (let emp of employeesData) {
    if (hash[emp.company]) {
      hash[emp.company][emp.id] = true;
    } else {
      hash[emp.company] = { [emp.id]: true };
    }
  }

  for (let key in hash) {
    result[key] = Object.keys(hash[key]).length;
  }
  console.log(result);
  return result;
}

const empData = [
  { id: 1, company: "google" },
  { id: 1, company: "Amzon" },
  { id: 3, company: "Amzon" },
  { id: 10, company: "Adobe" }
];
console.log(employeesCount(empData));
