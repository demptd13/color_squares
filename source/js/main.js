const squareBlock = document.querySelector(".squares__block")
const totalSquares = 1664;

for (i = 0; i < totalSquares; i++) {
  squareBlock.insertAdjacentHTML("afterbegin", `<div class="square"></div>`)
}

const titleBlock = document.querySelector(".header__title");
const totalLetters = 13;

for (i = 0; i < totalLetters; i++) {
  if (i < 6) {
    titleBlock.firstElementChild.insertAdjacentHTML("afterbegin", `<span></span>`)
  }
  else {
    titleBlock.lastElementChild.insertAdjacentHTML("afterbegin", `<span></span>`)
  }
}

const title = document.querySelectorAll("span");
const textArray = Array.from("COLOR SQUARES");

for (i = 0; i < textArray.length; i++) {
  let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  title[i].textContent += String(textArray[i]);
  title[i].style.color = color;
  title[i].style.textShadow = "0px 0px 8px" + color;
}

const allSquares = document.querySelectorAll(".square");

for (i = 0; i < allSquares.length; i++) {
  allSquares[i].onmouseover = function mouseOver () {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = color;
    this.style.border = "1px solid" + color;
    this.style.boxShadow = "0 0 10px" + color;
    this.style.transition = "none";
  }
  allSquares[i].onmouseout = function mouseOut () {
    this.style.backgroundColor = "transparent";
    this.style.border = "1px solid rgb(54, 54, 54)";
    this.style.transition = "all 3s ease-out";
    this.style.boxShadow = "none";
  };
};

