


// Italics
const ital = document.querySelectorAll(".ital");

for (let i = 0; i < ital.length; i++) {
  const italElement = ital[i];
  italElement.innerHTML = '<span>' + italElement.innerHTML.split('').join('</span><span>') + '</span>';
}


// Title random positioning
const titleElements = document.querySelectorAll('.title-1-item');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < titleElements.length; i++) {
  const titleElement = titleElements[i];
  const titleLength = titleElement.innerHTML.length;
  const titleWidth = titleLength * 7;
  const titleFreeSpace = 84 - titleWidth;
  
  const randomTitlePosition = getRandomInt(titleFreeSpace);

  titleElement.style.textIndent = randomTitlePosition + "mm"
}


// Print function
const printButton = document.querySelector('#print-button');

const nameInput = document.querySelector('#printer-name-input');
const numberInput = document.querySelector('#print-number-input');

const placeToAddName = document.querySelectorAll('.name-to-append');
const placeToAddNumber = document.querySelectorAll('.number-to-append');

function appendName() {
  const printerName = nameInput.value;
  for (let i = 0; i < placeToAddName.length; i++) {
    const appendName = placeToAddName[i];
    appendName.innerHTML = printerName;
  }
}

function appendNumber() {
  const printNumber = numberInput.value;
  for (let i = 0; i < placeToAddNumber.length; i++) {
    const appendNumber = placeToAddNumber[i];
    appendNumber.innerHTML = printNumber;
  }
}

function clickToPrint() {
  appendName();
  appendNumber();
  window.print();
}

function keysToPrint() {
  appendName();
  appendNumber();
}

window.addEventListener('beforeprint', keysToPrint, false);
printButton.addEventListener('click', clickToPrint, false);


// Skulls

const skulls = document.querySelectorAll('.skull-vector');

for (let i = 0; i < skulls.length; i++) {
  const skull = skulls[i];
  
  const randomSkullPositionX = getRandomInt(267);
  const randomSkullPositionY = getRandomInt(175);
  const randomSkullRotation = getRandomArbitrary(-40, 40);
  const randomSkullScale = getRandomArbitrary(80, 130)/100;

  skull.style.left = randomSkullPositionX + "mm";
  skull.style.top = randomSkullPositionY + "mm";
  skull.style.transform = "rotate(" + randomSkullRotation + "deg) scale(" + randomSkullScale + ")";
}