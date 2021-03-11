// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  return Math.abs(42 - blocks);
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(loc1, loc2) {
  return Math.abs(loc1 - loc2) * 264;
}

function calculatesFarePrice(loc1, loc2) {
  let dis = Math.abs(loc1 - loc2) * 264;
  if (dis <= 400) return 0;
  else if (dis > 400 && dis <= 2000) return (dis - 400) * 0.02;
  else if (dis > 2000 && dis <= 2500) return 25;
  else return "cannot travel that far"
}
