import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const newResult = results.reduce((arr, entry) => {
        arr.push({ status: entry.status, value: entry.value || entry.reason.toString() });
        return arr;
      }, []);
      return (newResult);
    });
}

export default handleProfileSignup;
