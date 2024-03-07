//////////////////////////////////////////////
// Author: Gabriel Martires
// Scrimba: Basketball Scoreboard Solo Project
///////////////////////////////////////////////

// Score Counters

let homeScore = document.getElementById("home-scoreEl");
let guestScore = document.getElementById("guest-scoreEl");
let home = 0;
let guest = 0;

function addHomePoints(homePoints) {
    home += homePoints
    homeScore.textContent = home
}

function addGuestPoints(guestPoints) {
    guest += guestPoints
    guestScore.textContent = guest
}

// Fouls Counters

let foulsHome = document.getElementById("foul-homeEl");
let foulsGuest = document.getElementById("foul-guestEl");
let addFoulHome = 0;
let addFoulGuest = 0;

function foulHome(newHomeFoul) {
    addFoulHome += newHomeFoul
    foulsHome.textContent = addFoulHome;
}

function foulGuest(newGuestFoul) {
    addFoulGuest += newGuestFoul
    foulsGuest.textContent= addFoulGuest;
}

// Reset Couters

function reset() {
    homeScore.textContent = home = 0;
    guestScore.textContent = guest = 0;
    foulsHome.textContent = addFoulHome = 0;
    foulsGuest.textContent = addFoulGuest = 0;
}