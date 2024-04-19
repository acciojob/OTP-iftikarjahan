let inputs = document.querySelectorAll(".otp");
inputs.forEach((input, idx) => {
    input.addEventListener("input", () => {
        if (input.value && idx < inputs.length - 1) {
            inputs[idx + 1].focus();
        }
    });
    input.addEventListener("keyup", (e) => {
        if (e.key === "Backspace" && idx > 0) {
            inputs[idx - 1].focus();
        }
    });
});
