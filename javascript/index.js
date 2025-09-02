//Opens menu bar for Mobile miew
function menuBarOpen (){
  document.getElementById("navBar").style.height="90px";
  
  document.getElementById("pokediv").style.paddingBottom="90px";
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
  documnet.getElementById("styleLink").href="css/glowy.css";
}
function css3Function (){
  document.getElementById("styleLink").href="css/glowy.css";
}
