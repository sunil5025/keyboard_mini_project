const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (press) {
    console.log(press);
    console.log(press.target);
    if (press.target.id === "grey") {
      body.style.backgroundColor = press.target.id;
    }
    switch (press.target.id) {
      case "yellow":
        body.style.backgroundColor = press.target.id;
        break;
      case "blue":
        body.style.backgroundColor = press.target.id;
        break;
      case "white":
        body.style.backgroundColor = press.target.id;
        break;
      default:
        console.log("Color is not exist");
    }
  });
});
