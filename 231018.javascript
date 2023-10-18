// Function
// - fudamental building block in the program
// - subforms a task or calculates a value
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, parm2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is cbject in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive paramegers: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log('${messge} by ${from}');
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessge() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }   
    // console.log(childMessage); //error
}
printMessge();

// 6. Return a value
function sum(a,b) {
    return  + b;
}
const result = sum(1,2); //3
console.log('sum; ${sum(1,2)}');

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression can is created when the execution reaches it.
const print = print = function () {
    // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callvack function using function expression
function randomQuiz (answer, printres, printNo) {
 if (answer === 'love you') {
    printYes();
 } else {
    print();
 }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// beeter debugging in debugger's stack traces
// recursions
const printNo = funtion print() {
    console.log('no!');
    print();
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
