const body = document.getElementById("body");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const random = document.getElementById("random");

green.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});

blue.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

red.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

random.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = "#" + randomColor;
});
