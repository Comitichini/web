var path_PixelArts = "../Images/PixelArts/Animated (#).gif";
var path_Backgrounds = "../Images/Backgrounds/Wallpaper (#).jpg";
var path_Photos = "../Images/Photos/Photo (#).jpg";
var ind_bg = 0;
//document.addEventListener('DOMContentLoaded', () => {document.querySelector('pixelArt').src = path_PixelArts.replace("#",getRandomInt(1,5));});

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled +1) + minCeiled);
}

function LoadRandom_PixelArt() {
  pixelArt.src = path_PixelArts.replace("#",getRandomInt(1,5));
}

function Change_Backgrounds() {
  ind_bg=ind_bg>=23?0:ind_bg++;
  backgroundCollection.src = path_Backgrounds.replace("#",ind_bg);
}

function autoChange_Backgrounds() {
  setInterval(Change_Backgrounds, 5000);
}

