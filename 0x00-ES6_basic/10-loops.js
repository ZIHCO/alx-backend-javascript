export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (const item of array) {
    const test = (value) => value === item;
    const idx = arr.findIndex(test);
    arr[idx] = appendString + item;
  }

  return arr;
}
