const email = document.querySelector("#email");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const inputs = document.querySelectorAll("input")

const signupForm = document.querySelector(".signup__form")

signupForm.addEventListener("submit", (e) => {
    inputs.forEach((input) => {

        if (input.value === "" || input.value == null) {
            e.preventDefault();

            if (input.parentElement.classList.contains("error")) return

            const errorMsg = inputErrorState(input);

            errorMsg.textContent = `${input.placeholder} cannot be empty`;

            input.insertAdjacentElement("afterend", errorMsg);
        } else {
            if (input.parentElement.classList.contains("error")) {
                input.parentElement.classList.remove("error");
                input.nextElementSibling.remove();
            }
            if (input.id === "email" && !email.value.match(emailRegex)) {
                e.preventDefault();
                const errorMsg = inputErrorState(input);
                errorMsg.textContent = "Looks like this is not an email";
                input.insertAdjacentElement("afterend", errorMsg);
            }
        }

    })
})

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.parentElement.classList.contains("error")) {
        input.parentElement.classList.remove("error");
        input.nextElementSibling.remove();
        }
    })
})

const inputErrorState = function(input) {
    input.parentElement.classList.add("error");
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-msg");
    return errorMsg
}