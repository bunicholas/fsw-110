var powerRangers = [
    "Jason Lee Scott",
    "Kimberly Hart",
    "Zack Taylor",
    "Trini Kwan", 
    "Billy Cranston",
    "Tommy Oliver",
]
var rangerList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {

    rangersList.innerHTML += '<li>' + powerRangers[i] + '</li>'

}