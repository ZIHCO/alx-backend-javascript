const fs = require('fs');

module.exports = function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(path, 'utf8')
    .toString('utf8')
    .trim()
    .split('\n')
    .slice(1);
  const studentsField = {};
  console.log(`Number of students: ${fileLines.length}`);
  for (const item of fileLines) {
    const listItem = item.split(',');
    studentsField[listItem[3]] = [];
  }
  for (const item of fileLines) {
    const listItem = item.split(',');
    studentsField[listItem[3]].push(listItem[0]);
  }
  for (const key of Object.keys(studentsField)) {
    const strList = studentsField[key].join(', ');
    console.log(`Number of students in CS: ${studentsField[key].length}. List: ${strList}`);
  }
};
