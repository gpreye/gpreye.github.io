// Active Nav-links
let ul = document.querySelector("ul");
let a = document.querySelectorAll("a");

a.forEach(el => {
  el.addEventListener("click", function() {
    ul.querySelector(".active").classList.remove("active");

    el.classList.add("active");
  });
});

// Slide
function navSlide() {
  let burger = document.querySelector(".burger");
  let navLinks = document.querySelector(".nav-links");
  burger.classList.toggle("show");
  navLinks.classList.toggle("show");
}

// Categories
function phoneBox() {
  document.getElementById("phones-box").style.display = "block";
  document.getElementById("headphones-box").style.display = "none";
  document.getElementById("watches-box").style.display = "none";
  document.getElementById("games-box").style.display = "none";
  document.getElementById("pc-box").style.display = "none";
}

function headBox() {
  document.getElementById("phones-box").style.display = "none";
  document.getElementById("headphones-box").style.display = "block";
  document.getElementById("watches-box").style.display = "none";
  document.getElementById("games-box").style.display = "none";
  document.getElementById("pc-box").style.display = "none";
}

function watchesBox() {
  document.getElementById("phones-box").style.display = "none";
  document.getElementById("headphones-box").style.display = "none";
  document.getElementById("watches-box").style.display = "block";
  document.getElementById("games-box").style.display = "none";
  document.getElementById("pc-box").style.display = "none";
}

function gameBox() {
  document.getElementById("phones-box").style.display = "none";
  document.getElementById("headphones-box").style.display = "none";
  document.getElementById("watches-box").style.display = "none";
  document.getElementById("games-box").style.display = "block";
  document.getElementById("pc-box").style.display = "none";
}

function pcBox() {
  document.getElementById("phones-box").style.display = "none";
  document.getElementById("headphones-box").style.display = "none";
  document.getElementById("watches-box").style.display = "none";
  document.getElementById("games-box").style.display = "none";
  document.getElementById("pc-box").style.display = "block";
}

// Copy Link
const myinpt = document.getElementById("inpt");
const btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function() {
  // step 1 - select the text
  myinpt.select();
  // change text
  btnCopy.innerHTML = "Copied";

  // step 2 - copying the text
  document.execCommand("copy");
};
