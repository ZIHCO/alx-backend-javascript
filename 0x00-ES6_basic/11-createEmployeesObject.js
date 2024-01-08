export default function createEmployeesObject(departmentName, employees) {
  const keys = [departmentName];
  const obj = keys.reduce((res, key) => {
    res[key] = employees;
    return res;
  }, {});
  return obj;
}
