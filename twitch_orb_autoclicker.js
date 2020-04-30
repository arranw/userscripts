// ==UserScript==
// @name         Twitch Auto Clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto clicks that little button that gives you 50 orbs, pretty pointless but fun anyway
// @author       You
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

console.log("clicking")

setInterval(function() {
    try {
        document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0].click();
        console.log("click")
    } catch (err) {
        console.log("no button")
    }
}, 5000);
