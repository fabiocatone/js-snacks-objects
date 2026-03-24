function random(){
    Math.floor(Math.random()*100)

}

const league = [
    {
        "name" : "Internazionale",
        "points" : random(),
        "fouls-suffered" : random()
    }, 

    {
        "name" : "A.C Milan",
        "points" : random (),
        "fouls-suffered" : random()
    },
    
    {"name" : "Napoli",
        "points" : random(),
        "fouls-suffered" : random()}

    
]
console.log(league);
