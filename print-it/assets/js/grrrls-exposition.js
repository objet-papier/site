// italics
const ital = document.querySelectorAll(".ital");

for (let i = 0; i < ital.length; i++) {
  const italElement = ital[i];
  italElement.innerHTML = '<span>' + italElement.innerHTML.split('').join('</span><span>') + '</span>';
}


// Grrrls exposition content only

const grrrlsPrintButton = document.querySelector('#print-button-grrrls-only');

grrrlsPrintButton.addEventListener('click', function(){
  window.print();
})


// Random function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// RANDOM TITLE POSITIONNING
function getTitleWidth(titleSource) {
  const titleLength = titleSource.innerHTML.length;
  const titleWidth = titleLength * 7;
  return titleWidth;
}
// Title 1
const titleElements = document.querySelectorAll('.title-1-item');

for (let i = 0; i < titleElements.length; i++) {
  const titleElement = titleElements[i];
  const titleWidth = getTitleWidth(titleElement);
  const titleFreeSpace = 84 - titleWidth;
  
  const randomTitlePosition = getRandomInt(titleFreeSpace);

  titleElement.style.textIndent = randomTitlePosition + "mm"
}