

let ingéniosité = 5;
let vitesse = 4;
let force = 7;
let foudre = 4;
let thanos = 163;

let ironMan = ingéniosité * 3 + 10;
let spiderMan = vitesse * 4 + 5;
let captainAmerica = force * 3 + 7;
let thor = foudre * 4 + 20;

let puissanceTotal = ironMan + spiderMan + captainAmerica + thor;

let nbrTours = 0;

function vaincreThanos(){
  while (thanos > puissanceTotal) {
    if(nbrTours%4 == 0){
      ingéniosité ++;
      ironMan = ingéniosité * 3 + 10;
    } else if (nbrTours%4 == 1) {
      vitesse ++;
      spiderMan = vitesse * 4 + 5;
    } else if (nbrTours%4 == 2) {
      force ++;
      captainAmerica = force * 3 + 7;
    } else {
      foudre ++;
      thor = foudre * 4 + 20;
    }

    puissanceTotal = ironMan + spiderMan + captainAmerica + thor;
    nbrTours += 1;
  }
  console.log(nbrTours);
}
vaincreThanos();


  
    
