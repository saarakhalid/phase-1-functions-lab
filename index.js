// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hq = 42; 
    return Math.abs(someValue - hq); 
  }
  
  function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264; 
    return distanceFromHqInBlocks(someValue) * feetPerBlock;
  }

  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; 
    return Math.abs(destination - start) * feetPerBlock; 
  }
  
  function calculatesFarePrice(start, destination) {
    const freeDistance = 400;
    const shortDistanceRate = 0.02; 
    const flatRateDistance = 2000; 
    const flatRate = 25; 
  
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= freeDistance) {
      return 0; 
    } else if (distance <= flatRateDistance) {
      return (distance - freeDistance) * shortDistanceRate;
    } else if (distance < 2500) {
      return flatRate;
    } else {
      return 'cannot travel that far';
    }
  }
  