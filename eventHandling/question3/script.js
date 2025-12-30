const mouseClick = document.getElementById("mouse-click");

mouseClick.addEventListener("mouseenter", () => {
  mouseClick.style.backgroundColor = "black";
  mouseClick.style.color = "#fff";
});

mouseClick.addEventListener("mouseleave", () => {
  mouseClick.style.backgroundColor = "";
  mouseClick.style.color = "#000000";
});

