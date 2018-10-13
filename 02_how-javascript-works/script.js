/********************
 * LECTURE: HOISTING
 ********************/

// Functions
/*calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// Variables
console.log(age);

var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);*/


/*******************
 * LECTURE: SCOPING
 *******************/

// First scoping example
/*var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}*/

// Example to show the differece between execution stack and scope chain
/*var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}*/


/****************************
 * LECTURE: THE THIS KEYWORD
 ****************************/

//console.log(this);
/*calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();*/
