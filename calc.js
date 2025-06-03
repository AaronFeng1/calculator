let clicked = false;
let counter = 0;

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
    return a / b;
}

let num1 = "";
let num2 = "";
let operator = "" 

function operate(num1, num2, operator){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
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
const btn = document.querySelector(".num");

btn.addEventListener("click", function(){
    console.log(btn.textContent);
})

btn9.addEventListener("click", function(){
    if(clicked === true){
        num2 += "9";
        return output.textContent = num2;
    } else {
        num1 +=  "9";
        return output.textContent = num1;
    }
});

btn8.addEventListener("click", function(){
    if(clicked === true){
        num2 += "8";
        return output.textContent = num2;
    } else {
        num1 +=  "8";
        return output.textContent = num1;
    }
});

btn7.addEventListener("click", function(){
    if(clicked === true){
        num2 += "7";
        return output.textContent = num2; 
    } else {
        num1 +=  "7";
        return output.textContent = num1;
    }
});

btn6.addEventListener("click", function(){
    if(clicked === true){
        num2 += "6";
        return output.textContent = num2;
    } else {
        num1 +=  "6";
        return output.textContent = num1;
    }
});

btn5.addEventListener("click", function(){
    if(clicked === true){
        num2 += "5";
        return output.textContent = num2;
    } else {
        num1 +=  "5";
        return output.textContent = num1;
    }
});

btn4.addEventListener("click", function(){
    if(clicked === true){
        num2 += "4";
        return output.textContent = num2;
    } else {
        num1 +=  "4";
        return output.textContent = num1;
    }
});

btn3.addEventListener("click", function(){
    if(clicked === true){
        num2 += "3";
        return output.textContent = num2;
    } else {
        num1 +=  "3";
        return output.textContent = num1;
    }
});

btn2.addEventListener("click", function(){
    if(clicked === true){
        num2 += "2";
        return output.textContent = num2;
    } else {
        num1 +=  "2";
        return output.textContent = num1;
    }
});

btn1.addEventListener("click", function(){
    if(clicked === true){
        num2 += "1";
        return output.textContent = num2;
    } else {
        num1 +=  "1";
        return output.textContent = num1;
    }
});

const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const btnMult = document.querySelector(".mult");
const btnDivdie = document.querySelector(".divide");

let result = 0;

btnAdd.addEventListener("click", function(){
    counter++;
    clicked = true;
    operator = "add";
    if(clicked === true && counter > 1 && counter < 3){
        result = operate(num1, num2, operator);
        num1 = "";
        num2 = "";
        clicked = false;
        return output.textContent = result + "+";
    }
    if(clicked === true && counter >= 3){
        clicked = false;
        result = output.textContent = operate(num1, result, operator);
        num1 = "";
        return result;
    }
    output.textContent = num1 + " + "
})

let counterS = 0;

btnSub.addEventListener("click", function(){
    counterS++;
    clicked = true;
    operator = "sub"
    if(clicked === true && counterS > 1 && counterS < 3){
        result = operate(num1, num2, operator);
        num1 = "";
        num2 = "";
        clicked = false;
        return output.textContent = result;
    }
    if(clicked === true && counterS >= 3){
        clicked = false;
        result = output.textContent = operate(result, num1, operator);
        num1 = "";
        return result;
    }
    output.textContent = "-";
})

btnMult.addEventListener("click", function(){
    clicked = true;
    operator = "mult";
    return output.textContent = "x";
})

btnDivdie.addEventListener("click", function(){
    clicked = true;
    operator = "divide"
    return output.textContent = "/";
})

const clear = document.querySelector(".spec");

clear.addEventListener("click", function(){
    num1 = "";
    num2 = "";
    operator = "";
    clicked = false;
    output.textContent = "";
})

const equal = document.querySelector(".equal");

equal.addEventListener("click", function(){
    if(clicked === true && counter > 1){
        return output.textContent = "HELLO WORLD";
    }
    output.textContent = operate(num1, num2, operator);
})
