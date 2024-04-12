let calculation = localStorage.getItem('calculation')||'';
displayCalculation();
function printCalculation(var1){
    if (var1 === "+" || var1 === "-" || var1 === "*" || var1 === "/") {
         calculation += " " + var1 + " ";
    }
    else{
    calculation+=var1;
    }
    displayCalculation();
    saveCalculation();

}

function saveCalculation(){
    localStorage.setItem('calculation',calculation);
}
function displayCalculation(){
    document.querySelector(".js-displayCalculation").innerHTML=calculation;
}
