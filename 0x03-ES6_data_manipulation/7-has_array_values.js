export default function hasValuesFromArray(set, arr) {
  let bool;
  arr.forEach((entry) => {
    if (!set.has(entry)) {
      bool = 0;
      return false;
    }
    bool = 1;
    return true;
  });
  return (!!bool);
}
