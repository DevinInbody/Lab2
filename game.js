let playerName = prompt("What is your name?");
if (playerName !== "");
const player = {
    name: playerName,
}
const opponent ={
    name: "Grant",
}


let play = prompt(`Hello ${player.name} Do you want to play a game?`);
let grantLives = 3;
let playerLives = 1;
let playerHealth = 40;
let grantHealth = 10;
let battleDamage = () => Math.floor(Math.random() * 3) +1
//console.log(grantHealth-battleDamage)
// let playGame = () => {
if (play === "yes" || "Yes"){
while(grantHealth > 0 && playerHealth > 0){
grantHealth = grantHealth - battleDamage();
console.log(`Grant has ${grantHealth} health remaining`);
playerHealth = playerHealth - battleDamage();
    console.log(`${playerName} have ${playerHealth} remaining`)
if (grantHealth <= 0 && grantLives > 0) {grantLives = grantLives - 1; grantHealth = 10;
    (console.log(`Grant has come back to life! He has ${grantLives} remaining`))}
//else if (grantLives === 0 && grantHealth >= 7) {console.log("Grant is on his last almost done for good! Finish Him!")}
else if (playerHealth <= 0) {console.log("You Lose!"); break}
else if (grantLives === 0 && grantHealth <= 0){console.log("You win!"); break}
}}

else{console.log("Come back when you're feeling brave.")}
