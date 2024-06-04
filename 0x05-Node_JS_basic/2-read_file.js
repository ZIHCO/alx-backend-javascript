#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  try {
    const arrOfData = fs.readFileSync(path, 'utf8')
      .trim()
      .split('\n')
      .slice(1);
  
    console.log(`Number of students: ${arrOfData.length}`);
  
    const groupByField = arrOfData.reduce((res, entry) => {
      const entryArray = entry.split(',');
      res[entryArray[3]].push(entryArray[0]);
      return res;
    }, { CS: [], SWE: [] });
  
    Object.keys(groupByField).forEach(
      (entry) => console.log(`Number of students in ${entry}: ${groupByField[entry].length}. List: ${groupByField[entry].join(', ')}`),
    );
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
