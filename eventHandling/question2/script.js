const buttonClick = document.getElementById("dropdownBtn");
const menuClick = document.getElementById("dropdownMenu");

const toggleButton = () => {
  buttonClick.addEventListener("click", (e) => {
    e.stopPropagation();
    menuClick.classList.toggle("show");
  });
};

window.addEventListener("click", () => {
  if (menuClick.classList.contains("show")) {
    menuClick.classList.remove("show");
  }
});
