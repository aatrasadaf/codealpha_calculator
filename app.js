
let displayinput = document.querySelector("#display");

function appendvalue(val) {
    displayinput.value += val;
}

function clearDisplay() {
    displayinput.value = "";
}

function calculate() {
    try {
        displayinput.value = eval(displayinput.value);
    } catch {
        displayinput.value = 'Error';
    }
}

/* -----------------------------
   KEYBOARD SUPPORT
--------------------------------*/
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // 1️⃣ Allow numbers 0-9
    if (!isNaN(key)) {
        appendvalue(key);
    }

    // 2️⃣ Allow operators + - * / %
    if (["+", "-", "*", "/", "%"].includes(key)) {
        appendvalue(key);
    }

    // 3️⃣ Decimal point
    if (key === ".") {
        appendvalue(".");
    }

    // 4️⃣ Enter = Calculate
    if (key === "Enter") {
        calculate();
    }

    // 5️⃣ Backspace = Delete last character
    if (key === "Backspace") {
        displayinput.value = displayinput.value.slice(0, -1);
    }

    // 6️⃣ Escape = AC
    if (key === "Escape") {
        clearDisplay();
    }

    // Prevent default browser behavior (important)
    event.preventDefault();
});
