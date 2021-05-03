var input = document.querySelector(".red-box")
input.addEventListener("mousemove", function(e){
console.log (e)
input.textContent=e.x+" , "+e.y
})