function press(val) {
  document.getElementById("display").value += val;
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
