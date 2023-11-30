export default function createEmployeesObject(departmentName, employees) {
  const key = [`${departmentName}`];
  const result = key.reduce((res, key) => {
    res[key] = employees;
    return res;
  }, {});
  return result;
}
