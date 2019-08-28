"use strict";

///PAGE TWO POP-OUT MENU
var $nav_bttn = document.querySelector(".open-button");
var $popout_menu2 = document.querySelector(".popout-menu2");
var $close_bttn2 = document.querySelector(".close-button2");
$nav_bttn.addEventListener("click", function () {
  console.log("clicky open menu");
  $popout_menu2.style.transform = "translateX(0px)";
  $close_bttn2.style.transform = "translateY(0px)";
});
$close_bttn2.addEventListener("click", function () {
  console.log("clicky close button");
  $popout_menu2.style.transform = "translateX(-3000px)";
  $close_bttn2.style.transform = "translateY(-200px)";
});
//# sourceMappingURL=page2.js.map
