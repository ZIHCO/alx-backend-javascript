export default function quardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.toString());
  }
  queue.push('Guardrail was processed');

  return queue;
}
