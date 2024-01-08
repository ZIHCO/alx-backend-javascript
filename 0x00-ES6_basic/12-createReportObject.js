export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return employeesList.keys.length;
    },
  };
  return obj;
}
