const container = document.querySelector(".container");
const heightSize = container.clientHeight / 16;
const widthSize = heightSize * 16;
console.log(heightSize);
console.log(widthSize);

// First, create 16 rows
for (let i = 0; i < 16; i++) {
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
  const widthSize = row.clientWidth / 16;
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.width = `${widthSize}px`;
    square.style.height = "100%";
    row.appendChild(square);
  }
}

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
