console.log(`Hello chello TSR! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

///PAGE ONE LEFT MENU

let $menu_buttonPg1 = document.querySelector("#nav-pg1");

let $nav_listPg1 = document.querySelector(".nav-list");


$menu_buttonPg1.addEventListener("click", function(){
    $nav_listPg1.style.transform = "translateX(0)"; 
   
    console.log("clicky main menu ");
});

///PAGE ONE POP-OUT MENU

let $bookNow_bttn = document.querySelector(".bookNow_bttn");

let $popout_menu = document.querySelector(".popout-menu");

let $close_bttn = document.querySelector(".close-button");

$bookNow_bttn.addEventListener("click", function(){
    console.log("clicky book now");
    $popout_menu.style.transform = "translateX(0)";
});

$close_bttn.addEventListener("click", function(){
    console.log("clicky close button");
    $popout_menu.style.transform = "translateX(1000px)";
});


