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

/*
var massMark = 75
var heightMark = 1.80

var massJohn = 95
var heightJohn = 1.90

bmiMark = massMark / (heightMark * heightMark)
bmiJohn = massJohn / (heightJohn * heightJohn)
console.log(bmiMark, bmiJohn)

var information = bmiMark > bmiJohn

console.log('Is Mark\'s BMI higher than John\'s?', information)*/


/***********************
 * If 7 else statements
 **********************/

/*
var firstName = 'Tajib';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 75;
var heightMark = 1.80;
var massJohn = 95;
var heightJohn = 1.90;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}*/


/*****************
 * Boolean logic
 *****************/

/*
var firstName = 'Tajib';
var age = 23;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}*/


/*********************************************
 * The ternary Operator and Switch Statements
 *********************************************/

/*
var firstName = 'Adnan';
var age = 23;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}*/


/*************************************************
 * Truthy and Falsy values and equality operators
 *************************************************/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}*/


/*********************
 * CODING CHALLENGE 2
 ********************/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws. */

let teamJohn = (89 + 120 + 103) / 3
let teamMike = (116 + 94 + 123) / 3
let teamMary = (97 + 134 + 105) / 3
console.log(teamJohn, teamMike, teamMary)

if (teamJohn > teamMike && teamJohn > teamMary) {
    console.log('John\'s team won')
} else if (teamMike > teamJohn && teamMike > teamMary) {
    console.log('Mike\'s team won')
} else if (teamMary > teamMike && teamMary > teamJohn) {
    console.log('Mary\'s team won')
} else {
    console.log('It is draw')
}