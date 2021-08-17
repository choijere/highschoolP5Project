//NO SETUP OR DRAWING FUNCTIONS
console.log("gameRules loaded");

//this checks if the game is supposed to be running
var gameOn = false;

//this checks if the level is clear of targets
var clear;

//level
var level = 0

//duration of seconds for the game timer.
var time;

//current score
var currentHitScore;

//high score
var highScore;

//this checks of the level is clear of targets
function checkClear() {
	if (targets.length == 0){
		clear = true;
	}else{
		clear = false;
	}
}

//spawn targets
var targetNo;
function spawn(){
	if (clear == true){
		level = level + 1
		targetNo = level * 4
		for (let i = 0; i < targetNo; i++){
			let x = random(80, displayWidth - 100);
			let y = random(250, displayHeight - 100);
			let r = 64 / level;
			let b = new target(x, y, r);
			targets.push(b);
		}
	}
}

function existing() {
	for (let i = 0; i < targets.length; i++){
		targets[i].show();
		targets[i].move();
	}
}

/*function createBorders() {
	rect ()
}

function createSpace() {
	
}
*/
function gameStart(){
	console.log("game BEGIN")
	gameOn = true;
}
//james

//from target.js
function hitDetect () { //OOO! ALSO!!! this function is a massive payload that will be called at the "mouse clicked" in the index
	if (gameOn == true){
		if (clear == false) {
			for (let i = targets.length - 1; i >= 0; i--){
				if ((targets[i].hit(mouseX, mouseY))){
					console.log("DING!!!");
					currentHitScore = currentHitScore + 1;
					targets.splice(i, 1);
				}
			}
		}
	}
}


//this is the most important funciton. if the game is supposed to be running, it sends all the nessercary functions to the draw funciton over at the index file
//this funciton locks the game functions so that way they're only called when the player is actually playing the game
function runGame() {
	checkClear();
	spawn();
	existing();
}