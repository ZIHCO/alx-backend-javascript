export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredByCity = students.filter((student) => student.location === city);
  const mappedNewGrade = filteredByCity.map((student) => {
    const student2 = student;
    const gradeObject = newGrades.filter((grade) => grade.studentId === student.id);
    if (gradeObject[0]) {
      student2.grade = gradeObject[0].grade;
    } else {
      student2.grade = 'N/A';
    }
    return student2;
  });
  return mappedNewGrade;
}
