const output = document.querySelector(".output");
const btn9 = document.querySelector(".nine");
const btn8 = document.querySelector(".eight");
const btn7 = document.querySelector(".seven");
const btn6 = document.querySelector(".six");
const btn5 = document.querySelector(".five");
const btn4 = document.querySelector(".four");
const btn3 = document.querySelector(".three");
const btn2 = document.querySelector(".two");
const btn1 = document.querySelector(".one");
const btn0 = document.querySelector(".zero");

const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const btnMult = document.querySelector(".mult");
const btnDivdie = document.querySelector(".divide");
const clear = document.querySelector(".spec");
const equal = document.querySelector(".equal");

let arrNums = [btn9, btn8, btn7, btn6, btn5, btn4, btn3, btn2, btn1, btn0];
let arrOps = [btnAdd, btnSub, btnMult, btnDivdie];

let clicked = false;
let counter = 0;
let display = "";
let checkIfNewCalculation = false;

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        return alert("You cannot divide by zero dum ah");
    }
    let num = a / b;
    num = num.toFixed(3);
    num = parseFloat(num);
    return num;
}

let num1 = "";
let num2 = "";
let operator = "" 

function operate(num1, num2, operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(operator === "+"){
        return add(num1, num2);
    } else if(operator === "-"){
        return sub(num1, num2);
    } else if(operator === "x"){
        return mult(num1, num2);
    } else if(operator === "%"){
        return divide(num1, num2);
    }
}

clear.addEventListener("click", function(){
    num1 = "";
    num2 = "";
    operator = "";
    clicked = false;
    counter = 0;
    display = "";
    output.textContent = "";
})

equal.addEventListener("click", function(){
    num1 = operate(num1, num2, operator);
    clicked = false;
    display = "";
    display += num1;
    counter = 0;
    num2 = "";
    checkIfNewCalculation = true;
    output.textContent = num1;
})

arrNums.forEach(element => {
    element.addEventListener("click", function(){
        if(checkIfNewCalculation === true){
            num1 = element.textContent;
            num2 = "";
            operator = "";
            clicked = false;
            display = num1;
            checkIfNewCalculation = false
            return output.textContent = display;
        }
        if(clicked === true){
            checkIfNewCalculation = false;
            num2 += element.textContent;
            display += element.textContent;
            output.textContent = display;
        } else {
            checkIfNewCalculation = false;
            num1 += element.textContent;
            display += element.textContent
            output.textContent = display; 
        }
    });    
});

arrOps.forEach(btnOperator =>{
    btnOperator.addEventListener("click", function(){
        counter++;
        clicked = true;
        display += " " + btnOperator.textContent + " ";
        if(num2 === ""){
            checkIfNewCalculation = false;
            operator = btnOperator.textContent;
            output.textContent = display;
            counter = 1;
        }
        if(counter > 1){
            checkIfNewCalculation = false;
            num1 = operate(num1, num2, operator);
            num2 = "";
            operator = btnOperator.textContent;
            display = num1 + " " + btnOperator.textContent + " ";
            return output.textContent = display;
        }
    })
})