const styles = ["retro", "space", "landscape", "liminal", "minimalism", "cyberpunk", "art-deco", "urban", "pop-art", "ancient", "geometric", "steampunk"];
const themes = ["Enemy Within", "Out of Control", "Endless Odyssey", "Frozen in Time", "Unseen World", "Modern Dystopia", "Reimagined", "Worlds Collide", "Far From Home", "Apocalypse", "Joined Together"];

document.getElementById("refresh").addEventListener('click', () => {
  window.location.reload(true);
});

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function art() {
  var style_choice = styles.random();
  document.getElementById("style").src = "https://source.unsplash.com/1600x900/?" + style_choice;
  document.getElementById("motif").innerHTML = style_choice;
}

function pallet() {
  var huel = Math.floor(Math.random() * (360));
  document.getElementById("four").style.backgroundColor = `hsl(${huel+90}, 50%, 20%)`;
  document.getElementById("three").style.backgroundColor = `hsl(${huel+60}, 50%, 40%)`;
  document.getElementById("two").style.backgroundColor = `hsl(${huel+30}, 50%, 60%)`;
  document.getElementById("one").style.backgroundColor = `hsl(${huel}, 50%, 80%)`;
}

pallet();
art();
document.getElementById("theme").innerHTML = themes.random();
document.getElementById("texture").src = "https://source.unsplash.com/1600x900/?texture";

// Create a Rorschach inkblot painter
var painter = new RorschachPainter();

// Set the amount of ink range
painter.setInkAmountRange(2500, 25000);

// Set the maximum blob dimensions
painter.setMaximumBlobDimensions(7, 5);

// Set the palette to a few colors
painter.setPalette([ 
  new Color(187, 54, 54),
  new Color(127, 187, 95),
  new Color(57, 77, 127),
]);

// Paint the inkblot on the canvas element
painter.paint("rorschachCanvas");

document.getElementById("pallet").addEventListener('click', pallet);
document.getElementById("style").addEventListener('click', art);
document.getElementById("rorschachCanvas").addEventListener('click', () => {
  context.clearRect(0, 0, rorschachCanvas.width, rorschachCanvas.height);
  painter.paint("rorschachCanvas");
});