
const buyBottles = function(money) {
  let bottlesPurchased = Math.floor(money / 2);
  return bottlesPurchased;
}

const redeemEmptyBottles = function(bottles) {
  let redeemedBottles = Math.floor(bottles / 2);
  return redeemedBottles;

}

const redeemBottleCaps = function(caps) {
  let redeemedBottles = Math.floor(caps / 4);
  return redeemedBottles;
}







const getPop = function() {
  let money = process.argv.slice(2)[0];
  let numBottles = buyBottles(money);
  let numBottleCaps = numBottles;
  let totalBottles = numBottles;
  let bottlesFromBottles = 0;
  let bottlesFromCaps = 0;

  while (numBottles >= 2 || numBottleCaps >= 4) {
    if (numBottles >= 2) {
      let addedBottles = redeemEmptyBottles(numBottles);
      numBottles = (numBottles % 2) + addedBottles;
      numBottleCaps += addedBottles;
      totalBottles += addedBottles;
      bottlesFromBottles += addedBottles;
    }
    if(numBottleCaps >= 4) {
      let addedBottles = redeemBottleCaps(numBottleCaps);
      numBottleCaps = (numBottleCaps % 4) + addedBottles;
      numBottles += addedBottles;
      totalBottles += addedBottles;
      bottlesFromCaps += addedBottles;
    }
  }
  console.log(`
  TOTAL BOTTLES: ${totalBottles}
  REMAINING BOTTLES: ${numBottles}
  REMAINING CAPS: ${numBottleCaps}
  TOTAL EARNED:
    BOTTLES: ${bottlesFromBottles}
    CAPS: ${bottlesFromCaps}
  `);
}


getPop();

