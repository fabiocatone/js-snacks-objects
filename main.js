

const bikes = [
{
    "name " : "pininfarina",
    "weight" : "45"

},
{
    "name" : "nike",
    "weight" :  "60"
},
 {
    "name" : "adidas",
    "weight" : "38"

 }
]
let bikeexample = bikes [0]
for (let i = 0; i<bikes.length; i++) {

if (bikes[i].weight < bikeexample.weight) {
    bikeexample = bikes[i]
}

}
console.log(bikeexample);

const divEl = document.querySelector("div")

divEl.innerText = "La bici con il peso minore è" + " " + bikeexample.name + " "+  "che pesa" + " "+
 bikeexample.weight 