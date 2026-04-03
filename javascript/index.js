import { genHeader, genFooter } from "./mentos.js";

// Mentos Generator
function mentos(title, route){
  genHeader(title);
  genFooter(route);
  setStyle();
  console.log("mentos() executed"); //DEBUG
};

// Utils
function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length); // value
        }
    }
    return null;
}

function setStyle(){
  let theme = getCookie("theme");

  if(theme){
    if (theme == "dark"){
      link.setAttribute("href", "css/glowy.css");
    }
    if (theme == "light"){
      link.setAttribute("href", "css/neo.css");
    }
  }

}

//Opens menu bar for Mobile miew
function menuBarOpen (){
  document.getElementById("navBar").style.height="150px";
  
  document.getElementById("pokediv").style.paddingBottom="150px";
  document.getElementById("menuOpen").style.display="none";
  document.getElementById("menuClose").style.display="inline";
}
function menuBarClose (){
  document.getElementById("navBar").style.height="0px";
  document.getElementById("navBar").style.overflowY="hidden";
  document.getElementById("pokediv").style.paddingBottom="0px";
  document.getElementById("menuOpen").style.display="inline";
  document.getElementById("menuClose").style.display="none";
}
//Makes the glowy effect work when the menu is open
function overShadow (){
  document.getElementById("navBar").style.overflowY="overflow";
}
//Replaces the CSS file [Not working right now]
function css1Function (){
  document.getElementById("styleLink").href="css/glowy.css";
}
function css2Function (){
  document.getElementById("styleLink").href="css/neo.css";
}

function toggleTheme(theme1, theme2){
  const link = document.querySelector("link[rel='stylesheet']");

  if (!link) return;

  const current = link.getAttribute("href");

  if (current === theme1) {
    link.setAttribute("href", theme2);
    setCookie("theme","light",7);
  } else {
    link.setAttribute("href", theme1);
    setCookie("theme","dark",7);
  }
}


window.menuBarOpen = function () {
  menuBarOpen();
};

window.menuBarClose = function () {
  menuBarClose();
};

window.toggleTheme = function () {
  toggleTheme('css/glowy.css','css/neo.css');
};

document.addEventListener("DOMContentLoaded", () => {
  mentos('Markos Calderon','');
  console.log("Content Loaded");
});
