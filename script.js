const btns = document.querySelectorAll('.operators>button')
const screen = document.querySelector('.screen')
const clearBtn = document.querySelector('#clear')
const deleteBtn = document.querySelector("#delete")
let values = ''

// number buttons
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent != 'Delete' && btn.textContent != 'Clear') {
            if ((!isNaN(btn.textContent) || (!isNaN(values[values.length - 1])))) {
                values += btn.textContent
            }
            else {
                values = values.slice(0, -1) + btn.textContent
            }
            console.log(values)
        }
    });
});





// clear button 
clearBtn.addEventListener('click', () => {
    values = ''
    screen.textContent = ''
})

// delete button
deleteBtn.addEventListener('click', () => {
    values = values.slice(0, -1)
    screen.textContent = values

})

const operate = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case 'x':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
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
    return a / b
}