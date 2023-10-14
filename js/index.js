// CONTAINER IMAGE START
let i = 0;
let images = [];
let time = 2000;

images[0] = "../img/Product/shoe1.png";
images[1] = "../img/Product/shoe2.png";
images[2] = "../img/Product/shoe3.png";

function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

function img_sld(remote_number) {
  i = remote_number;
  document.slide.src = images[i];
}

window.onload = changeImg;

// CONTAINER IMAGE END

// HAMBURGER MENU START

const hamburger = document.querySelector("#hamburger");
const menus = document.querySelector("#menus");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.toggle("change")) {
    // icon
    hamburger.classList.remove("change");
    hamburger.classList.add("change");

    // menu
    menus.classList.remove("show");
    menus.classList.add("show");
  } else {
    hamburger.classList.add("change");
    hamburger.classList.remove("change");

    // menu
    menus.classList.add("show");
    menus.classList.remove("show");
  }
});

// RESIZE MENU START

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    if (menus.className.includes("show")) {
      menus.classList.remove("show");
      hamburger.classList.remove("change");
    }
  }
});
