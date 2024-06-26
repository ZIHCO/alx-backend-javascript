const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', (req, res) => {
  (fs.readFile)(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      res.send('This is the list of our students\nCannot load the database');
      return 'Failed!';
    }
    const arrOfData = data
      .trim()
      .split('\n')
      .slice(1);

    const responseString = (`This is the list of our students\nNumber of students: ${arrOfData.length}`);

    const groupByField = arrOfData.reduce((res, entry) => {
      const entryArray = entry.split(',');
      res[entryArray[3]].push(entryArray[0]);
      return res;
    }, { CS: [], SWE: [] });

    const analytics = Object
      .keys(groupByField)
      .reduce((arr, entry) => {
        arr.push(`\nNumber of students in ${entry}: ${groupByField[entry].length}. List: ${groupByField[entry].join(', ')}`);
        return arr;
      }, []);
    res.send(responseString.concat(analytics.join('')));
    return 'Succeed';
  });
});

app.listen(1245);

module.exports = app;
