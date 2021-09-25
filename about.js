 // navMenu
 const hamBurger = document.querySelector(".ham-burger");
 const navCross = document.querySelector(".nav-menu-cross");
 const navMenu = document.querySelector(".nav-menu");

 navOpen = false;
 hamBurger.addEventListener("click", () => {
     if (!navOpen) {
         navMenu.style.opacity = "1";
         navMenu.style.pointerEvents = "auto";
         navOpen = true;
     }
 });
 navCross.addEventListener("click", () => {
     if (navOpen === true) {
         navMenu.style.opacity = "0";
         navMenu.style.pointerEvents = "none";
         navOpen = false;
     }
 });

 const header = document.querySelector("header")
 window.addEventListener("scroll", () => {
     let headerCurrent = window.pageYOffset;
     if (headerCurrent <= 0) {
         header.style.boxShadow = "none"
     }
     if (headerCurrent > 0) {
         header.style.boxShadow = "0 2px 10px 0px rgba(0, 0, 0, .5)"
     }
 });