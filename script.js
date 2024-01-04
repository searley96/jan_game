//variables keep track of xp, health, and gold
let xp = 0;
let health = 100;
let gold = 50;

//represents players current weapon
let currentWeapon = 0;

//indicates whether player is currently in fight
let fighting;

//represents health of yeti during fight
let yetiHealth;

//array containing players items
let inventory = ["icicle"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const yetiHealthStats = document.querySelector("#yetiStats");
const yetiName = document.querySelector("#yetiName");
const yetiHealthText = document.querySelector("#yetiHealth");

const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to ice cave", "Fight yeti"],
    "button functions": [goStore, goCave, fightYeti],
    text: "You are in the Snowy Village square. You see a sign that says \"Winter Supply Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to village square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight ice bat", "Go to town square"],
    "button functions": [fightSlime, fightBat, goTown],
    text: "You enter the ice cave. You see some frosty monsters."
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightYeti;

// functions

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goStore() {
  console.log("You are in store");
  update(locations[1]);
}

function goCave() {
  console.log("You are in cave");
  update(locations[2]);
}

function fightYeti() {
  console.log("You are in fight Yeti");
}

function buyHealth() {

};

function buyWeapon() {

};

function goTown() {
  update(locations[0]);
};

function fightSlime() {

};

function fightBat() {

};