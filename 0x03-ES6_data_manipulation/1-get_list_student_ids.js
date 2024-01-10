export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    const arrayOfIds = arrayOfObjects.map((student) => student.id);
    return arrayOfIds;
  }
  return [];
}
