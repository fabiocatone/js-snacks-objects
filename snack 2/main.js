function random(max,min){
    return Math.floor(Math.random() * (max - min) ) + min;
}

const league = [
    {
        "name" : "Internazionale",
        "points" : 0,
        "foulsSuffered" : 0
    }, 

    {
        "name" : "A.C Milan",
        "points" : 0,
        "foulsSuffered" : 0
    },
    
    {"name" : "Napoli",
        "points" : 0,
        "foulsSuffered" : 0}

    
]
for (i = 0; i<league.length; i++) {
    league[i].points = Number(random(100,1));
    league[i].foulsSuffered = Number(random(100,1))
}
 
console.log(league);

let fixArray = []
for (let i = 0; i<league.length; i++) {
  let newteam = {
    "name" : league[i].name,
    "foulsSuffered" : league[i].foulsSuffered
  }
  fixArray.push(newteam)
}

console.log(fixArray);


