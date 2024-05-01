const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const fileLines = data
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
      console.log(`Number of students in ${key}: ${studentsField[key].length}. List: ${strList}`);
    }
    resolve(true);
  });
});

module.exports = countStudents;
