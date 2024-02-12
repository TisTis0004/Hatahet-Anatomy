const contactIcons = document.querySelectorAll(".contact-icon");
document.addEventListener("DOMContentLoaded", function () {
  const engTitle = document.querySelector(".fade-in-left");
  const arTitle = document.querySelector(".fade-in-right");
  engTitle.classList.add("is-visible");
  arTitle.classList.add("is-visible");
  window.scrollTo({
    top: 0,
  });
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
const contactIconsBackground = document.getElementById(
  "contact-icons-background"
);
function showContact() {
  contactIconsBackground.style.transform = "rotateY(0)";
  for (let icon of contactIcons) {
    icon.style.color = "#002845";
  }
  setTimeout(() => {
    contactIconsBackground.style.transformOrigin = "right";
    contactIconsBackground.style.transform = "rotateY(90deg)";
    for (let icon of contactIcons) icon.style.color = "#FFF";
  }, 1800);
  contactIconsBackground.style.transformOrigin = "left";
}
// contactIcons[0].addEventListener("mouseenter", () => {
//   contactIcons[0].style.transition = "color 0.5s 0s ease";
//   contactIcons[0].style.color = "#ff0000";
// });
// contactIcons[1].addEventListener("mouseenter", () => {
//   contactIcons[1].style.transition = "color 0.5s 0s ease";
//   contactIcons[1].style.color = "#23a8e9";
// });
// contactIcons[2].addEventListener("mouseenter", () => {
//   contactIcons[2].style.transition = "color 0.5s 0s ease";
//   contactIcons[2].style.color = "#0866ff";
// });
// contactIcons[3].addEventListener("mouseenter", () => {
//   contactIcons[3].style.transition = "color 0.5s 0s ease";
//   contactIcons[3].style.color = "#ffdd00";
// });
// contactIcons[0].addEventListener("mouseleave", () => {
//   contactIcons[0].style.transition = "color 0.5s 0s ease";
//   contactIcons[0].style.color = "#FFF";
// });
// contactIcons[1].addEventListener("mouseleave", () => {
//   contactIcons[1].style.transition = "color 0.5s 0s ease";
//   contactIcons[1].style.color = "#FFF";
// });
// contactIcons[2].addEventListener("mouseleave", () => {
//   contactIcons[2].style.transition = "color 0.5s 0s ease";
//   contactIcons[2].style.color = "#FFF";
// });
// contactIcons[3].addEventListener("mouseleave", () => {
//   contactIcons[3].style.transition = "color 0.5s 0s ease";
//   contactIcons[3].style.color = "#FFF";
// });
const summaries = document.querySelectorAll(".summaries-cnt"); // 9 Systems
