const bars = document.querySelector(".bars");
const dropdown = document.querySelector(".dropdown-bars");
bars.addEventListener("mouseover", () => {
  dropdown.classList.add("open");
});
bars.addEventListener("mouseout", () => {
  dropdown.classList.remove("open");
});
