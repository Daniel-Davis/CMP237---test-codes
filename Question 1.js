// Daniel Davis, questions 1, Write a program that declares a variable, assigns it a value, and then somehow changes it by using one of the basic control structures. Be sure to print the result./

var Capouch = true; // holds value for testing variable
var string = 'Zombie'; // holds output value

console.log(string); // prints out Zombie

if(Capouch == true) { // if the zombie is capouch
  string = 'Zombie Capouch'; // tell me it is capouch
  console.log(string); // then print it out
}// end of if statement
else { // otherwise
  string = 'unknown zombie'; // just say it's a different zombie
  console.log(string + 'BANG!'); // then shoot zombie
} // end of else
