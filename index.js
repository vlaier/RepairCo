const additionalInfo = document.getElementById("additional-info");
const showMore = document.getElementById("show-more-btn");
showMore.addEventListener("click", () => {
  additionalInfo.classList.toggle("hidden");
  console.log("hidden");
});
