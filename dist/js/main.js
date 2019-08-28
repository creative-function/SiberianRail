"use strict";

console.log("Hello chello TSR! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files."); ///PAGE ONE LEFT MENU

var $menu_buttonPg1 = document.querySelector("#nav-pg1");
var $nav_listPg1 = document.querySelector(".nav-list");
$menu_buttonPg1.addEventListener("click", function () {
  $nav_listPg1.style.transform = "translateX(0)";
  console.log("clicky main menu ");
}); ///PAGE ONE POP-OUT MENU

var $bookNow_bttn = document.querySelector(".bookNow_bttn");
var $popout_menu = document.querySelector(".popout-menu");
var $close_bttn = document.querySelector(".close-button");
$bookNow_bttn.addEventListener("click", function () {
  console.log("clicky book now");
  $popout_menu.style.transform = "translateX(0)";
});
$close_bttn.addEventListener("click", function () {
  console.log("clicky close button");
  $popout_menu.style.transform = "translateX(1000px)";
});
//# sourceMappingURL=main.js.map
