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

//   animtion awards





// window.onscroll = scrollAwards;

// let awardsText = document.querySelector("#awards-text");
// let awardImg = document.querySelector("#award-img");

// function scrollAwards() {
//    if (
//       document.body.scrollTop >700 ||
//       document.documentElement.scrollTop > 700
//    )
//    {
//       awardsText.classList.add("fromLeft")
//       awardImg.classList.add("fromRight")
//    } else {
//       awardsText.classList.remove("fromLeft")
//       awardImg.classList.remove("fromRight")
//    }
// }
