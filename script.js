const el = document.querySelector("#words");

function checkEmpty() {
    if (el.value === "") {
        return false;
    };
    return true;
}

function setColor() {
    const input = document.querySelectorAll("input")[0];
    el.style.color = input.value;
}

function toggleUnderline() {
    if (checkEmpty()) {
        el.classList.toggle("underline");
    }
}

function toggleItalic() {
    if (checkEmpty()) {
        el.classList.toggle("italic");
    }
}

function toggleBold() {
    if (checkEmpty()) {
        el.classList.toggle("bold");
    }
}

function toggleMonospace() {
    if (checkEmpty()) {
        el.classList.toggle("mono");
    }
}

function removeFormat() {
    el.classList.remove("underline", "italic", "bold", "mono");
    el.style.color = "black";
}

function clearInput() {
    el.value = "";
}