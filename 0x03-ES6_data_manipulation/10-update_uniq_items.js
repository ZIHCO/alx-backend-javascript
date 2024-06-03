export default function updateUniqueItems(map) {
  map.forEach((value, key, thisMap) => {
    if (map.toString() !== '[object Map]') {
      throw new Error('Cannot process');
    }
    if (thisMap.get(key) === 1) {
      thisMap.set(key, 100);
    }
  });
  return map;
}
