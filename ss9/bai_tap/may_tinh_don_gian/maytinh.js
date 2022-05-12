let screen = document.getElementById("screen");
function clickbtn(value) {
    screen.value += value;
}
function allClear() {
    screen.value = " ";
}
function result() {
    let Result = eval(screen.value);
    screen.value = Result;
}