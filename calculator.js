
const display = document.getElementById("display");

// Number and operator buttons
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.value;
    });
});

// Clear button
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});

// Delete button
document.getElementById("delete").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

// Equal button
document.getElementById("equal").addEventListener("click", () => {
    try {
        display.value = Function(
            '"use strict"; return (' + display.value + ')'
        )();
    } catch {
        display.value = "Error";
    }
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    const allowed = "0123456789+-*/.";

    if (allowed.includes(e.key)) {
        display.value += e.key;
    }

    if (e.key === "Enter") {
        try {
            display.value = Function(
                '"use strict"; return (' + display.value + ')'
            )();
        } catch {
            display.value = "Error";
        }
    }

    if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (e.key === "Escape") {
        display.value = "";
    }
});