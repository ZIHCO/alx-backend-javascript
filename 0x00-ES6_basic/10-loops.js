export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (const item of array) {
    const test = (value, index, arr) => value === item;
    const idx = arr.findIndex(test);
    arr[idx] = appendString + item;
  }

  return arr;
}
