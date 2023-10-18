 //1. String concatenation
 console.log('my' + ' cat');
 console.log('1' + 2);
 console.log('string literals: 1 + 2 = ${1 + 2}');

 //2. Numeric operators
 console.log(1 + 1); // add
 console.log(1 - 1); // substract
 console.log(1 / 1); // divide
 console.log(1 * 1); // multiply
 console.log(5 % 2); // remainder
 console.log(2 ** 3); // exponentiation

 //5. Comparison operators
 console.log(10 < 6); // less than
 console.log(10 <= 6); // less than or equal
 console.log(10 > 6); // greater than
 console.log(10 >= 6); // greater than or equal

 //6. Logical operators: || (or), && (and), ! (not)
 const value1 = false;
 const value2 = 4 < 2;

 // || (or), finds the first truthy value
 console.log('or: &{value1 || value2 }');

 // && (and), finds the first falsy value
 console.log('and: ${value1 && value2 }');

 function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
 }