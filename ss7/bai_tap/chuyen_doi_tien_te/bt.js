function convert() {
    let Amount = document.getElementById("amount").value;
    let FromC = document.getElementById("from").value;
    let ToC = document.getElementById("to").value;
    let Result;

    if (FromC == "VND" && ToC == "USD"){
        Result = "Result after convert: " + (Amount/23000) + " $";
    }
    else if (FromC == "USD" && ToC == "VND"){
        Result = "Result after convert: " + (Amount*23000) + " VND";
    }
    else if (FromC == "VND" && ToC == "VND"){
        Result = "Result after convert: " + Amount + " VND";
    }
    else {
        Result = "Result after convert: " + Amount + " USD";
    }
    document.getElementById("result").innerHTML = Result;
}