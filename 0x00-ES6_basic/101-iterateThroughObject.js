export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (let i = 0; i < (reportWithIterator.length - 1); i += 1) {
    str += (`${reportWithIterator[i]} | `);
  }
  str += reportWithIterator[reportWithIterator.length - 1];
  return str;
}
