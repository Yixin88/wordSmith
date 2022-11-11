const el = document.querySelector("#words");

function setColor() {
  const input = document.querySelectorAll("input")[0];
  el.style.color = input.value;
}

function toggleUnderline() {
    el.classList.toggle("underline");
  }