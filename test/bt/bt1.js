let arg1 = parseInt(prompt("Nhap so 1"));
let arg2 = parseInt(prompt("Nhap so 2"));
let arg3 = parseInt(prompt("Nhap so 3"));
let t;
if ((arg1 == arg2) && (arg1 == arg3))
{
    document.write('-1');
}
else {
    if (arg1<arg2){
        t = arg1;
        arg1 = arg2;
        arg2 = t;
    }
    if (arg2<arg3){
        t = arg2;
        arg2 = arg3;
        arg3 = t;
    }
    if (arg1<arg3){
        t = arg1;
        arg1 = arg3;
        arg3 = arg1;
    }
    if (arg1<arg2){
        t = arg1;
        arg1 = arg2;
        arg2 = t;
    }
    if (arg1==arg2){
        document.write(arg3 + ' la so lon thu 2');
    }
    else {
        document.write(arg2 + ' la so lon thu 2');
    }
}