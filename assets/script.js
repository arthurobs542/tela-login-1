//validador
let validador = {
  handleSubmit: (event) => {
    event.preventDefault();
    let send = true;
    //criar para selcionar os inputs
    let inputs = form.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = validador.checkInput(input);
      if (check !== true) {
        send = false;
        validador.showError(input, check);
      }
    }
    if (send) {
      form.submit();
    }
  },
  checkInput: (input) => {
    let rules = input.getAttribute("data-rules");

    if (rules !== null) {
      rules = rules.split("|");
      for (let k in rules) {
        let rDetails = rules[k].split("=");
        switch (rDetails[0]) {
          case "required":
            if (input.value == "") {
              return "campo obrigatorio";
            }
            break;
        }
      }
    }
    return true;
  },

  showError: (input, error) => {
    input.style.borderColor = "#ff0000";
    let errorElement = document.createElement("div");
    errorElement.classList.add("error");
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.ElementSibling);
  },
};
//criar primeiro
let form = document.querySelector(".validador");
form.addEventListener("submit", validador.handleSubmit);
