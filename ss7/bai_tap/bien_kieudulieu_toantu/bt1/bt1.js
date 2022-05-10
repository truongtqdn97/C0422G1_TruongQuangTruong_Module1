let phy = parseInt(prompt("Enter Physics point: "));
let che = parseInt(prompt("Enter Chemistry point: "));
let bio = parseInt(prompt("Enter Biology point: "));

let avg = (phy+che+bio)/3;
let total = phy+che+bio;

document.write("the average of 3 subjects is: "+avg);
document.write("<br>");
document.write("the total of 3 subjects is: "+total);