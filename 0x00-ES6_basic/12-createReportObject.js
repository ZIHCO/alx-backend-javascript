export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return employeesList.length;
    },
  };
  return obj;
}
