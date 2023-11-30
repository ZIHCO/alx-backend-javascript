export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const arr = array;
  for (const item of array) {
    arr[i] = appendString + item;
    i += 1;
  }

  return arr;
}
