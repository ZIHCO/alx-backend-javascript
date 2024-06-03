const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const counter = weakMap.get(endpoint);
    if (counter >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, counter + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}

export { weakMap, queryAPI };
