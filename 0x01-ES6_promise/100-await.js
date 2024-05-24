import { uploadPhoto, createUser } from './utils';

export default async function () {
  const arrOfPromises = await Promise.allSettled([
    uploadPhoto(), createUser(),
  ]).then((value) => value).catch((err) => err);

  return arrOfPromises.reduce((obj, entry, index) => {
    try {
      if (Object.hasOwnProperty.call(entry, 'reason')) {
        throw new Error(entry.reason);
      }
      if (index === 0) {
        return { ...obj, photo: entry.value };
      }
      if (index === 1) {
        return { ...obj, user: entry.value };
      }
    } catch (err) {
      if (err) {
        return obj;
      }
      return obj;
    }
    return obj;
  }, { photo: null, user: null });
}
