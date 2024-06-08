const fs = require('fs');

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const arrOfData = data
          .trim()
          .split('\n')
          .slice(1);
        const result = arrOfData.reduce((result, entry) => {
          const entryArray = entry.split(',');
          result[entryArray[3]].push(entryArray[0]);
          return (result);
        }, { CS: [], SWE: [] });
        resolve(result);
      }
    });
  });
}
