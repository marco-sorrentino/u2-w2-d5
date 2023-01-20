const background = document.getElementsByTagName("body");
const dark = document.getElementById("darkMode");
const darkBg = document.getElementById("darkBg");

dark.addEventListener("click", () => {
  darkBg.classList.toggle("darkMode");
});
