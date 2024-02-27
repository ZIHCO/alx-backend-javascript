const fs = require('fs');

module.exports = function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    let sliceList = [];
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
      const studentsField = { CS: [], SWE: [] };
      for (const item of sliceList) {
        const listItem = item.split(',');
        if (listItem[3] === 'CS') {
          studentsField.CS.push(listItem[0]);
        } else {
          studentsField.SWE.push(listItem[0]);
        }
      }
      console.log(`Number of students in CS: ${studentsField.CS.length}. List: ${studentsField.CS}`);
      console.log(`Number of students in SWE: ${studentsField.SWE.length}. List: ${studentsField.SWE}`);
    }
  });
};
