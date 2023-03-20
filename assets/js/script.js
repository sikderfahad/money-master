
function getBtn(elementId) {
    const btn = document.getElementById(elementId)
    return btn
}

getBtn('btn-expense').addEventListener('click', function () {
    const income = getBtn('income').value
    const food = getBtn('food').value
    const rent = getBtn('rent').value
    const cloth = getBtn('cloth').value

    if (income == '' || food == '' || rent == '' || cloth == '') {
        return alert('The input field shouldn\'t empty')

    }

    const incomeInt = parseInt(income)
    const foodInt = parseInt(food)
    const rentInt = parseInt(rent)
    const clothInt = parseInt(cloth)

    const check = incomeInt * foodInt * rentInt * clothInt

    if (isNaN(check)) {
        return alert('Please enter an integer value!')
    }


    const expense = foodInt + rentInt + clothInt
    const balance = incomeInt - expense

    if (expense > incomeInt) {
        return alert('Please Don\'t spend more than income')
    }

    const totalExpenseField = getBtn('total-expense')
    const balanceField = getBtn('balance')

    totalExpenseField.innerText = expense
    balanceField.innerText = balance

})


getBtn('btn-save').addEventListener('click', function () {
    const saveValue = getBtn('save').value
    const saveValueInt = parseInt(saveValue)

    if (saveValue == '') {
        return alert('Save value shouldn\'t empty!')
    }

    const check = .5 * saveValueInt
    if (isNaN(check)) {
        return alert('Please enter an integer value!')
    }

    const balance = parseInt(getBtn('balance').innerText)

    const saveAmount = (saveValueInt / 100) * balance

    const remainingBalance = balance - saveAmount

    if (saveAmount > balance) {
        return alert('You can\'t save greater than from your balance')
    }

    const saveField = getBtn('save-amount')
    const remainingField = getBtn('remaining-amount')

    saveField.innerText = saveAmount
    remainingField.innerText = remainingBalance

})