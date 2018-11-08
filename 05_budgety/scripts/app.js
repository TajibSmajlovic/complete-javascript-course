// BUDGET CONTROLLER
let budgetController = ( () => {

    let Expense = function (id ,description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    let Income = function (id ,description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

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

    let setupEventListeners = () => {
        let DOM = UICtrl.getDOMStrings()

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', (event) => {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })
    }

    let ctrlAddItem = () => {

        // 1. Get the field input data
        let input = UICtrl.getInput()

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    return {
        init: function () {
            console.log('Application has started')
            setupEventListeners()
        }
    }

})(budgetController, UIController)

controller.init()