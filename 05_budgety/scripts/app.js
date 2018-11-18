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
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        }
    }

    return {
        addItem: function (type, des, val) {
            let newItem, ID

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0
            }

            // Create new item based on 'income' or 'expense' type
            if (type === 'expense') {
                newItem = new Expense(ID, des, val)
            } else if (type === 'income') {
                newItem = new Income(ID, des, val)
            }

            // Push it into our data structure
            data.allItems[type].push(newItem)

            // Return the new element
            return newItem
        },
        testing: function () {
            console.log(data)
        }
    }

})()


// UI CONTROLLER
let UIController = ( () => {

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }

    // noinspection JSAnnotator
    return {
        getInput: function () {
            return {
                type : document.querySelector(DOMStrings.inputType).value,  // Will be either income or expense
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            }
        },
        addListItem: function(obj, type) {
            let html, newHtml, element

            // Create HTML string with placeholder text
            if (type === 'income') {
                element = DOMStrings.incomeContainer

                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'expense') {
                element = DOMStrings.expensesContainer

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', obj.value)

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)

        },
        clearFields: function() {
            let fields, fieldsArr

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields)

            fieldsArr.forEach((currentValue) => {
                currentValue.value = ""
            })

            fieldsArr[0].focus()
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
        let input, newItem

        // 1. Get the field input data
        input = UICtrl.getInput()

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value)

        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type)

        // 4. Clear the fields
        UICtrl.clearFields()

        // 5. Calculate the budget

        // 6. Display the budget on the UI

    }

    return {
        init: function () {
            console.log('Application has started')
            setupEventListeners()
        }
    }

})(budgetController, UIController)

controller.init()