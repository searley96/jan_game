//variables keep track of xp, health, and gold
let xp = 0;
let health = 100;
let gold = 50;

//represents players current weapon
let currentWeapon = 0;

//indicates whether player is currently in fight
let fighting;

//represents health of monsters during fight
let monsterHealth;

//array containing players items
let inventory = ["icicle"];



const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#yetiStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
  {
    name: "icecle",
    power: 5,
  },
  {
    name: "ice dagger",
    power: 10,
  },
  {
    name: "ice spear",
    power: 50,
  },
  {
    name: "ice sword",
    power: 100,
  },
];

const monsters = [
  {
    name: "ice slime",
    level: 2,
    health: 15,
  },
  {
    name: "ice bat",
    level: 8,
    health: 60,
  },
  { name: "yeti", level: 20, health: 300 },
];

const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to ice cave", "Fight yeti"],
    "button functions": [goStore, goCave, fightYeti],
    text: 'You are in the Snowy Village square. You see a sign that says "Winter Supply Store".',
  },
  {
    name: "store",
    "button text": [ "Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to village square" ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight ice bat", "Go to town square"],
    "button functions": [fightSlime, fightBat, goTown],
    text: "You enter the ice cave. You see some frosty monsters.",
  },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightYeti;
button4.onclick = showInventory;

// functions

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
};

function goStore() {
  console.log("You are in store");
  update(locations[1]);
  button4.style.display = "none";
};

function goCave() {
  console.log("You are in cave");
  update(locations[2]);
};

// if you have 10 gold or more, you can buy health
// on every button press, gold - 10, health + 10
// new health and gold updated at stats
// new text appears if you are out of money and can't buy health
function buyHealth() {
  if (gold >= 10) {
    health += 10;
    gold -= 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
};
// can buy weapon if 30 gold or more
// on every button press, gold - 30
// new gold updated at stats
// new text appears stating what you bought (next weapon in weapons array)
// new text appears listing all weapons (from weapons array)
// when 1 is added to currentWeapon, find that index in weapons array and display name
function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have an " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory + ".";
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    } 
  } else {
    text.innerText = "You already have the most powerful weapon!"
    button2.innerText = "Sell weapon for 15 gold."
    button2.onclick = sellWeapon;
  }
};

function sellWeapon() {
  if (inventory > 1) {
    gold -= 15;
    goldText.innerText = gold;
    currentWeapon = inventory.shift();
    text.innerText = "You sold a: " + currentWeapon;
    text.innerText += "In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!"
  }
};

function goTown() {
  update(locations[0]);
  button4.style.display = "inline";
};

function showInventory() {
  text.innerText = "In your inventory you have: " + inventory;
};

function fightSlime() {
  fighting = 0;
  goFight();
};

function fightBat() {
  fighting = 1;
  goFight();
};

function fightYeti() {
  fighting = 2;
  goFight();
};

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
};