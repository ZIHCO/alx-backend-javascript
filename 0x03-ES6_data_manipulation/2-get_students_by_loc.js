export default function getStudentsByLocation(arrayOfStudents, city) {
  if (Array.isArray(arrayOfStudents)) {
    const filteredArray = arrayOfStudents.filter((student) => student.location === city);
    return filteredArray;
  }
  return [];
}
