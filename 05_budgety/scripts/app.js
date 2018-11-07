// BUDGET CONTROLLER
let budgetController = ( () => {

    // Some code

})()


// UI CONTROLLER
let UIController = ( () => {

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    // noinspection JSAnnotator
    return {
        getInput: function () {

            return {
                type : document.querySelector(DOMStrings.inputType).value,  // Will be either income o expense
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            }
        },
        getDOMStrings: function () {
            return DOMStrings
        }
    }

})()


// GLOBAL APP CONTROLLER
let controller = ( (budgetCtrl, UICtrl) => {

    let DOM = UICtrl.getDOMStrings()

    let ctrlAddItem = () => {

        // 1. Get the field input data
        let input = UICtrl.getInput()
        console.log(input)

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', (event) => {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem()
        }

    })

})(budgetController, UIController)