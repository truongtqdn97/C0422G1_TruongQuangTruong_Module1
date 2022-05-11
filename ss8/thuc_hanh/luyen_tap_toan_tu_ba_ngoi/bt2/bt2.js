let message = prompt("Enter message:");
let a = (message == 'Employee') ? 'Hello' : (message == 'Director') ? 'Greetings' : (message == '') ? 'No login' : ' '
document.write(a);