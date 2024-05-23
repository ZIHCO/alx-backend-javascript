import { uploadPhoto, createUser } from './utils';

export default async function () {
  const arrOfPromises = await Promise.allSettled([
    uploadPhoto(), createUser(),
  ]).then((value) => value);

  return arrOfPromises.reduce((obj, entry, index) => {
    if (Object.hasOwnProperty.call(entry, 'value')) {
      if (index === 0) {
        return { ...obj, photo: entry.value };
      } else {
        return { ...obj, user: entry.value };
      }
    }
  }, {photo: null, user: null});
}
