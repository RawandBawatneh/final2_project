let showBtn = document.getElementById("showCreate");
let box = document.getElementById("createBox");
let createBtn = document.getElementById("createBtn");
let titleInput = document.getElementById("setTitle");
let output = document.getElementById("output");

showBtn.onclick = () => {
  box.style.display = "block";
};

createBtn.onclick = () => {
  let title = titleInput.value.trim();
  if (title === "") return;
  let div = document.createElement("div");
  div.textContent = "Set: " + title;
  output.appendChild(div);
  titleInput.value = "";
};

export function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
