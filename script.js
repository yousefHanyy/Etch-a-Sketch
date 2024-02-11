/**
 * !When the color button is clicked:
 *  !|1-The button will have an active class since it has been clicked.
 *          *|By default the active class when the website loads is color mode.
 *          *|When another button is clicked the active class from the previous button is removed and added to the clicked one.
 *          !(THE CLEAR BUTTON SHOULDN'T GET ANY ACTIVE CLASS!)
 *              *|1-Add an eventlistener to the buttons to check if they are being clicked.
 *              *|2-Check if there is an active class on any other button than the clicked one. If there was already an active class on it, make sure when clicking any other one the active class is removed from the previous button and given to the recently clicked one.
 *todo  |2-Based on the color we choose using the color picker, there should be an active class corresponding to that color so we can later use it to color the canvas.
 *todo  |3-If the eraser button was clicked and then the color mode was clicked back on at any certain point, the color corresponding to the color picker value should still be availble to use on the canvas (without needing to pick it again).
 *
 */

/**
 *! Adjusting the slider should change the following:
 *!  |1-The no. displayed above the slider (16x16).
 **     |The 'sizeSlider' should be in relation to the 'sizeValue'.
 **       |1-Define a constant for the sizeSlider and sizeValue elements.
 **       |2-Get the value of the sizeSlider depending on its position.
 **       |3-Change the displayed number by altering the sizeValue element depending on the new value of the sizeSlider.
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
 *todo  |1-Clicking the eraser button should change the value of the color that we will be using on the canvas to 'white'.
 */
const canvas = document.querySelector("#canvas");
const colorBtn = document.querySelector("#colorBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const clearBtn = document.querySelector("#clearBtn");
const colorPicker = document.querySelector("#colorPicker");
const defaultColor = colorPicker.value;
const sizeSlider = document.querySelector("#sizeSlider");
const sizeValue = document.querySelector("#sizeValue");

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

sizeSlider.oninput = () => getSliderValue();
function getSliderValue() {
  let value = sizeSlider.value;
  sizeValue.innerHTML = `${value} x ${value}`;
}

colorPicker.oninput = () => getColorValue();
function getColorValue() {
  let pickedColor = colorPicker.value;
}

clearBtn.addEventListener("click", clearCanvas);
function clearCanvas() {
  canvas.style.backgroundColor = "white";
}
