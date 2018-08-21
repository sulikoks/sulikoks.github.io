import { makePoint, getX, getY } from 'points';

// BEGIN
const getQuadrant = point => {
  const x = getX(point);
  const y = getY(point);
  if (x === 0 || y === 0) return null;
  else if (x > 0 && y > 0) return 1;
  else if (x < 0 && y > 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else if (x > 0 && y < 0) return 4;
  else return 'Error';
};

const getSymmetricalPoint = point => 
  makePoint(-getX(point), -getY(point));

const calculateDistance = (point1, point2) => 
  Math.sqrt((getX(point2) -getX(point1))**2+(getY(point2) -getY(point1))**2);

export {getQuadrant, getSymmetricalPoint, calculateDistance};
// END
