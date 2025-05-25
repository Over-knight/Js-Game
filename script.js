let xp =0;
let health = 100;
let gold = 50;
let currentWeapon = 0;

let fighting;
let monsterHealth;
let inventory = ["stick"];

//both query selector and getElementById work, but querySelector is more versatile
const button1 = document.querySelector("#button1");
// const button1 = document.getElementById("button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterHealthText = document.querySelector("#monsterHealth");
const monsterNameText = document.querySelector("#monsterName");
const location = [{}] 

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore() {
    // console.log("Going to the store...");
    text.innerText = "You are in the store. What would you like to do?";
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (20 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    // text.innerText = "You are in the store. What would you like to do?";
}

function goCave() {
    console.log("Going to the cave...");
}

function fightDragon() {
    console.log("Fighting dragon...");
}

function buyHealth() {
    // if (gold >= 10) {
    //     health += 10;
    //     gold -= 10;
    //     healthText.innerText = `Health: ${health}`;
    //     goldText.innerText = `Gold: ${gold}`;
    //     text.innerText = "You bought 10 health!";
    // } else {
    //     text.innerText = "You don't have enough gold!";
    // }
}

function buyWeapon() {
    // if (gold >= 20) {
    //     inventory.push("sword");
    //     currentWeapon = 1;
    //     gold -= 20;
    //     goldText.innerText = `Gold: ${gold}`;
    //     text.innerText = "You bought a sword!";
    // } else {
    //     text.innerText = "You don't have enough gold!";
    // }
}
function goTown() {
    console.log("Going to the town square...");
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. What would you like to do? Enter the \"store\".";
}

function update(location) {

}