function multiply() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    document.getElementById("result").innerHTML = num1 * num2;
}

function divide() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    
    if (num2 == 0) {
        document.getElementById("result").innerHTML = "Division by 0(zero) not allowed";
    } else {
        document.getElementById("result").innerHTML = num1 / num2;
    }
}