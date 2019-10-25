"use strict";

console.log("Hello chello TSR! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files."); ///PAGE ONE LEFT MENU

var $nav_icon = document.querySelector(".nav-icon");
var $close_icon = document.querySelector(".close-X");
var $menu_buttonPg1 = document.querySelector("#nav-pg1");
var $nav_listPg1 = document.querySelector(".nav-list");
$menu_buttonPg1.addEventListener("click", function () {
  console.log("click");

  if ($close_icon.style.display == "none") {
    $nav_listPg1.style.transform = "translateX(0)";
    $nav_listPg1.style.opacity = "1";
    $nav_icon.style.display = "none";
    $close_icon.style.display = "block";
  } else {
    $nav_listPg1.style.transform = "translateX(-1500px)";
    $nav_listPg1.style.opacity = ".2";
    $nav_icon.style.display = "block";
    $close_icon.style.display = "none";
  }
}); ///PAGE 1,3,4,5 POP-OUT MENU

var $bookNow_bttn = document.querySelector(".bookNow_bttn");
var $popout_menu = document.querySelector(".popout-menu");
var $close_bttn = document.querySelector(".close-button");
$bookNow_bttn.addEventListener("click", function () {
  console.log("clicky book now");
  $popout_menu.style.transform = "translateX(0)";
});
$close_bttn.addEventListener("click", function () {
  console.log("clicky close button");
  $popout_menu.style.transform = "translateX(1500px)";
});
//# sourceMappingURL=main.js.map
