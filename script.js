
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

const weapons = [
    {
        name: "stick", power: 5, price: 1
    },
    {
        name: "Dagger", power: 20, price: 5
    },
    {
        name: "sword", power: 50, price: 20
    },
    {
        name: "axe", power: 100, price: 50
    }
];
const locations = [{
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    description: "You are in the town square. What would you like to do? Enter the \"store\"."
},
{
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (20 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    description: "You are in the store. What would you like to do?"
},
{
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    description: "You enter the cave. You see a dragon! What would you like to do?"
}
] ;

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown() {
    update(locations[0]);
}


function update(locations) {
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
    text.innerText = locations.description;
}
function goStore() {
    // console.log("Going to the store...");
    update(locations[1]);
    // text.innerText = "You are in the store. What would you like to do?";
}

 
function update(locations){
    text.innerText = locations.description;
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
}
function goCave() {
    console.log("Going to the cave...");
    update(locations[2]);
}
function update(locations) {
    text.innerText = locations.description;
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
}






function fightDragon() {
    console.log("Fighting dragon...");
}

function buyHealth() {
    if (gold >= 10) {
        health += 10;
        gold -= 10;
        healthText.innerText = health;
        goldText.innerText = gold;
        text.innerText = "You bought 10 health!";
    } else {
        text.innerText = "You don't have enough gold!";
    }
    // gold -= 10;
    // health += 10;
    // healthText.innerText = `Health: ${health}`;
    // goldText.innerText = `Gold: ${gold}`;
}

function buyWeapon(weapons) {
    if (currentWeapon < weapons.length - 1)
    { if (gold >= 20) {
        gold -= 20;
        goldText.innerText = gold;
        currentWeapon++;
        // same thing as currentWeapon = currentWeapon + 1 and also // currentWeapon += 1; 
        let newWeapon = weapons[currentWeapon].name;
        text.innerText = `you now have a ${newWeapon}`;
        //same as text.innerText = "You now have a " + newWeapon + ".";
        inventory.push(newWeapon);
        text.innerText = `In you inventory you have: ${inventory}`;
    } else {
        text.innerText = "You don't have enough gold!";
    }
    } else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon";
        button2.onclick = sellWeapon;
    }
}
    // if (gold >= 20) {
    //     inventory.push("sword");
    //     currentWeapon = 1;
    //     gold -= 20;
    //     goldText.innerText = `Gold: ${gold}`;
    //     text.innerText = "You bought a sword!";
    // } else {
    //     text.innerText = "You don't have enough gold!";
    // }
function sellWeapon() {
    if (currentWeapon > 1) {
        gold += 20;
        goldText.innerText = gold;
        let soldWeapon = weapons[currentWeapon].name;
        text.innerText = `You sold your ${soldWeapon} for 20 gold.`;
        inventory.pop(); // remove the last item from the inventory
        currentWeapon--;

    } else {
        text.innerText = "You don't have a weapon to sell!";
    }
}
// function update(weapons) {
//     text.innerText = weapons.description;
//     button1.innerText = weapons["button text"][0];
//     button2.innerText = weapons["button text"][1];
//     button3.innerText = weapons["button text"][2];
//     button1.onclick = weapons["button functions"][0];
//     button2.onclick = weapons["button functions"][1];
//     button3.onclick = weapons["button functions"][2];
// }
function fightSlime() {

}
function fightBeast() {

}


