let navButton = document.querySelector("#nav-button");

// toggle
// اگر نداره میزاره و یا داشت برمیداره
navButton.addEventListener("click", function () {
    navButton.classList.toggle("change")
  });

  



 /* for scroll window>200 */
  window.onscroll = scrollShowNav;

  let navMenu = document.querySelector("#nav-menu");

  function scrollShowNav() {
     if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
     )
     {
        // document.querySelector("#nav-menu").style.padding = "5px 30px";
        navMenu.classList.add("custum-navbar")
     } else {
        // document.querySelector("#nav-menu").style.padding = "1.5rem";
        navMenu.classList.remove("custum-navbar")
     }
  }