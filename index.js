const additionalInfo = document.getElementById("additional-info");
const showMore = document.getElementById("show-more");
const downArrow = document.getElementById("caret-down");
const hamburgerButton = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("menu-content");
showMore.addEventListener("click", () => {
  let p = showMore.children[1];
  if (p.textContent === "Show More") {
    p.textContent = "Hide";
  } else {
    p.textContent = "Show More";
  }
  additionalInfo.classList.toggle("hidden");
  downArrow.classList.toggle("rotate");
});

function rotate(element) {
  console.log(element);
  console.log(element.classList);
}
hamburgerButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
