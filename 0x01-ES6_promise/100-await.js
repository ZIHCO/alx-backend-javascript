import { uploadPhoto, createUser } from './utils';

export default async function () {
  const arrOfPromises = await Promise.all([
    uploadPhoto(), createUser(),
  ]).then((value) => value).catch((err) => err);

  try {
    return arrOfPromises.reduce((obj, entry, index) => {
      if (index === 0) {
        return { ...obj, photo: entry };
      }
      if (index === 1) {
        return { ...obj, user: entry };
      }
      return obj;
    }, {});
  } catch () {
    return {photo: null, user: null};
  }
}
