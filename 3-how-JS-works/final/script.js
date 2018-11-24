/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping
// next
/*
// First scoping example
var a = 'Hello!';
console.log(a );
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

/*
// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
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
    // console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword


//console.log(this);

https://www.w3schools.com/code/tryit.asp?filename=FXJRMQPMI7NM


'use strict';
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log('outher function :: '+this);
}
*/
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log('FIRST innner function THIS ::  '+this+ " "+ JSON.stringify(this) );  //
        console.log(2016 - this.yearOfBirth);
        
        // function innerFunction() {
        //     console.log(this);  //'inner function OBJECt windows:: -- '+
        // }
        // innerFunction();
        
    },
    // call1: function(){ 
    //     console.log('i am in: '+this.calculateAge());   // UNDEFINED UNDEFINED UNDEFINED
    // }
    
}

john.calculateAge();
// john.call1();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();

