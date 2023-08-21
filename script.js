const btns = document.querySelectorAll('button')
const screen = document.querySelector('.screen')


const operate = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
           return subtract(num1, num2)
        case 'x':
            return multiply(num1,num2)
        case '/':
            return divide(num1,num2)
    }
}

const add = function (a, b) {
    return a + b
};

const subtract = function (a, b) {
    return a - b
};

const sum = function (arr) {
    return arr.reduce((acc, elem) => acc + elem, 0)
};

const multiply = function (arr, num2) {
    return Array.isArray(arr) ? arr.reduce((acc, elem) => acc * elem, 1) : arr * num2
};


const divide = function (a, b) {
    return a/b
}