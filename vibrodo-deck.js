const searchBar = document.querySelector(".search");
const clearIcon = document.querySelector(".clear-icon");
const searchIcon = document.querySelector(".search-icon-wrapper");

const checkForSearchText = function () {
  if (searchBar.value) {
    clearIcon.classList.add("visible");
  } else {
    clearIcon.classList.remove("visible");
  }
};

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("expanded");
  clearIcon.classList.toggle("expanded");
});

searchBar.addEventListener("keyup", () => {
  checkForSearchText();
});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  checkForSearchText();
});

