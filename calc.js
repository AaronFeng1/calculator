let clicked = false;
let counter = 0;
let display = "";
let checkForNewResult = false;

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
    if(operator === "add"){
        return add(num1, num2);
    } else if(operator === "sub"){
        return sub(num1, num2);
    } else if(operator === "mult"){
        return mult(num1, num2);
    } else if(operator === "divide"){
        return divide(num1, num2);
    }
}

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

btn9.addEventListener("click", function(){
    
    if(clicked === true){
        num2 += "9";
        display += "9";
        return output.textContent = display;
    } else if(checkForNewResult = true){
        num1 = "";
        display = "";
        num1 +=  "9";
        display += "9";
        return output.textContent = display
    } else {
        num1 +=  "9";
        display += "9";
        return output.textContent = display;
    }
});

btn8.addEventListener("click", function(){
    if(clicked === true){
        num2 += "8";
        display += "8";
        return output.textContent = display;
    } else {
        num1 +=  "8";
        display += "8";
        return output.textContent = display;
    }
});

btn7.addEventListener("click", function(){
    if(clicked === true){
        num2 += "7";
        display += "7";
        return output.textContent = display; 
    } else {
        num1 +=  "7";
        display += "7";
        return output.textContent = display;
    }
});

btn6.addEventListener("click", function(){
    if(clicked === true){
        num2 += "6";
        display += "6";
        return output.textContent = num2;
    } else {
        num1 +=  "6";
        display += "6";
        return output.textContent = display;
    }
});

btn5.addEventListener("click", function(){
    if(clicked === true){
        num2 += "5";
        display += "5";
        return output.textContent = display;
    } else {
        num1 +=  "5";
        display += "5";
        return output.textContent = display;
    }
});

btn4.addEventListener("click", function(){
    if(clicked === true){
        num2 += "4";
        display += "4";
        return output.textContent = display;
    } else {
        num1 +=  "4";
        display += "4";
        return output.textContent = display;
    }
});

btn3.addEventListener("click", function(){
    if(clicked === true){
        num2 += "3";
        display += "3";
        return output.textContent = display;
    } else {
        num1 +=  "3";
        display += "3";
        return output.textContent = display;
    }
});

btn2.addEventListener("click", function(){
    if(clicked === true){
        num2 += "2";
        display += "2";
        return output.textContent = display;
    } else {
        num1 +=  "2";
        display += "2";
        return output.textContent = display;
    }
});

btn1.addEventListener("click", function(){
    if(clicked === true){
        num2 += "1";
        display += "1";
        return output.textContent = display;
    } else {
        num1 +=  "1";
        display += "1";
        return output.textContent = display
    }
});

btn0.addEventListener("click", function(){
    if(clicked === true){
        num2 += "0";
        display += "0";
        output.textContent = display;
    } else {
        num1 += "0";
        display += "0";
        output.textContent = display;
    }
})
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const btnMult = document.querySelector(".mult");
const btnDivdie = document.querySelector(".divide");

let result = 0;

btnAdd.addEventListener("click", function(){
    counter++;
    clicked = true;
    display += " + ";
    if(num2 === ""){
        operator = "add";
        output.textContent = display;
    } else {
        num1 = operate(num1, num2, operator);
        num2 = "";
        operator = "add";
        display = num1 + " + ";
        return output.textContent = display;
    }
})



btnSub.addEventListener("click", function(){
    counter++;
    clicked = true;
    display += " - ";
    if(num2 === ""){
        operator = "sub";
        output.textContent = display;
        counter = 1;
    }
    if(counter > 1){
        num1 = operate(num1, num2, operator);
        num2 = "";
        operator = "sub";
        display = num1 + " - ";
        return output.textContent = display;
    }
})

btnMult.addEventListener("click", function(){
    counter++;
    clicked = true;
    display += " x ";
    if(num2 === ""){
        operator = "mult";
        output.textContent = display;
        counter = 1;
    }
    if(counter > 1){
        num1 = operate(num1, num2, operator);
        num2 = "";
        operator = "mult";
        display = num1 + " x ";
        return output.textContent = display
    }
})

btnDivdie.addEventListener("click", function(){
    counter++;
    clicked = true;
    display += " % ";
    if(num2 === ""){
        operator = "divide";
        output.textContent = display;
        counter = 1;
    }
    if(counter > 1){
        num1 = operate(num1, num2, operator);
        num2 = "";
        operator = "divide";
        display = num1 + " % ";
        return output.textContent = display;
    }
    operator = "divide";
    output.textContent = display;
})

const clear = document.querySelector(".spec");

clear.addEventListener("click", function(){
    num1 = "";
    num2 = "";
    operator = "";
    clicked = false;
    counter = 0;
    display = "";
    output.textContent = "";
})

const equal = document.querySelector(".equal");

equal.addEventListener("click", function(){
    num1 = operate(num1, num2, operator);
    clicked = false;
    display = "";
    display += num1;
    counter = 0;
    num2 = "";
    checkForNewResult = true;
    output.textContent = num1;
})