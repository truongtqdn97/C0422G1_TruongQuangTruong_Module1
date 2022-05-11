let n = parseInt(prompt("Input number:"))

//cau truc if else
// if (n>0){
//     alert(1);
// }
// else if (n==0){
//     alert(0);
// }
// else {
//     alert(-1);
// }

//cau truc switch case
let a = n>0;
switch (a) {
    case true: alert(1); break;
    case false:
        let b = n<0;
        switch (b) {
            case true: alert(-1); break;
            case false: alert(0); break
        }
}