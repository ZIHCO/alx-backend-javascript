const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const dataArray = data
        .trim()
        .slice(1)
        .split('\n');
      console.log(`Number of students: ${dataArray.length}`);
      const fields = dataArray.reduce((result, field) => {
        if (!Object.keys(result).includes(field.split(',')[3])) {
          const key = field.split(',')[3];
          Object.defineProperty(result, key, {
            value: [],
            writable: true,
            enumerable: true,
            configurable: true,
          });
          result[field.split(',')[3]].push(field.split(',')[0]);
        } else {
          result[field.split(',')[3]].push(field.split(',')[0]);
        }
        return result;
      }, {});
      Object.keys(fields).forEach((item) => {
        console.log(
          `Number of students in ${item}: ${fields[item].length}. List: ${fields[item].join(', ')}`,
        );
      });
      resolve('Done');
    }
  });
});

module.exports = countStudents;
