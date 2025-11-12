const container = document.querySelector(".container");
const heightSize = container.clientHeight / 16;
const widthSize = heightSize * 16;
console.log(heightSize);
console.log(widthSize);

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.className = "row";
  row.style.width = `${widthSize}px`;
  row.style.height = `${heightSize}px`;
  row.style.display = "flex";
  container.appendChild(row);
}

const rows = document.querySelectorAll(".row");

for (const row of rows) {
  const widthSize = row.clientWidth / 16;
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.style.width = `${widthSize}px`;
    square.style.height = "100%";
    row.appendChild(square);
  }
}
