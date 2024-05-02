const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      const arrOfReport = [];
      arrOfReport.push('This is the list of our students');
      arrOfReport.push(err instanceof Error ? err.message : err.toString());
      reject(arrOfReport.join('\n'));
    } else {
      const arrOfStudents = data
        .trim()
        .split('\n')
        .slice(1);
      const arrOfReport = [];
      arrOfReport.push('This is the list of our students');
      arrOfReport.push(`Number of students: ${arrOfStudents.length}`);
      const studentsObject = {};
      for (const student of arrOfStudents) {
        studentsObject[student.split(',')[3]] = [];
      }
      for (const student of arrOfStudents) {
        studentsObject[student.split(',')[3]].push(student.split(',')[0]);
      }
      for (const key of Object.keys(studentsObject)) {
        arrOfReport.push(`Number of students in ${key}: ${studentsObject[key].length}. List: ${studentsObject[key].join(', ')}`);
      }
      resolve(arrOfReport.join('\n'));
    }
  });
});

const PORT = 1245;
const HOST = '127.0.0.1';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(DB_FILE)
      .then((report) => {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end(report);
      })
      .catch((err) => {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end(err);
      });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at ${HOST}:${PORT}/`);
});

module.exports = app;
