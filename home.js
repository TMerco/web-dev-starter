// TERNARY OPERATORS (CAN BE USED INSTEAD OF IF/ELSE) 
 
//  let price = 20;

// // (price < 10) ? showMessage('yes') : showMessage('no');

// let message = (price < 10) ? 'yes' : 'no';
// showMessage(message);



// BLOCK SCOPE USING LET \\

// if (true) {
//     const value = 'yes';
//     showMessage(value);
// }

// console.log(value)




//LOOPING WITH FOR()

  //(new variable; condition; incroment) \\
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }



// //LOOPING WITH WHILE() \\

// let i = 4;

// while (i > 0) {
//   console.log(i);

//   i--;
// }



//LOOPING WITH DO ... WHILE() \\

// let i = 4;
// do {
//   console.log(i);

//   i--;
// } while(i > 0);




//FUNCTIONS BASICS\\
//A block of code with a name. Functions can be used/implimented in different places.

// function logMessage () {              //Here is the function.
//   console.log('Here is a message');  //But it is not active unless it is called.
// }

// logMessage();                      //This line of code calls the function.
// logMessage();                      //The function can be called multiple times.






//FUNCTION EXPRESSIONS \\

// function showMessage() {            //Function Decloration/Statement

// }

// let fn = function() {               //Function Expression: function 
//                                     //gets assigned to a variable
// }

// fn();       //Calls the function






//FUNCTION EXPRESSION EXAMPLE \\

// let myfunction = function loggingFunction () {
//   console.log('Here is a message');
// }

// myfunction();





//PASSING INFO TO FUNCTIONS \\

// let myFunction = function loggingFunction(message, firstName) {
//   console.log(message);
//   console.log(firstName);

// }

// myFunction('Hello');      //Passing the message "Hello" through the function
// myFunction('Tyrell');     //Passes another message "Tyrell" through the function






//FUNCTION RETURN VALUES \\

function getSecretCode(value) {
  let code = value * 42;
  return code;
}

showMessage(getSecretCode(2));  //2 replaces 'value' which makes the function 
console.log(getSecretCode(2)); //"2 * 42" instead of "value * 42"

//A Cleaner Way to Present Same Code Above
function getSecretCode(value) {
  let code = value * 42;
  return code;
}

let secretCode = getSecretCode(2);  //Using very clear variable names makes
showMessage(secretCode);            //The code cleaner.