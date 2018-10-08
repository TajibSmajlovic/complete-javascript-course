/*************************
* Variables and data types
**************************/

/*var firstName = 'Tajib'
console.log(firstName)

var lastName = 'Smajlovic'
var age = 23

var fullAge = true
console.log(fullAge)

var job
console.log(job)

job = 'Teacher'
console.log(job)

// Variable naming rules
var $_3years = 3
var johnMark = 'Jogn and Mark'*/


/**************************************
 * Variables mutation and type coercion
 **************************************/

/*var firstName = 'Tajib'
var age = 23

console.log(firstName + ' ' + age)

var job, isMarried
job = 'Teacher'
isMarried = false

console.log(firstName + ' s a ' + age + ' years old ' + job + '. Is he married? ' + isMarried)

// Variable mutation
age = 'twenty eight'
job = 'driver'

alert(firstName + ' s a ' + age + ' years old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last name?')
console.log(firstName + ' ' + lastName)*/


/**********************
 * Operator precedence
 **********************/

/*
var now = 2018
var yearTajib = 1995
var fullAge = 18

var isFullAge = now - yearTajib >= fullAge
console.log(isFullAge)

var ageTajib = now - yearTajib
var ageHasan = 17
var average = (ageTajib + ageHasan) / 2
console.log(average)

// Multiple assignments
var x, y
x = y = (3 + 5) * 4 - 6
console.log(x, y)

// More operators
x *= 2
console.log(x)
x += 10
console.log(x)
x++
console.log(x)
x--
console.log(x)*/


/*********************
 * CODING CHALLENGE 1
 ********************/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

var massMark = 75
var heightMark = 180

var massJohn = 95
var heightJohn = 190

bmiMark = massMark / (heightMark * heightMark)
bmiJohn = massJohn / (heightJohn * heightJohn)
console.log(bmiMark, bmiJohn)

var information = bmiMark > bmiJohn

console.log('Is Mark\'s BMI higher than John\'s?', information)