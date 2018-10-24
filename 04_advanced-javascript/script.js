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


// Primitives vs objects
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
console.log(obj.city)