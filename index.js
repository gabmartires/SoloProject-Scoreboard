//////////////////////////////////////////////
// Author: Gabriel Martires
// Scrimba: Basketball Scoreboard Solo Project
///////////////////////////////////////////////

// Score Counters

let homeScore = document.getElementById("home-scoreEl");
let guestScore = document.getElementById("guest-scoreEl");
let home = 0;
let guest = 0;

function addHome1() {
    home +=1;
    homeScore.textContent = home;    
}  

function addHome2() {
    home +=2;
    homeScore.textContent = home;    
} 

function addHome3() {
    home +=3;
    homeScore.textContent = home;    
}

function addguest1() {
    guest +=1;
    guestScore.textContent = guest;
}

function addguest2() {
    guest +=2;
    guestScore.textContent = guest;
}
function addguest3() {
    guest +=3;
    guestScore.textContent = guest;
}

// Fouls Counters

let foulsHome = document.getElementById("foul-homeEl");
let foulsGuest = document.getElementById("foul-guestEl");
let addFoulHome= 0;
let addFoulGuest = 0;

function foulHome() {
    addFoulHome +=1
    foulsHome.textContent = addFoulHome;
}

function foulGuest() {
    addFoulGuest += 1
    foulsGuest.textContent= addFoulGuest;
}


// Reset Couters

function reset() {
    homeScore.textContent = home = 0;
    guestScore.textContent = guest = 0;
    foulsHome.textContent = addFoulHome = 0;
    foulsGuest.textContent = addFoulGuest = 0;
}