document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".bets-area-wrapper").classList.add("gridView");
  document.querySelector(".bets-area-wrapper").classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".bets-area-wrapper").classList.remove("gridView");
  document.querySelector(".bets-area-wrapper").classList.add("tableView");
});

var modeSwitch = document.querySelector(".mode-switch");
modeSwitch.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
  modeSwitch.classList.toggle("active");
});
// the tags part

const input = document.querySelector("#tag-input");
const form = document.querySelector("#tagForm");
const output = document.querySelector(".tags");
const max = document.querySelector(".max");

function outputTag() {
  const tag = `
  <div class="tagWrapper">
    <div class="tag">
    <b>Hello</b>
    <span class="remove-btn"> x </span>
    </div>
    </div>
  `;
  output.innerHTML += tag;
  input.value = "";
}
tagForm.addEventListener("submit", (e) => {
  if (input.value === "") {
    e.preventDefault();
  } else {
    outputTag();
  }
  e.preventDefault();
});
input.addEventListener("input", (e) => {
  const rmwhitespace = input.value.replace(/\s/g, "");
  input.value = rmwhitespace.replace(/\s[^a-zA-Z0-9]/g, "");
});
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
    input.disabled = false;
  }
});
