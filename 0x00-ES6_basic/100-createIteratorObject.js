export default function createIteratorObject(report) {
  const objOfAllEmployees = report.allEmployees;
  const arrayOfRoles = Object.keys(objOfAllEmployees);
  const allEmployees = arrayOfRoles.reduce((res, role) => {
    let result = res;
    result = [...res, ...objOfAllEmployees[role]];
    return result;
  }, []);

  return allEmployees;
}
