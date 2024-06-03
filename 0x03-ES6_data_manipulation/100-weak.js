export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const counter = weakMap.get(endpoint);
    if (counter >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, ++counter);
  } else {
    weakMap.set(endpoint, 1);
  }
}
