import signUpUser from '4-user-promise';
import uploadPhoto from '5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .then(signUpUser, uploadPhoto)
    .then((res) => [{status: resolve, value: res}])
    .catch((err) => [{status: reject, value: err}]);
}

export default handleProfileSignup;
