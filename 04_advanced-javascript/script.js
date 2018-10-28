// Function constructor
/*let john = {
    name: 'Tajib',
    yearOfBirth: 1990,
    job: 'teacher'
}*/

/*let Person = function (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth)
}
Person.prototype.lastName = 'Smith'

let john = new Person('John', 1990, 'teacher')
john.calculateAge()

let jane = new Person('Jane', 1969, 'designer')
let mark = new Person('Mark', 1948, 'retired')

jane.calculateAge()
mark.calculateAge()

console.log(john.lastName)
console.log(jane.lastName)
console.log(mark.lastName)*/


// Object.create
/*let personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth)
    }
}

let john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job = 'teacher '

let jane = Object.create(personProto, {
    name: {value: 'Jane' },
    yearOfBirth: { value: 1995 },
    job: { value: 'designer'}
})*/


/*// Primitives vs objects
// Primitives
let a = 23
let b = a
a = 46
console.log(a)
console.log(b)

// Objects
let obj1 = {
    name: 'Tajib',
    age: '23'
}
let obj2 = obj1

obj1.age = 30

console.log(obj1.age)
console.log(obj2.age)

// Functions
let age = 27
let obj = {
    name: 'Tajib',
    city: 'Visoko'
}

function change(a, b) {
    a = 30
    b.city = 'Sarajevo'
}

change(age, obj)

console.log(age)
console.log(obj.city)*/


/*// Passing functions as arguments
let years = [1990, 1965, 1995, 1931, 2002, 1963]

function arrayCalc(arr, fn) {
    let arrRes = []
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}
function calculateAge(el) {
    return 2018 - el
}
function isFullAge(el) {
    return el >= 18
}
function maxHearthRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    } else {
        return -1
    }
}

let ages = arrayCalc(years, calculateAge)
let fullAges = arrayCalc(ages, isFullAge)
let rates = arrayCalc(ages, maxHearthRate)

console.log(ages)
console.log(fullAges)
console.log(rates)*/


/*// Functions returning functions
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    } else {
        return function (name) {
            console.log('Hello '+ name + ', what do you do?')
        }
    }
}

let teacherQuestion = interviewQuestion('teacher')
let designerQuestion = interviewQuestion('designer')
let otherQuestion = interviewQuestion('')('Šaban')

teacherQuestion('John')
designerQuestion('Smajke')
designerQuestion('Hasan')
designerQuestion('Rejhana')

interviewQuestion('teacher')('Tajib')*/


/*// Immediately Invoked Functions (IIFE)
/!*function game() {
    let score = Math.random() * 10
    console.log(score >= 5)
}
game()*!/

(function () {
    let score = Math.random() * 10
    console.log(score >= 5)
    }) ()
//console.log(score)

(function (goodLuck) {
    let score = Math.random() * 10
    console.log(score >= 5 - goodLuck)
}) (5)*/


/*// Closures
/!*function retirement(retirementAge) {
    let a = ' years left until retirement.'
    return function (yearOfBirth) {
        let age = 2018 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}

let retirementUS = retirement(66)(1995)
let retirementGermany = retirement(65)(1990)
let retirenmentBosnia = retirement(70)(1963)*!/

/!*function interviewQuestion(job) {
    let designer = ', can you please explain what UX design is?'
    let teacher = 'What subject do you teach, '

    return function (name) {
        if (job === 'designer') {
            console.log(name + designer)
        } else if (job === 'teacher') {
            console.log(teacher + name + '?')
        } else {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}
interviewQuestion('designer')('Tajib')
interviewQuestion('teacher')('Hasan')
interviewQuestion('autolimar')('Šukrija')*!/*/


/////////////////////////////
// CODING CHALLENGE
/*--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
(function () {
    function Question(question, answers, correct) {
        this.question = question
        this.answers = answers
        this.correct = correct
    }
    Question.prototype.displayQuestion = function () {
        console.log(this.question)

        let i = 0
        this.answers.forEach((a) => {
            console.log(`${i}: ${a}`)
            i++
        })
    }
    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('correct')
        } else {
            console.log('wrong')
        }
    }

    let q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'],
        0);

    let q2 = new Question('What is the name of this course\'s teacher?',
        ['John', 'Micheal', 'Jonas'],
        2);

    let q3 = new Question('What does best describe coding?',
        ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);

    let questions = [q1, q2, q3]
    let n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion()

    let answer = parseInt(prompt('What is your answer?'))
    questions[n].checkAnswer(answer)
}())