/**
 * !When the color button is clicked:
 *  todo|1-The button will have an active class since it has been clicked.
 *          *|By default the active class when the website loads is color mode.
 *          *|When another button is clicked the active class from the previous button is removed and added to the clicked one.
 *          !(THE CLEAR BUTTON SHOULDN'T GET ANY ACTIVE CLASS!)
 *              *|1-Add an eventlistener to the buttons to check if they are being clicked.
 *              *|2-Check if there is an active class on any other button than the clicked one. If there was already an active class on it, make sure when clicking any other one the active class is removed from the previous button and given to the recently clicked one.
 *  todo|2-Based on the color we choose using the color picker, there should be an active class corresponding to that color so we can later use it to color the canvas.
 *
 */
const colorBtn = document.querySelector("#colorBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const clearBtn = document.querySelector("#clearBtn");
function eraserBtnCheck() {
  this.classList.add("active");
  this.previousElementSibling.classList.remove("active");
}
function colorBtnCheck() {
  this.classList.add("active");
  this.nextElementSibling.classList.remove("active");
}
colorBtn.addEventListener("click", colorBtnCheck);
eraserBtn.addEventListener("click", eraserBtnCheck);
