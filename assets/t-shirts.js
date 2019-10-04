
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

// Logo hide on load
document.addEventListener("DOMContentLoaded",function(){
  const logoList = [1,2,3,4,5,6]
  const logoSortedList = getRandomFromList(logoList, 1);

  logoSortedList.forEach(function(logoArray) {
    const allLogoItems = document.querySelectorAll('.logo');
    for (let i = 0; i < allLogoItems.length; i++) {
      const logoItem = allLogoItems[i];
      const itemID = logoItem.getAttribute('id');
      const IDFromArray = "logo" + logoArray;

      if (itemID === IDFromArray) {
        logoItem.classList.add('active');
      } 
    }
  });
  
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const logoVersions = document.querySelectorAll(".logo");
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

for (let i = 0; i < logoVersions.length; i++) {
  const logoVersion = logoVersions[i];
  const randomRotation = getRandomArbitrary(-30, 30);
  logoVersion.style.transform = "rotate(" + randomRotation + "deg)";

  const maxHorizontalPosition = viewportWidth - 350;
  const maxVerticalPosition = viewportHeight - 350;
  const randomHorizontal = getRandomInt(maxHorizontalPosition);
  const randomVertical = getRandomInt(maxVerticalPosition);

  logoVersion.style.top = "" + randomVertical + "px";
  logoVersion.style.left = "" + randomHorizontal + "px";
}