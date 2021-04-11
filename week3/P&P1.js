var tags = ["Hello World"]
var newheading = document.createElement('h1')
newheading.textContent = 'Hello World'
document.body.appendChild(newheading)



for (i = 0; i < 10; i++) {
    var newheading = document.createElement('h1')
    newheading.textContent = 'Hello World'
    document.body.appendChild(newheading)
    newheading.style.fontSize = ''

}
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
for (i = 0; i < names.length; i++){
    
    var newheading = document.createElement('h1')
    newheading.textContent += names[i] + " Carroll"
    document.body.appendChild(newheading)
    newheading.style.fontSize = ''
}

