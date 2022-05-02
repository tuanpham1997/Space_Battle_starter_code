console.log('hello there')
const btn = document.querySelector('button');
const enemy = document.querySelector(`.enemyStats`)
const player =document.querySelector(`.playerStats`)
const nameBox = document.querySelector(`.nameBox`)
const body = document.querySelector(`body`)
const bodyContainer = document.querySelector(`.bodyContainer`)
// console.log(body)

console.log(enemy)
// console.log(btn)
// Create USS Schwarzenegger Ship
// Create alien ships
class SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.alive = true;
    }
    checkShipStatus() {
        if (this.hull <= 0) {
            return this.alive = false;
            
        }
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}





// change
const ussHelloWorld = new SpaceShip('USS Schwarzenegger',20, 5, .7);
const spaceFleet = []
function addShips(i) {
    spaceFleet.push(new SpaceShip(`AlienShip${i}`, getRandomInt(3, 6), getRandomInt(2, 4), getRandomNum(.6, .8)))
}
for (let i = 0; i < 6; i++) {
    addShips(i);
}
console.log(spaceFleet)
let alienAttacker = spaceFleet.pop()

function getEnemyHull() { enemy.innerText = `Hull : ${alienAttacker.hull}\nFirePower : ${alienAttacker.firepower}\nAccuracy : ${alienAttacker.accuracy}\n` }
getEnemyHull()

function getPlayerHull() {player.innerText = `Hull : ${ussHelloWorld.hull}\nFirePower : 5\nAccuracy : .7\n`}
getPlayerHull()

function getEnemyName(){nameBox.innerText = `${alienAttacker.name}`
}
getEnemyName()


// Our attack
function ussAttack() {
    if (Math.random() <= ussHelloWorld.accuracy) {
        alienAttacker.hull = alienAttacker.hull - ussHelloWorld.firepower;
        getEnemyHull()
        console.log(`You hit for ${ussHelloWorld.firepower} damage! `)
        
    } else{
        console.log(`You missed! gg`)}
}
// their? attack
function alienAttack() {
    if (Math.random() <= alienAttacker.accuracy) {
        ussHelloWorld.hull = ussHelloWorld.hull - alienAttacker.firepower;
        getPlayerHull()
        console.log(`They hit for ${alienAttacker.firepower} damage! `)

    }else{
        console.log(`They missed! Nice!`)}
}

// test prompt on defeat :{
 function lose(){

     body.classList.add("hidden")
     // fail image
     bodyContainer.style.width = "0px"
     prompt('You lost, Try again?')
     btn.removeEventListener('click', combat)
    console.dir(body)
 }

// kill combat
function combat() {
    // if(alienAttacker.alive === false && spaceFleet === null){
    // console.log(`You win!`)

     if (alienAttacker.alive) {
        // /*test */ while(alienAttacker.alive && ussHelloWorld.alive){
            // if you lost
            if(ussHelloWorld.alive === false){
                lose()
            }
        
        ussAttack();
        alienAttacker.checkShipStatus();
        alienAttack();
        ussHelloWorld.checkShipStatus();
        /*test */
    } else {
        if(spaceFleet.length > 0){
        alienAttacker = spaceFleet.pop();
         }
        else{console.log(`You Win`)}
         /*flanking */
        getEnemyHull()
        console.log(`${alienAttacker.name} is Dead! `)
        getEnemyName() /* displays name change per kill*/
        getThyPrompt()
    
        
       
    }
}

// prompt and re-prompt on wrong answer
function getThyPrompt(){
    if(ussHelloWorld.alive === false){
    lose()}
    else{
        let promptAnswer = prompt(`Continue or Retreat ?`)
        console.log(promptAnswer.toUpperCase())
        if (promptAnswer.toUpperCase() === `CONTINUE`){
        }else if(promptAnswer.toUpperCase() === `RETREAT`){ 
            console.log(`GG no re`) 
            lose()
            console.log(`Stop playing you lost`)
           
        }else{ console.log(`please type continue or retreat`)
        getThyPrompt()
    }
}
}


btn.addEventListener('click', combat);