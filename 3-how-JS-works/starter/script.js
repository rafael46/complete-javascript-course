///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
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



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();
console.log("this main window:  " + this);

function first() {
    var b = 'Hi!';
    second();
    console.log("this first dunction" + this);
    function second() {
        var c = 'Hey!';
        var self = this;
        console.log("this  self " + self);
        third()
    }

    function third() {
        var d = 'John';
        console.log(a   + d);
    }

}


// function third() {
//     var d = 'John';
//     console.log(a+b  + c + d);
// }




///////////////////////////////////////
// Lecture: The this keyword









