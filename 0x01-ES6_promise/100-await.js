import { uploadPhoto, createUser } from './utils';

export default async function () {
  const arrOfPromises = await Promise.allSettled([
    uploadPhoto(), createUser(),
  ]).then((value) => value).catch((err) => err);

  return arrOfPromises.reduce((obj, entry, index) => {
    if (Object.hasOwnProperty.call(entry, 'value')) {
      if (index === 0) {
        return { ...obj, photo: entry.value };
      }
      return { ...obj, user: entry.value };
    }
    return obj;
  }, { photo: null, user: null });
}
