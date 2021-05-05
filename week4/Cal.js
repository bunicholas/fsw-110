function add(num1 , num2){
var number1 = document.getElementById("num1").value
var number2 = document.getElementById("num2").value
var number3 = number1 + number2
document.getElementById("added").innerHTML = number3;
} 

function subtract(num1 , num2){
    var number1 = document.getElementById("num1").value
    var number2 = document.getElementById("num2").value
    var number3 = number1 - number2
    document.getElementById("subtracted").innerHTML = number3;
    } 
    function multiply(num1 , num2){
        var number1 = document.getElementById("num1").value
        var number2 = document.getElementById("num2").value
        var number3 = number1 * number2
        document.getElementById("multipled").innerHTML = number3;
        } 