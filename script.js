document.addEventListener("DOMContentLoaded", function () {
  const engTitle = document.querySelector(".fade-in-left");
  const arTitle = document.querySelector(".fade-in-right");
  engTitle.classList.add("is-visible");
  arTitle.classList.add("is-visible");
});
const videosBtn = document.querySelector("#videosBtn");
const sheetsBtn = document.querySelector("#sheetsBtn");
const boxTitle = document.querySelectorAll(".box-title-container");
videosBtn.addEventListener("click", function () {
  boxTitle[0].style.transition = "transform 0.1s 0s ease";
  boxTitle[0].style.transform = "scaleY(0)";
  setTimeout(function () {
    boxTitle[0].style.transform = "scaleY(1)";
    boxTitle[0].style.transition = "transform 0.2s 0.1s ease";
  }, 200);
});
sheetsBtn.addEventListener("click", function () {
  boxTitle[1].style.transition = "transform 0.1s 0s ease";
  boxTitle[1].style.transform = "scaleY(0)";
  setTimeout(function () {
    boxTitle[1].style.transform = "scaleY(1)";
    boxTitle[1].style.transition = "transform 0.3s 0.1s ease";
  }, 295);
});
const year = document.querySelector("#year");
const d = new Date();
year.innerText = d.getFullYear();
