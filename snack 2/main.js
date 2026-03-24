function random(max,min){
    return Math.floor(Math.random() * (max - min) ) + min;
}

const league = [
    {
        "name" : "Internazionale",
        "points" : Number(random(100,1)),
        "fouls-suffered" : Number(random(100,1))
    }, 

    {
        "name" : "A.C Milan",
        "points" : Number(random(100,1)),
        "fouls-suffered" : Number(random(100,1))
    },
    
    {"name" : "Napoli",
        "points" : Number(random(100,1)),
        "fouls-suffered" : Number(random(100,1))}

    
]
console.log(league);

let fixArray = []
for (let i = 0; i<league.length; i++) {
   delete league[i].points
   fixArray.push(league[i])
}

console.log(fixArray);


