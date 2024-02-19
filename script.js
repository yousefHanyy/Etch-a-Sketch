/**
 * !When the color button is clicked:
 *  !|1-The button will have an active class since it has been clicked.
 *          *|By default the active class when the website loads is color mode.
 *          *|When another button is clicked the active class from the previous button is removed and added to the clicked one.
 *          !(THE CLEAR BUTTON SHOULDN'T GET ANY ACTIVE CLASS!)
 *              *|1-Add an eventlistener to the buttons to check if they are being clicked.
 *              *|2-Check if there is an active class on any other button than the clicked one. If there was already an active class on it, make sure when clicking any other one the active class is removed from the previous button and given to the recently clicked one.
 **  |2-Based on the color we choose using the color picker, there should be an active class corresponding to that color so we can later use it to color the canvas.
 **         |1_ First add an eventlistener to listen to the mouseover event to each smallBox to know which box we are on.
 **         |2_ Then check which mode we are in (color mode or eraser mode).
 **         |3_ If it is color mode we should get the colorPicked value.
 **         |4_ Then check if the mousedown event is being triggered or not. If it is being triggered set the corresponding box background color to the colorPicked value.
 **  |3-If the eraser button was clicked and then the color mode was clicked back on at any certain point, the color corresponding to the color picker value should still be availble to use on the canvas (without needing to pick it again).
 *
 */

/**
 *! Adjusting the slider should change the following:
 *!  |1-The no. displayed above the slider (16x16).
 **     |The 'sizeSlider' should be in relation to the 'sizeValue'.
 **       |1-Define a constant for the sizeSlider and sizeValue elements.
 **       |2-Get the value of the sizeSlider depending on its position.
 **       |3-Change the displayed number by altering the sizeValue element depending on the new value of the sizeSlider.
 **  |Changing the slider value should reset the canvas to an all white background.
 *!  |2-The no. of boxes used in the canvas should be the product of the numbers chosen.
 */

/**
 *! Picking a color from the color picker:
 *!  |1-We should get the value of the picked color.
 **    |-Select the colorpicker using a querySelector.
 **    |-Get the hex value of the picked color to be used later in the canvas.
 **       |-Each time the color changes the value should be changed.
 */

/**
 *! Clicking the clear button should make the canvas white.
 */

/**
 *! Clicking the eraser button:
 *!  |This should be done after the color mode button has some functionality added.
 **  |1-Clicking the eraser button should change the value of the color that we will be using on the canvas to 'white'.
 */

/**
 *! Adding pixels (boxes) to the canvas based on the specified widthxheight:
 **    |1-Canvas display mode should be flex.
 **    |2-To add boxes inside the canvas based on widthxheight:
 **         |1_ Based on the widthxheight value a series of divs or boxes sould be created in the canvas filling it up.
 **             |1_ First we get the sliderValue to create rows based on it using an outer loop.
 **             |2_ Nested in the previous outer loop we need to make smallBoxes that have a width and height of 'container width / sliderValue'.
 */

/**
 *! When the slider value is changed:
 **       |1- Canvas should be cleared.
 **       |2- Boxes should have new dimensions based on the new value.
 */
window.onload = () => {
  setupCanvas(defaultSize);
};

const defaultSize = 16;

const canvas = document.querySelector("#canvas");
const colorBtn = document.querySelector("#colorBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const clearBtn = document.querySelector("#clearBtn");
const colorPicker = document.querySelector("#colorPicker");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeTextValue = document.querySelector("#sizeValue");
let pickedColor = colorPicker.value;
let sliderValue;
let smallBoxSize;

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

sizeSlider.oninput = () => {
  sliderValue = sizeSlider.value;
  getSliderValue();
  clearCanvas();
  setupCanvas();
};
function getSliderValue() {
  let value = sliderValue;
  sizeTextValue.innerHTML = `${value} x ${value}`;
}

colorPicker.oninput = () => getColorValue();
function getColorValue() {
  pickedColor = colorPicker.value;
}

clearBtn.addEventListener("click", () => {
  let allDivs = canvas.querySelectorAll("div");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].style.backgroundColor = "white";
  }
});

function clearCanvas() {
  canvas.innerHTML = "";
}

function setupCanvas(sliderValue) {
  sliderValue = sizeSlider.value;
  smallBoxSize = 500 / sliderValue;
  //?   Fixed a problem where you couldn't use the variable smallBoxSize to be assigned to the width property as it was just a number with no units of measurement.
  smallBoxSize += "px";
  for (let i = 0; i < sliderValue; i++) {
    const row = document.createElement("div");
    for (let i = 0; i < sliderValue; i++) {
      const boxes = document.createElement("div");
      boxes.style.width = smallBoxSize;
      boxes.style.height = smallBoxSize;
      boxes.addEventListener("mouseover", changeColor);
      boxes.addEventListener("mousedown", changeColor);
      row.appendChild(boxes);
    }
    canvas.appendChild(row);
  }
}
canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
});
let mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};
function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) {
    return;
  }
  if (colorBtn.classList.contains("active")) {
    e.target.style.backgroundColor = pickedColor;
  } else if (eraserBtn.classList.contains("active")) {
    e.target.style.backgroundColor = "#ffffff";
  }
}
