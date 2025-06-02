let validador = {
  handleSubmit: (event) => {
    event.preventDefault();
    let send = false;

    let inputs = form.querySelectorAll("input");

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
};

let form = document.querySelector(".validador");
form.addEventListener("submit", validador.handleSubmit);
