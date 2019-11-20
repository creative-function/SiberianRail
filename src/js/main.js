console.log(`Hello chello TSR! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

///PAGE ONE LEFT MENU

let $nav_icon = document.querySelector(".nav-icon");
let $close_icon = document.querySelector(".close-X");
let $menu_buttonPg1 = document.querySelector("#navButton");
let $closing_link = document.querySelector("#closing-link");
let $nav_listPg1 = document.querySelector(".nav-list");

$close_icon.style.display = "none";
//sets initial display value regardless of sass
//alt solution - toggle class/ keep styling in css

$menu_buttonPg1.addEventListener("click", function(){
    console.log("click 2");
    
    if($close_icon.style.display == "none"){
        $nav_listPg1.style.transform ="translateX(0)";
        $nav_listPg1.style.opacity = "1";
        $nav_icon.style.display = "none";
        $close_icon.style.display = "block";
        
    } else{
        $nav_listPg1.style.transform = "translateX(-1500px)";
        $nav_listPg1.style.opacity = ".2";
        $nav_icon.style.display = "block";
        $close_icon.style.display = "none";
        
    }
});

$closing_link.addEventListener("click", function () {

    $nav_listPg1.style.transform = "translateX(-1500px)";
    $nav_listPg1.style.opacity = ".2";
    $nav_icon.style.display = "block";
    $close_icon.style.display = "none";
    
})

///PAGE 1,3,4,5 POP-OUT MENU

//book now/pop-out menu/ close button for desktop
let $bookNow_bttnMain = document.querySelector(".fw-Main_bttn");

let $popout_menuMain = document.querySelector(".pm-Main");

let $close_bttnMain = document.querySelector(".cb-Main");

//book now/pop-out menu/close button for mobile

let $bookNow_bttn = document.querySelector(".bookNow_bttn");

let $popout_menu = document.querySelector(".popout-menu");

let $close_bttn = document.querySelector(".close-button");


$bookNow_bttn.addEventListener("click", function(){
    console.log("mobile book now");
    $popout_menu.style.transform = "translateX(0)";
});

$close_bttn.addEventListener("click", function(){
    console.log("click close button");
    $popout_menu.style.transform = "translateX(3500px)";
});

///PAGE 1 desktop functions 

$bookNow_bttnMain.addEventListener("click", function(){
    console.log("main book now");
    $popout_menuMain.style.transform = "translateX(0)";
});

$close_bttnMain.addEventListener("click", function(){
    console.log("click close button");
    $popout_menuMain.style.transform = "translateX(3500px)";
});






