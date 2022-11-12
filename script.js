const el = document.querySelector("#words");

function checkEmpty() {
    if (el.value === "") {
        return false;
    };
    return true;
}

function checkToggle(className, childrenName) {
    if (el.classList.contains(className)) {
        document.querySelector(".button_Container").children[childrenName].style.backgroundColor = "darkBlue";
    } else {
        document.querySelector(".button_Container").children[childrenName].style.backgroundColor = "";
    }
}

function setColor() {
    const input = document.querySelectorAll("input")[0];
    el.style.color = input.value;
}

function toggleUnderline() {
    if (checkEmpty()) {
        el.classList.toggle("underline");
        checkToggle("underline", 0);
    }
}

function toggleItalic() {
    if (checkEmpty()) {
        el.classList.toggle("italic");
        checkToggle("italic", 1);
    }
}

function toggleBold() {
    if (checkEmpty()) {
        el.classList.toggle("bold");
        checkToggle("bold", 2);
    }
}

function toggleMonospace() {
    if (checkEmpty()) {
        el.classList.toggle("mono");
        checkToggle("mono", 3);
    }
}

function removeFormat() {
    el.classList.remove("underline", "italic", "bold", "mono");
    el.style.color = "black";
    document.querySelectorAll(".button_Container button").forEach(btn => {
        btn.style.backgroundColor = "";
    })
}

function clearInput() {
    el.value = "";
}