var powerPelletEaten = false;
var ghosts = 4;

while(true) {
console.log('Ghosts remaiming: '+ghosts);

if (powerPelletEaten == false) {
console.log('Pac-Maam eats the power pellet');
powerPelletEaten = true;
}
else if (ghosts > 0 ){
console.log('Chomp the Ghost!');
ghosts--;
}
else {break;}
}

console.log('Pac-Man returns home after a long day in the maze.');
