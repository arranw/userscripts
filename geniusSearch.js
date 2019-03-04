// ==UserScript==
// @name         Genius Search Autofill
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Copies the current search into the searchbox
// @author       Arran Woodruff
// @match        https://genius.com/search?q=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let searchBox = document.getElementsByClassName("quick_search");
    let prevSearchValue = document.getElementsByClassName("search_results_page-header");

    let prevSearchText = prevSearchValue[0].innerHTML;

    let newSearchValue = prevSearchText.substring(1, prevSearchText.length - 1) + " ";

    searchBox[0].value = newSearchValue;
})();
