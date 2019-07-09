// ==UserScript==
// @name         toggle
// @namespace    https://github.com/iugastefan
// @homepage     https://github.com/iugastefan/readtoggle/raw/master/toggle.user.js
// @version      0.2
// @description  Toggles chapter's read state
// @author       Iuga Stefan
// @match        https://mangadex.org/title/*
// @grant        none
// @license      BSD 3-Clause "New" or "Revised" License
// ==/UserScript==

(function() {
    'use strict';
    var but = document.createElement("div");
    var sp = document.createElement("span");
    sp.className = "fas fa-eye fa-fw";
    but.appendChild(sp);
    var t = document.createTextNode(" Mark all chapters read/unread");
    but.appendChild(t);
    but.style.cursor = "pointer";
    but.onclick = function() {
        var x = document.getElementsByClassName("chapter_mark_read_button");
        if (x.length !== 0) {
            Array.from(x).forEach(function(item) {
                item.click();
            });
        } else {
            x = document.getElementsByClassName("chapter_mark_unread_button");
            if (x.length !== 0) {
                Array.from(x).forEach(function(item) {
                    item.click();
                });
            } else {
                console.log("nothing to click");
            }
        }
    };

    document.getElementById("navbarSupportedContent").appendChild(but);
})();
