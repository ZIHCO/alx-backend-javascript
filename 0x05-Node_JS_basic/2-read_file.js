const fs = require('fs');

module.exports = function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(path, 'utf8')
    .toString('utf8')
    .trim()
    .split('\n');
  /*fs.readFile(path, 'utf8', (err, data) => {
    let sliceList = [];
    const studentsField = {};
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      const list = data.split('\n');
      if (list[list.length - 1] === '') {
        sliceList = list.slice(1, (list.length - 1));
      } else {
        sliceList = list.slice();
      }
      console.log(`Number of students: ${sliceList.length}`);
      for (const item of sliceList) {
        const listItem = item.split(',');
        studentsField[listItem[3]] = [];
      }
      for (const item of sliceList) {
        const listItem = item.split(',');
        studentsField[listItem[3]].push(listItem[0]);
      }
      for (const key of Object.keys(studentsField)) {
        const strList = studentsField[key].join(', ');
        console.log(`Number of students in CS: ${studentsField[key].length}. List: ${strList}`);
      }
    }
  });*/
};
