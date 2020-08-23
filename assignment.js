// feet to mile converter
function feetToMile(feet) {
  if (feet > 0) {
    let mile = feet / 5280;
    return mile;
  }
  else {
    return "insert correct value.";
  }
}


//wood calculator
function woodCalculator(chairAmount, tableAmount, bedAmount) {
  if (chairAmount >= 0 && tableAmount >= 0 && bedAmount >= 0) {
    let neededWoodForChair = 1 * chairAmount;
    let neededWoodForTable = 3 * tableAmount;
    let neededWoodForBed = 5 * bedAmount;
    let totalNeededWood = neededWoodForChair + neededWoodForTable + neededWoodForBed;
    return totalNeededWood;
  }
  else {
    return "insert correct value.";
  }
}

//--brick calculator
function brickCalculator(floorNumber) {

  const onefeetNeededBrick = 1000;
  let totalNeededBrick = 0;

  if (floorNumber > 0) {
    if (floorNumber >= 1 && floorNumber <= 10) {
      totalNeededBrick = floorNumber * 15 * onefeetNeededBrick;
      return totalNeededBrick;
    }
    else if (floorNumber >= 11 && floorNumber <= 20) {
      after10thFloor = floorNumber - 10;
      totalNeededBrick = (10 * 15 * onefeetNeededBrick) + (after10thFloor * 12 * onefeetNeededBrick);
      return totalNeededBrick;
    }
    else {
      after20thFloor = floorNumber - 20;
      first10thFloorBrickNeeded = 10 * 15 * onefeetNeededBrick;
      Second10thFloorBrickNeeded = 10 * 12 * onefeetNeededBrick;
      totalNeededBrick = first10thFloorBrickNeeded + Second10thFloorBrickNeeded + (after20thFloor * 10 * onefeetNeededBrick);
      return totalNeededBrick;

    }
  }
  else {
    return "insert correct value.";
  }

}

//find tiny friend
function tinyFriend(friendArray) {
  //friend name lenth array
  let friendNameLenth = [];
  for (let i = 0; i < friendArray.length; i++) {
    friendNameLenth[i] = friendArray[i].length;
  }

  //find out minimum value from an array
  Array.min = function (friendNameLenth) {
    return Math.min.apply(Math, friendNameLenth);
  };
  let minimum = Array.min(friendNameLenth);

  //find tiny named friend
  let tinyFriend = [];
  for (let i = 0; i < friendArray.length; i++) {
    if (friendArray[i].length == minimum) {
      tinyFriend.push(friendArray[i]);
    }
  }

  return tinyFriend;
}

//output-feet to mile converter
console.log("................Feet to mile converter...............");
console.log(feetToMile(5290).toFixed(4));

//output-wood calculator
console.log("....................Wood calculator..................");
console.log(woodCalculator(1,0,1));

//output-brick calculator
console.log("...................Brick calculator..................");
console.log(brickCalculator(11));

//output- tiny friend
console.log("...................Find tiny friend..................");
let friendArray = ["Safin","Tafrin","Moni","Masum"];
if(friendArray.length>0){
  for (let i = 0; i < tinyFriend(friendArray).length; i++) {
    console.log(tinyFriend(friendArray)[i]);
  }
}
else{
  console.log("insert correct value.");
}


//...Alhamdulillah Problem solving task done.Thanks Programming Hero Team
//... Mohammad Masum Khandaker.