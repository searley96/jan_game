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

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightYeti;

// functions
function goStore() {
  console.log("You are in store");
}

function goCave() {
  console.log("You are in cave");
}

function fightYeti() {
  console.log("You are in fight Yeti");
}
