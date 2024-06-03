export default function updateUniqueItems(map) {
  if (map.toString() !== '[object Map]') {
    throw new Error('Cannot process');
  }
  map.forEach((value, key, thisMap) => {
    if (thisMap.get(key) === 1) {
      thisMap.set(key, 100);
    }
  });
  return map;
}
