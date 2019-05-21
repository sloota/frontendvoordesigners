/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var poppetje = document.querySelector(".poppetje");
var mispoes = document.querySelector(".mis");
var h = [document.querySelector(".level"), document.querySelector(".score1"), document.querySelector(".score2"), document.querySelector(".replay")];
var score1 = 0;
var score2 = 0;

var dotLeft = 30;
var dotTop = 60;

function raak() {
    score1 += 10;
    h[1].textContent = score1;
    if (score1 == 10) {
        h[0].textContent = "BATTLE";
        h[1].style.display = "block";
        h[1].textContent = score1;
        h[2].style.display = "block";
        h[2].textContent = score2;
    } else if (score1 == 100) {
        h[0].textContent = "PLAYER 1 WIN";
        h[0].style.color = "white";
        h[0].style.top = "15vh";
        poppetje.style.display = "none";
        h[1].style.display = "none";
        h[3].style.display = "block";
    }
}

function mis() {
    if (score1 < 100) {
        score2 += 10;
        h[2].textContent = score2;
        if (score2 == 10) {
            h[0].textContent = "BATTLE";
            h[1].style.display = "block";
            h[1].textContent = score1;
            h[2].style.display = "block";
            h[2].textContent = score2;
        } else if (score2 == 100) {
            h[0].textContent = "PLAYER 2 WIN";
            h[0].style.color = "white";
            h[0].style.top = "15vh";
            poppetje.style.display = "none";
            h[1].style.display = "none";
            h[3].style.display = "block";
        }
    }
}

function moveLeft() {
    dotLeft -= 5;
    poppetje.style.left = dotLeft + "vw";
    console.log("links");
}

function moveUp() {
    dotTop -= 10;
    poppetje.style.top = dotTop + "vh";
    console.log("omhoog");
}

function moveRight() {
    dotLeft += 5;
    poppetje.style.left = dotLeft + "vw";
    console.log("rechts");
}

function moveDown() {
    dotTop += 10;
    poppetje.style.top = dotTop + "vh";
    console.log("beneden");
}

function replay() {
    location.reload();
}

/*
document.onKeyDown = function(event) {
        switch (event.keyCode) {
			case 37: //left arrow key
				moveLeft();
				break;
			case 38: //Up arrow key
				moveUp();
				break;
			case 39: //right arrow key
				moveRight();
				break;
			case 40: //down arrow key
				moveDown();
				break;
            case 32: //down arrow key
				replay();
				break;
		}
};*/

var left = false;
var up = false;
var right = false;
var down = false;

function onKeyDown(event) {
    if (event.keyCode == "37" && !left) {
        left = true;
        moveLeft();
    }
    if (event.keyCode == "38" && !up) {
        up = true;
        moveUp();
    }
    if (event.keyCode == "39" && !right) {
        right = true;
        moveRight();
    }
    if (event.keyCode == "40" && !down) {
        down = true;
        moveDown();
    }
    if (event.keyCode == "32") {
        replay();
    }
}

function onKeyUp(event) {
    if (event.keyCode == "37") {
        left = false;
    }
    if (event.keycode == "38") {
        up = false;
    }
    if (event.keyCode == "39") {
        right = false;
    }
    if (event.keycode == "40") {
        down = false;
    }
}

window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

poppetje.addEventListener('click', raak, false);
mispoes.addEventListener('click', mis, false);
