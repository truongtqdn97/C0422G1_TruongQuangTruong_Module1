let weight = parseFloat(prompt("Enter the weight:"));
let height = parseFloat(prompt("Enter the height:"));
let bmi = weight / (height * height);

if (bmi<18.5){
    document.write('Underweight');
}
else if (bmi<25.0){
    document.write('Normal');
}
else if(bmi<30.0){
    document.write('Overweight');
}
else {
    document.write('Obese');
}