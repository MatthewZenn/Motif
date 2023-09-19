const styles = ["retro", "space", "landscape", "liminal", "minimalist", "cyberpunk", "art-deco", "urban", "pop-art", "ancient", "geometric"];
const themes = ["Enemy Within", "Out of Control", "Odyssey", "Frozen in Time", "Unseen World", "Modern Dystopia", "Reimagined", "Worlds Collide", "Far From Home", "Apocalypse"];

document.getElementById("refresh").addEventListener('click', () => {
  window.location.reload(true);
});

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var style_choice = styles.random();
var huel = Math.floor(Math.random() * (360));

document.getElementById("theme").innerHTML = themes.random();
document.getElementById("texture").src = "https://source.unsplash.com/1600x900/?texture";
document.getElementById("style").src = "https://source.unsplash.com/1600x900/?" + style_choice;
document.getElementById("motif").innerHTML = style_choice;

document.getElementById("four").style.backgroundColor = `hsl(${huel*4}, 100%, 20%)`;
document.getElementById("three").style.backgroundColor = `hsl(${huel*3}, 100%, 40%)`;
document.getElementById("two").style.backgroundColor = `hsl(${huel*2}, 100%, 60%)`;
document.getElementById("one").style.backgroundColor = `hsl(${huel}, 100%, 80%)`;
