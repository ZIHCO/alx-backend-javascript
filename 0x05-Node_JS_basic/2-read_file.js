#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, (err, data) => {
    if (err) {
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
        (entry) => console.log(`Number of students ${entry}: ${groupByField[entry].length}. List: ${groupByField[entry].join(', ')}`),
      );
  });
}

module.exports = countStudents;
