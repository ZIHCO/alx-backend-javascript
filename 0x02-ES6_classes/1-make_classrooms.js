import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const firstClass = new ClassRoom(19);
  const secondClass = new ClassRoom(20);
  const thirdClass = new ClassRoom(34);
  const arr = [
    firstClass,
    secondClass,
    thirdClass,
  ];
  return arr;
}
