const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const dataArray = data
      .trim()
      .split('\n')
      .slice(1);
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
  } catch (err) {
    if (err) throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
