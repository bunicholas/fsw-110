// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
var input = document.querySelector("#submit-me")
input.addEventListener("submit", function(e){
console.log (e)
e.preventDefault()
})