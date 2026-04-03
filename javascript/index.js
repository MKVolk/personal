import { genHeader, genFooter } from "./mentos.js";

// Mentos Generator
function mentos(title, route){
  genHeader(title);
  genFooter(route);
  console.log("mentos() executed")
};

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
  } else {
    link.setAttribute("href", theme1);
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
  mentos('','');
  console.log("Content Loaded");
});
