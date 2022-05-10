function Add() {
    let Num1 = parseInt(document.getElementById("number1").value);
    let Num2 = parseInt(document.getElementById("number2").value);
    let Sum = "Result: " + (Num1+Num2);
    document.getElementById("Result").innerHTML = Sum;
}

function Sub() {
    let Num1 = parseInt(document.getElementById("number1").value);
    let Num2 = parseInt(document.getElementById("number2").value);
    let Sub = "Result: " + (Num1-Num2);
    document.getElementById("Result").innerHTML = Sub;
}

function Mul() {
    let Num1 = parseInt(document.getElementById("number1").value);
    let Num2 = parseInt(document.getElementById("number2").value);
    let Mul = "Result: " + (Num1*Num2);
    document.getElementById("Result").innerHTML = Mul;
}

function Div() {
    let Num1 = parseInt(document.getElementById("number1").value);
    let Num2 = parseInt(document.getElementById("number2").value);
    let Div = "Result: " + (Num1/Num2);
    document.getElementById("Result").innerHTML = Div;
}