const numbers = document.querySelectorAll('.num')
const screen = document.querySelector('.screen')
const clearBtn = document.querySelector('#clear')
const deleteBtn = document.querySelector("#delete")
const operators = document.querySelectorAll(".op")
const eq = document.querySelector(".eq")
const decimal = document.querySelector('.decimal')

const oldScreen = document.querySelector(".old-screen")
const newScreen = document.querySelector(".new-screen")

let curr = ""
let prev = ""
let operator = ""

// numbers
numbers.forEach(btn => {
    btn.addEventListener('click', (event) => {
        if (newScreen.textContent == 'Error') {
            newScreen.textContent = ''
        }
        curr += event.target.textContent
        newScreen.textContent = curr
    })
})
// operators
operators.forEach(btn => {
    // to eval expressions without presing equals
    btn.addEventListener('click', (event) => {
        if (curr && prev) {
            evaluate()
        }
        if (curr) {
            // change values
            prev = curr
            curr = ""
            operator = event.target.textContent
            // set screens
            newScreen.textContent = ''
            oldScreen.textContent = prev + ' ' + operator
        }
    })
})

// decimal
decimal.addEventListener('click', () => {
    if (!curr.includes('.')) {
        curr += '.'
        newScreen.textContent = curr
    }
})

// clear screen and stored values
const clear = () => {
    prev = ''
    curr = ''
    operator = ''
    newScreen.textContent = ''
    oldScreen.textContent = ''
}
// clear button 
clearBtn.addEventListener('click', clear)

// delete button
deleteBtn.addEventListener('click', () => {
    curr = curr.slice(0, -1)
    newScreen.textContent = curr

})

// equals button
eq.addEventListener('click', () => {
    if (prev && curr) {
        evaluate()
    }
})


// update values on screens
const evaluate = () => {
    curr = operate()
    curr = curr.toString()
    newScreen.textContent = curr
    oldScreen.textContent = ''

}

// solve expressions
const operate = () => {
    prev = Number(prev)
    curr = Number(curr)
    op = operator
    switch (op) {
        case '+':
            return add(prev, curr)

        case '-':
            return subtract(prev, curr)

        case '*':
            return multiply(prev, curr)

        case '/':
            if (curr <= 0) {
                clear()
                newScreen.textContent = 'Error'
                return
            }
            return divide(prev, curr)
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

const multiply = function (arr, curr) {
    return Array.isArray(arr) ? arr.reduce((acc, elem) => acc * elem, 1) : arr * curr
};

const divide = function (a, b) {
    return a / b
}