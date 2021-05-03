/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
var input = document.querySelector("#output")
window.addEventListener("keydown", function(e) {
    console.log(e) 
    input.textContent=e.key+" , "+e.keyCode
  })