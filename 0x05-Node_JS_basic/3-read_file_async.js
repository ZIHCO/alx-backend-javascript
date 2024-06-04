#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  return (new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const arrOfData = data
          .trim()
          .split('\n')
          .slice(1);

        console.log(`Number of students: ${arrOfData.length}`);

        const groupByField = arrOfData.reduce((res, entry) => {
          const entryArray = entry.split(',');
          res[entryArray[3]].push(entryArray[0]);
          return res;
        }, { CS: [], SWE: [] });

        Object
          .keys(groupByField)
          .forEach(
            (entry) => console.log(`Number of students in ${entry}: ${groupByField[entry].length}. List: ${groupByField[entry].join(', ')}`),
          );
        resolve(true);
      }
    });
  }));
}

module.exports = countStudents;
