// Browser detection
const is_explorer= typeof document !== 'undefined' && !!document.documentMode && !isEdge;
const is_firefox = typeof window.InstallTrigger !== 'undefined';
const is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
const is_chrome = !!window.chrome && !is_opera;

function is_touch_device() {
  return (('ontouchstart' in window)
       || (navigator.MaxTouchPoints > 0)
       || (navigator.msMaxTouchPoints > 0));
}

const screenContentWrapper = document.querySelectorAll('.screen-content');
const printContentWrapper = document.querySelectorAll('.print-content');
const chromeWarnings = document.querySelectorAll('.not-chrome-warning');
const touchWarnings = document.querySelectorAll('.touch-warning');

function hideContent() {
  for (let i = 0; i < screenContentWrapper.length; i++) {
    const screenContent = screenContentWrapper[i];
    screenContent.classList.add('hidden');
  }
  for (let j = 0; j < printContentWrapper.length; j++) {
    const printContent = printContentWrapper[j];
    printContent.classList.add('hidden');
  }
}


if (is_explorer && !is_touch_device()
    || is_firefox && !is_touch_device()
    || is_safari && !is_touch_device()
    || is_opera && !is_touch_device()) {
  hideContent();
  for (let k = 0; k < chromeWarnings.length; k++) {
    const chromeWarning = chromeWarnings[k];
    chromeWarning.classList.add('visible');
  }
}

if (is_touch_device()) {
  hideContent();
  
  for (let l = 0; l < touchWarnings.length; l++) {
    const touchWarning = touchWarnings[l];
    touchWarning.classList.add('visible');
  }
}





// Italics
const ital = document.querySelectorAll(".ital");

for (let i = 0; i < ital.length; i++) {
  const italElement = ital[i];
  italElement.innerHTML = '<span>' + italElement.innerHTML.split('').join('</span><span>') + '</span>';
}



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
// Title full page
const titleFpElements = document.querySelectorAll('.title-fp-item');

for (let i = 0; i < titleFpElements.length; i++) {
  const titleFpElement = titleFpElements[i];
  const titleFpWidth = getTitleWidth(titleFpElement);
  const titleFpFreeSpace = 120 - titleFpWidth;
  
  const randomTitleFpHorizontal = getRandomInt(titleFpFreeSpace);
  const randomTitleFpVertical = getRandomInt(170);

  titleFpElement.style.textIndent = randomTitleFpHorizontal + "mm";
  titleFpElement.style.top = randomTitleFpVertical + "mm";
}
// Subtitle full page
const subtitleFpElements = document.querySelectorAll('.subtitle-fp-item');

for (let i = 0; i < subtitleFpElements.length; i++) {
  const subtitleFpElement = subtitleFpElements[i];
  
  const randomSubtitleFpHorizontal = getRandomInt(63);
  subtitleFpElement.style.left = randomSubtitleFpHorizontal + "mm";

  if (subtitleFpElement.classList.contains('title-top')) {
    const randomSubtitleFpVertical = getRandomInt(50);
    subtitleFpElement.style.top = randomSubtitleFpVertical + "mm";
  } else {
    const randomSubtitleFpVertical = getRandomArbitrary(90,145);
    subtitleFpElement.style.top = randomSubtitleFpVertical + "mm";
  }  
}





// Annotation random rotations
const annotationsTop = document.querySelectorAll('.annotation-top');
const annotationsBottom = document.querySelectorAll('.annotation-bottom');


for (let i = 0; i < annotationsTop.length; i++) {
  const annotationTop = annotationsTop[i];
  const getRandomAnnotationRotation = getRandomArbitrary(-7, 7);
  annotationTop.style.transform = "rotate(" + getRandomAnnotationRotation + "deg) translateY(-100%)";
}

for (let i = 0; i < annotationsBottom.length; i++) {
  const annotationBottom = annotationsBottom[i];
  const getRandomAnnotationRotation = getRandomArbitrary(-7, 7);
  annotationBottom.style.transform = "rotate(" + getRandomAnnotationRotation + "deg) translateY(0.8cm)";
}



// Input auto tab

function autotab(current,to){
  if (current.getAttribute && 
    current.value.length==current.getAttribute("maxlength")) {
      to.focus() 
      }
}

const numberInputs = document.querySelectorAll('.print-number-input');
for (let i = 0; i < numberInputs.length; i++) {
  const numberInput = numberInputs[i];
  numberInput.addEventListener('focus', function() {
    this.value = "";
  })
}



// Print function
const printButtons = document.querySelectorAll('.print-button');

const firstnameInput = document.querySelector('#printer-firstname-input');
const nameInput = document.querySelector('#printer-name-input');

const numberInputOne = document.querySelector('#print-number-input-one');
const numberInputTwo = document.querySelector('#print-number-input-two');
const numberInputThree = document.querySelector('#print-number-input-three');

const placeToAddName = document.querySelectorAll('.name-to-append');
const placeToAddNumber = document.querySelectorAll('.number-to-append');

const placesToAddDate = document.querySelectorAll('.date-to-append');

function appendName() {
  const printerFirstname = firstnameInput.value;
  const printerName = nameInput.value;
  for (let i = 0; i < placeToAddName.length; i++) {
    const appendName = placeToAddName[i];
    appendName.innerHTML = printerFirstname + " " + printerName;
  }
}

function appendNumber() {
  const printNumberOne = numberInputOne.value;
  const printNumberTwo = numberInputTwo.value;
  const printNumberThree = numberInputThree.value;
  for (let i = 0; i < placeToAddNumber.length; i++) {
    const appendNumber = placeToAddNumber[i];
    appendNumber.innerHTML = printNumberOne + "." + printNumberTwo + "." + printNumberThree;
  }
}


// const dateNow = new Date(Date.now()).toLocaleString();
// console.log( dateNow);
function appendDate() {
  for (let i = 0; i < placesToAddDate.length; i++) {
    const placeToAddDate = placesToAddDate[i];
    placeToAddDate.innerHTML = new Date(Date.now()).toLocaleString('en-GB'); 
  }
}


function appendStuff() {
  appendName();
  appendNumber();
  appendDate();
}

function clickToPrint() {
  appendStuff();
  window.print();
}

function keysToPrint() {
  appendStuff();
}

window.addEventListener('beforeprint', keysToPrint, false);

for (let i = 0; i < printButtons.length; i++) {
  const printButton = printButtons[i];
  printButton.addEventListener('click', clickToPrint, false); 
}



// Skulls

const randomIcons = document.querySelectorAll('.random-icon');

for (let i = 0; i < randomIcons.length; i++) {
  const icon = randomIcons[i];
  
  const randomIconPositionX = getRandomInt(267);
  const randomIconPositionY = getRandomInt(175);
  const randomIconRotation = getRandomArbitrary(-40, 40);
  const randomIconScale = getRandomArbitrary(80, 130)/100;

  icon.style.left = randomIconPositionX + "mm";
  icon.style.top = randomIconPositionY + "mm";
  icon.style.transform = "rotate(" + randomIconRotation + "deg) scale(" + randomIconScale + ")";
}





// Randomizing content > found code here https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array

function getRandomFromList(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// TOP 10

document.addEventListener("DOMContentLoaded",function(){
  const topList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  const topSortedList = getRandomFromList(topList, 10);

  topSortedList.forEach(function(topArray) {
    const allTopItems = document.querySelectorAll('.top-item');
    for (let i = 0; i < allTopItems.length; i++) {
      const topItem = allTopItems[i];
      const itemID = topItem.getAttribute('id');
      const IDFromArray = "top" + topArray;

      if (itemID === IDFromArray) {
        topItem.classList.add('active');
        topItem.classList.remove('remove');
      } 
    }
  });
  
  function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }
  
  removeElementsByClass('remove');
});


// Grrrls content

document.addEventListener("DOMContentLoaded", function() {
  const randomGrrrlsInteger = getRandomArbitrary(1,24);
  
  const allGrrrlsItems = document.querySelectorAll('.grrrls-content');

  for (let i = 0; i < allGrrrlsItems.length; i++) {
    const grrrlsItem = allGrrrlsItems[i];
    const grrrlsItemID = grrrlsItem.getAttribute('id');
    
    if (grrrlsItemID === randomGrrrlsInteger.toString()) {
      grrrlsItem.classList.add('active');
    } 
    
  }

})