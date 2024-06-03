export default function updateUniqueItems(map) {
  map.forEach((value, key, thisMap) => {
    try {
      if (thisMap.get(key) === 1) {
        thisMap.set(key) = 100;
      }
    } catch (err) {
      throw new Error('Cannot process');
    }
  });
  return map;
}
