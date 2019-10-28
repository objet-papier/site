const pageBody = document.body;
const siteContainer = document.querySelector('.snap-it-specimen-container');

function setDarkTheme() {
  pageBody.classList.remove('light-theme');
  pageBody.classList.add('dark-theme');
}
function setLightTheme() {
  pageBody.classList.remove('dark-theme');
  pageBody.classList.add('light-theme');
}


const lightThemeButton = document.querySelector('.light-theme-button');
const darkThemeButton = document.querySelector('.dark-theme-button');

lightThemeButton.addEventListener('click', setLightTheme);
darkThemeButton.addEventListener('click', setDarkTheme);




// Italics
const ital = document.querySelectorAll(".ital");

for (let i = 0; i < ital.length; i++) {
  const italElement = ital[i];
  italElement.innerHTML = '<span class="italic-letter">' + italElement.innerHTML.split('').join('</span><span class="italic-letter">') + '</span>';
}

const italLetters = document.querySelectorAll(".italic-letter");

for (let i = 0; i < italLetters.length; i++) {
  const italLetter = italLetters[i];
  italLetter.addEventListener('mouseenter', function(e){
    italLetter.classList.add('animated');
    setTimeout(function(){
      italLetter.classList.remove('animated');
    }, 1000);
  })
}




// glyph list

const glyphList = document.querySelector(".glyph-list-hidden");

const glyphString = glyphList.innerHTML;
const outputContainer = document.querySelector(".glyph-output");

for(var i = 0; i < glyphString.length  ; i++){
  finalOutput = '<div class="glyph-wrapper"><p>' + glyphString.charAt(i) + '</p><div class="glyph-highlight">' + glyphString.charAt(i) + '</div></div>'; 
  outputContainer.insertAdjacentHTML( 'beforeend', finalOutput );
}





//animations

var printerAnimData = {
  container: document.getElementById('printer-animation'),
  animType: 'svg',
  loop: true,
  prerender: true,
  autoplay: true,
  path: 'printer.json',
};

var printerAnim = bodymovin.loadAnimation(printerAnimData);

printerAnim.setSubframe(false)



// Editable text

const editableSectionWrapper = document.querySelector(".test-section");
const editableSection = document.querySelector("#editable-section");

const fontSizeDial = document.querySelector("#font-size-dial");
const letterSpacingDial = document.querySelector("#letter-spacing-dial");
const lineHeightDial = document.querySelector("#line-height-dial");

editableSectionWrapper.addEventListener("click", function() {
  editableSection.focus();
});

fontSizeDial.addEventListener("input", function(){
  editableSection.style.fontSize = fontSizeDial.value + "px";
})

letterSpacingDial.addEventListener("input", function(){
  editableSection.style.letterSpacing = letterSpacingDial.value + "px";
})

lineHeightDial.addEventListener("input", function(){
  editableSection.style.lineHeight = lineHeightDial.value;
})