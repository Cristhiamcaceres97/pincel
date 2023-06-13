document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.strokeStyle = "green";

  let currentX = 0;
  let currentY = 0;

  function draw(x, y) {
    context.beginPath();
    context.moveTo(currentX, currentY);
    context.lineTo(x, y);
    context.lineWidth = 7;
    context.stroke();
    currentX = x;
    currentY = y;
  }

  canvas.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    draw(x, y);
  });

  canvas.addEventListener("mouseenter", () => {
    canvas.style.cursor = "none";
  });

  canvas.addEventListener("mouseleave", () => {
    canvas.style.cursor = "default";
  });
});
