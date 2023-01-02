// let avg = score / numberOfTeam;


// ======================Team's Data =============
let dolphins = {
   firstGame:  [ 96, 108, 89],
    secondGame: [97, 112, 110],
    thirdGame: [97, 112, 101]
}

let Koalas = {
    firstGame:  [ 88, 91, 110],
     secondGame: [109, 95, 123],
     thirdGame: [109, 95, 106]
 }

//  ===============================
for (let i = 0; i < dolphins.length; i++) {
    Dolphinscore = dolphins[i].reduce((prev, next) => {
        return prev + next;
      });
}


console.log(score);
