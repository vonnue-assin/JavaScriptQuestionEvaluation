const addEventListners = () => {
  const outerDiv = document.getElementById("outerDiv");
  const middleDiv = document.getElementById("middleDiv");
  const innerDiv = document.getElementById("innerDiv");

  outerDiv?.addEventListener("click", () => {
    alert("3. Click on the Outer Div (Bubbled)");
  });

  middleDiv?.addEventListener("click", () => {
    alert("2 Click on the Middle Div-Stopping propagation here.");
    event.stopPropagation();
  });

  innerDiv?.addEventListener("click", () => {
    alert("1.Click on the Inner Div");
  });
};

addEventListners();
