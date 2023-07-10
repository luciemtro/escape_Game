

/****************  insert footer nav ********************/
import {nav} from "./topNav.js";

addNav();
async function addNav() {
    const resp = await fetch("topNav.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
    //document.getElementsByTagName('header')[0].insertAdjacentHTML("afterbegin", html);

    nav();
}

addFooter();
async function addFooter() {
    const resp = await fetch("footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}