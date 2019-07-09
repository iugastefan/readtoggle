// ==UserScript==
// @name         toggle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Toggles chapter's read state
// @author       Iuga Stefan
// @match        https://mangadex.org/title/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let but = document.createElement("div");
    let sp = document.createElement("span");
    sp.className="fas fa-eye fa-fw";
    but.appendChild(sp);
    var t = document.createTextNode(" Mark all chapters read/unread");
    but.appendChild(t);
    but.style.cursor="pointer";
    but.onclick=()=>{
        let x = document.getElementsByClassName("chapter_mark_read_button");
        if(x.length!==0){
            Array.from(x).forEach(item=>item.click());
        }else {
            x = document.getElementsByClassName("chapter_mark_unread_button");
            if(x.length!==0){
                Array.from(x).forEach(item=>item.click());
            }
            else{
                console.log("nothing to click");
            }
        }
    }

    document.getElementById("navbarSupportedContent").appendChild(but);
})();