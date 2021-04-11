// var newheading1 = document.createElement('h2')
// newheading1.textContent = '1'
// newList.appendChild(newheading1)

// var newheading2 = document.createElement('h2')
// newheading2.textContent = '2'
// newList.appendChild(newheading2)

// var newheading3 = document.createElement('h2')
// newheading3.textContent = '3'
// newList.appendChild(newheading3)

// var newheading4 = document.createElement('h2')
// newheading4.textContent = '4'
// newList.appendChild(newheading4)

// var newheading5 = document.createElement('h2')
// newheading5.textContent = '5'
// newList.appendChild(newheading5)

for (i = 0; i < 5; i++) {
    var newheading = document.createElement('h2')
    newheading.textContent = 'Hello World'
    document.body.appendChild(newheading)
    newheading.style.fontSize = '20px'
    newheading.style.fontWeight = 'lighter'
    newheading.style.fontFamily = 'sans-serif'
    newheading.style.color = 'cornflowerblue'
    newheading.classList.add("border");
}