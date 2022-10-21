"use strict";

let randomDamage = () => {
  return Math.floor(Math.random() * 10) + 1;
};

let chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2) - 1;
  return randNum === 0 ? opt2 : (randNum = 1) ? opt1 : opt2;
};
let attackPlayer = function (health) {
  return health - randomDamage();
};

let logHealth = (player, health) => {
  console.log(player + " health: " + health);
  return;
};
let logDeath = (winner, loser) => {
  console.log(winner + " defeated " + loser);
  return;
};
let isDead = (health) => {
  return health <= 0 ? true : false;
};

let player1 = "Jason";
let player2 = "Justin";
let player1Health = 100;
let player2Health = 100;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight("Jason", "Justin", 100, 100);
