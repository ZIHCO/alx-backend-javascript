import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const result = Object
          .keys(data)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .reduce((arr, entry) => {
            arr.push(`Number of students in ${entry}: ${data[entry].length}.`
           + ` List: ${data[entry].join(', ')}`);
            return arr;
          }, []);
        response.status(200).send(`This is the list of our students\n${result.join('\n')}`);
      })
      .catch((error) => response.status(500).send(error.message));
  }

  static getAllStudentsByMajor(request, response) {
    if (['CS', 'SWE'].includes(request.params.major)) {
      readDatabase(process.argv[2])
        .then((data) => {
          response.status(200).send(`List: ${data[request.params.major].join(', ')}`);
        }).catch((error) => response.status(500).send(error.message));
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}
