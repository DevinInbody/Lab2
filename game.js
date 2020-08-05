let playerHealth = 40
let grantHealth = 10
let grantLives = 3

let player = {
    userName: "",
    // health: 40,
    // damage: battleDamage()
 }

 let opponent ={
    name: "Grant",
    health: 10,
    // lives: 3,
    // damage: battleDamage()
}


let startGame = () => {
  start = prompt("Do you want to play a game?");
 
  if (start === "yes"||"Yes"){
    player.userName = prompt("What is your name?");  
    console.log(`Hello, ${player.userName}. Time to fight the mighty Grant! You start with 40 health. Good luck!`);
    startCombat()
    }
    else{
        console.log("Come back when you are feeling brave.")
    }
}

const battleDamage = () => {return Math.floor(Math.random() * 4) +1};

let continueGame = () => {
    let cont = prompt(`Do you want to continue? You have ${playerHealth} health left, and Grant has ${grantHealth} lives left and ${grantLives} remaining. `); 
return cont
};



let startCombat = () => {
    {
    while(grantHealth > 0 && playerHealth > 0){
    grantHealth = grantHealth - battleDamage();
    console.log(`Grant has ${grantHealth} health remaining`);
    playerHealth = playerHealth - battleDamage();
        console.log(`${player.userName} have ${playerHealth} remaining`);
    if (grantHealth <= 0 && grantLives > 0) {grantLives = grantLives - 1; grantHealth = 10;
        (console.log(`Grant has come back to life! He has ${grantLives} remaining`))}
    else if (playerHealth <= 0) {console.log("You Lose!"); break}
    else if (grantLives === 0 && grantHealth <= 0){console.log("You win!"); break};
    if (continueGame() === "Yes"||"yes"){continue}
        else if(continueGame() !== "Yes"||"yes"){
        console.log("You have surrendered! Better luck next time!");
         break}
    }
}}

startGame();




//console.log(grantHealth-battleDamage)
