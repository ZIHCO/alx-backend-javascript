export default function iterateThroughObject(reportWithIterator) {
  let stringOfEmployeesName = '';
  for (const name of reportWithIterator) {
    if (stringOfEmployeesName.length !== 0) {
      stringOfEmployeesName += ' | ';
    }
    stringOfEmployeesName += name;
  }
  return stringOfEmployeesName;
}
