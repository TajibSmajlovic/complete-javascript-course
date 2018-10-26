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


// Functions returning functions
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

interviewQuestion('teacher')('Tajib')