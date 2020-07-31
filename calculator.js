const calc = () => {
    //these are the variables that are being used

    //this is the first value and we use parseInt so it comes out a number
    const a = parseInt(document.querySelector("#value1").value);
    //this is the second value
    const b = parseInt(document.querySelector("#value2").value);
    // this is the operator variable
    const op = document.querySelector("#operator").value;
    let calculate;

    //this is a if else statement to be used in the calculator
    //ex. in this it sees if op = "add" and if it does it adds the 2 values
     if (op == "add") {
         calculate = a + b;
     }else if (op == "sub"){
         calculate = a - b;
     }else if (op == "div"){
        calculate = a / b;
    }else if (op == "mul"){
        calculate = a * b;
    }
    
    document.querySelector("#result").innerHTML = calculate;
}; 