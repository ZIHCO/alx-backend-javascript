export function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const x = 0;
    if (x === 0) {
      resolve('OK');
    } else {
      reject('Error');
    }
  });
}
