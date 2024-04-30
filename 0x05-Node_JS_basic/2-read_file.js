const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    fs.openSync(path, 'r');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const arrOfStudents = fs
    .readFileSync(path, 'utf8')
    .trim()
    .split('\n')
    .slice(1);
  console.log(`Number of students: ${arrOfStudents.length}`);
  const fieldObjects = {};
  for (const student of arrOfStudents) {
    const arrOfStudent = student.split(',');
    fieldObjects[arrOfStudent[3]] = [];
  }
  for (const student of arrOfStudents) {
    fieldObjects[student.split(',')[3]].push(student.split(',')[0]);
  }
  for (const key of Object.keys(fieldObjects)) {
    const stringArr = fieldObjects[key].join(', ');
    console.log(`Number of students in ${key}: ${fieldObjects[key].length}. List: ${stringArr}`);
  }
};
