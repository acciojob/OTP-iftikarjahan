//your JS code here. If required.
let inputs = document.querySelectorAll(".code");
inputs.forEach((input, idx) => {
    input.addEventListener("keyup", () => {
        if (input.value && idx < inputs.length - 1) {
            inputs[idx + 1].focus();
        }
    });
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && idx > 0) {
            inputs[idx - 1].focus();
        }
    });
});
