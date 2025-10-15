window.onload = function () {
  const inputEl = document.getElementById("input");
  const convertBtn = document.getElementById("convertBtn");
  const resultEl = document.getElementById("result");

  function convert() {
    const inputValue = parseFloat(inputEl.value);

    // check if in is a number
    if (isNaN(inputValue)) {
      resultEl.innerText = "Please enter a valid number.";
      return;
    }

    // find selected unit
    const unitRadio = document.querySelector('input[name="unit"]:checked');
    if (!unitRadio) {
      resultEl.innerText = "Please select a unit.";
      return;
    }

    let output;
    let message;

    if (unitRadio.value === "centimeters") {
      // in to cm
      output = inputValue * 2.54;
      message = `${inputValue} inches = ${output.toFixed(2)} centimeters`;
    } else {
      // cm to in
      output = inputValue / 2.54;
      message = `${inputValue} centimeters = ${output.toFixed(2)} inches`;
    }

    // display on page
    resultEl.innerText = message;
  }

  // run conversion when button is clicked
  convertBtn.addEventListener("click", convert);
};
