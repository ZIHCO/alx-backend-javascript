export default function createReportObject(employeesList) {
  const objectOfAllEmployees = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => {
      let count = 0;
      for (const property in employeesList) {
        if (property) {
          count += 1;
        }
      }
      return count;
    },
  };
  return objectOfAllEmployees;
}
