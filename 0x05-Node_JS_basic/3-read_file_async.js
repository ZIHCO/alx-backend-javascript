const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const arrOfStudents = data
        .trim()
        .split('\n')
        .slice(1);
      console.log(`Number of students: ${arrOfStudents.length}`);
      const fieldObjects = {};
      for (const student of arrOfStudents) {
        fieldObjects[student.split(',')[3]] = [];
      }
      for (const student of arrOfStudents) {
        fieldObjects[student.split(',')[3]].push(student.split(',')[0]);
      }
      for (const key of Object.keys(fieldObjects)) {
        console.log(`Number of students in ${key}: ${fieldObjects[key].length}. List: ${fieldObjects[key].join(', ')}`);
        resolve(true);
      }
    }
  });
});

module.exports = countStudents;
