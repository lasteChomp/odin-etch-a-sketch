const container = document.querySelector(".container");
const buttonDiv = document.createElement("div");
const button = document.createElement("button");
button.textContent = "New Grid";
buttonDiv.appendChild(button);
document.body.prepend(buttonDiv);

let gridNum = 16;

const createGrid = (gridNum) => {
  const heightSize = container.clientHeight / gridNum;
  const widthSize = heightSize * gridNum;

  // First, create 16 rows
  for (let i = 0; i < gridNum; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.style.width = `${widthSize}px`;
    row.style.height = `${heightSize}px`;
    row.style.display = "flex";
    container.appendChild(row);
  }

  const rows = document.querySelectorAll(".row");

  // Create 16 squares in each row
  for (const row of rows) {
    const widthSize = row.clientWidth / gridNum;
    for (let i = 0; i < gridNum; i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = `${widthSize}px`;
      square.style.height = "100%";
      row.appendChild(square);
    }
  }
};

const drawOnGrid = () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      // Highlight the mouseover target
      e.target.style.backgroundColor = "black";

      // Reset the color after a short delay
      setTimeout(() => {
        e.target.style.backgroundColor = "";
      }, 1000);
    });
  });
};

const playGrid = () => {
  createGrid(gridNum);
  drawOnGrid();
};

window.addEventListener("DOMContentLoaded", playGrid);
button.addEventListener("click", () => {
  container.innerHTML = "";
  gridNum = Number(
    prompt("Number of squares per side for the new grid (max 100)")
  );

  if (gridNum > 100) {
    return;
  }

  playGrid();
});
