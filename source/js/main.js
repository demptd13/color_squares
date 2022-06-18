let title = document.querySelectorAll("span");
let textArray = Array.from("COLOR SQUARES");

for (i = 0; i < textArray.length; i++) {
  let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  title[i].textContent += String(textArray[i]);
  title[i].style.color = color;
  title[i].style.textShadow = "1px 1px 1px" + color;
  title[5].style.marginLeft = "40px";
}

let allSquares = document.querySelectorAll(".square");

for (i = 0; i < allSquares.length; i++) {
  allSquares[i].onmouseover = function () {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = color;
    this.style.border = "1px solid" + color;
  }
  allSquares[i].onmouseout = function () {
    this.style.backgroundColor = "transparent";
    this.style.border = "1px solid rgb(54, 54, 54)";
    this.style.transition = "all 3s ease-out";
  };
}

