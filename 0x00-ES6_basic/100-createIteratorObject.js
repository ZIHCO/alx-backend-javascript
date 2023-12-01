export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const property in report.allEmployees) {
    if (property) {
      allEmployees = [...allEmployees, ...report.allEmployees[property]];
    }
  }
  return allEmployees;
}
