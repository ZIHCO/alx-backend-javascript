import { uploadPhoto, createUser } from './utils';

export default async function () {
  const arrOfPromises = await Promise.allSettled([
    uploadPhoto(), createUser(),
  ]).then((value) => value);

  return arrOfPromises.reduce((obj, entry) => {
    const { value } = entry;

    if (value.hasOwnProperty('status')) {
      obj.photo = entry.value || null;
    } else if (value.hasOwnProperty('firstName')) {
      obj.user = entry.value || null;
    }

    return obj;
  }, {});
}
