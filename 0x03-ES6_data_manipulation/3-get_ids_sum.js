export default function getStudentIdsSum(students) {
  const sumOfIds = students.reduce((sum, item) => {
    let copyOfSum = sum;
    copyOfSum += item.id;
    return copyOfSum;
  }, 0);

  return sumOfIds;
}
