/* eslint-disable */
import "bootstrap";
import "./style.css";

let cardNum = num => {
  if (num >= 2 && num <= 10) {
    return num;
  } else {
    switch (num) {
      case 1:
        return "A";
        break;
      case 11:
        return "J";
        break;
      case 12:
        return "Q";
        break;
      case 13:
        return "K";
        break;
    }
  }
};

let randomType = () => {
  let type = Math.floor(Math.random() * 4) + 1;
  switch (type) {
    case 1:
      return "♦";
      break;
    case 2:
      return "♥";
      break;
    case 3:
      return "♠";
      break;
    case 4:
      return "♣";
      break;
  }
};

let randomNumberGenerator = () => {
  let num = Math.floor(Math.random() * 13) + 1;
  return num;
};

window.newCard = function newCard() {
  document.getElementById("card-number").innerHTML = cardNum(
    randomNumberGenerator()
  );
  let randomtype = randomType();
  let suitUp = document.getElementById("typeUp");
  let suitDown = document.getElementById("typeDown");

  if (randomtype === "♦" || randomtype === "♥") {
    suitUp.innerHTML = randomtype;
    suitDown.innerHTML = randomtype;
    suitUp.style.color = "red";
    suitDown.style.color = "red";
  } else {
    suitUp.innerHTML = randomtype;
    suitDown.innerHTML = randomtype;
  }
};
