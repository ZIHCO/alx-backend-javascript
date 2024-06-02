export default function cleanSet(set, startString) {
  const result = [];
  set.forEach((entry) => {
    if (startString.length && entry.slice(0, startString.length) === startString) {
      result.push(entry.slice(startString.length));
    }
    return true;
  });
  return result.join('-');
}
