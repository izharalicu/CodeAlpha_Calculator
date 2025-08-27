let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("clear")) {
      display.value = "";
    } 
    else if (button.classList.contains("equals")) {
      try {
        display.value = eval(
          display.value.replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-")
        );
      } catch {
        display.value = "Error";
      }
    } 
    else {
      display.value += value;
    }
  });
});

// ✅ Keyboard support
document.addEventListener("keydown", (event) => {
  if (event.key >= 0 && event.key <= 9 || event.key === ".") {
    display.value += event.key;
  } 
  else if (["+", "-", "*", "/"].includes(event.key)) {
    display.value += event.key;
  } 
  else if (event.key === ("Enter")) {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } 
  else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } 
  else if (event.key.toLowerCase() === "c") {
    display.value = "";
  }
});
