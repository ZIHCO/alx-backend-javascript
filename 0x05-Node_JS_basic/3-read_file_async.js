#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  return (new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
        throw new Error('Cannot load the database');
      }

      const arrOfData = data
        .toString()
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
    });
    resolve('Done');
  }));
}

module.exports = countStudents;
