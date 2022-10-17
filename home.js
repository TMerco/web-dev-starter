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

// function getSecretCode(value) {
//   let code = value * 42;
//   return code;
// }

// showMessage(getSecretCode(2));  //2 replaces 'value' which makes the function 
// console.log(getSecretCode(2)); //"2 * 42" instead of "value * 42"

// //A Cleaner Way to Present Same Code Above
// function getSecretCode(value) {
//   let code = value * 42;
//   return code;
// }

// let secretCode = getSecretCode(2);  //Using very clear variable names makes
// showMessage(secretCode);            //The code cleaner.





// //FUNCTION SCOPE \\
// //Functions can use code from outside as long as it has 
// //a variable, but not the other way around.

// function getSecretCode(value){
//   let code = value * 42;
// }

// let secretCode = getSecretCode(2);
// showMessage(code);

//Example: 

// let key = 42;

// function getSecretCode(value){
  
//   let keyGenerator = function() {
//     let key = 12;
//     console.log('in keyGenerator: ', key);
//     return key;
//   }

//   let code = value * keyGenerator();
//   console.log(' in keyGenerator: ', key);
//   return code;
// }

// let secretCode = getSecretCode(2);
// showMessage(secretCode);




//OBJECT PROPERTIES \\
// //Object is a group of values/properties.
// let mySymbol = symbol();

// let person = {         //Here is the Object
//   name: "John",      // Here are Properties
//   age: 32,            // Here are Properties
//   partTime: false,      // Here are Properties
//   [mySymbol]: 'secretInformation'
// };

// person.age = 33;  //change an element of a property inside the object
// person['age'] = 44; //another way to change it
// //How to access Object Properties.
// showMessage(person.age);




//Object Methods \\

// let person = {
//   name: 'John',
//   age: 32,
//   partTime: false,
//   showInfo: function(realAge) {     //"this." refers to the current object
//     showMessage(this.name + ' is ' + realAge); //this.propertyName referes to the property 
// }                                               // name inside the current object
// }

// person.showInfo(34);



// //PASSING OBJECTS TO FUNCTIONS \\

// let message = 'Hello';

// function changeMessage(message) {
//   message = 'Hi!';
// }

// changeMessage(message);
// showMessage(message);
//Result is message because the change to 'Hi!' is stored into the parameter of the function
//instead of changing the value of message when calling:  showMessage(message);

// //HOW IT WORKS WITH OBJECTS \\

// let person = {
//   name: 'John',
//   age: 32,
//   partTime: false
// };

// function incrementAge(person) {
//   person.age++;
// }

// incrementAge(person);
// // showMessage(person.age);


// //STANDARD BUILT-IN OBJECTS \\
// /*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// */

// //DATE 
// let now = new Date();
//  showMessage(now.toDateString());

//  //MATH
//  showMessage(Math.random(-42));

//  //STRING

//  let s = 'Hello';
//  showMessage(s.charAt(0));

 //DOM (Document Object Model) \\





 //STYLING DOM ELEMENTS \\

// /*
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
// */

// const button = document.getElementById('see-review');

// button.addEventListener('click', function() {
//   console.log('click');
// })





//SHOWING AND HIDING DOM ELEMENTS \\

const button = document.getElementById('see-review');

button.addEventListener('click', function() {

  const review = document.getElementById('review');

  if (review.classList.contains('d-none')) {
  review.classList.remove('d-none');
  button.textContent = 'CLOSE REVIEW';

  }
  
  else{
    review.classList.add('d-none');
    button.textContent = 'SEE REVIEW';

  }
});