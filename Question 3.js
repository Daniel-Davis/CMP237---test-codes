// Daniel Davis, Question 3, Write a program that declares an array of objects, and then does something to extract (and print) information of any sort from that array.

var human = [var eyes=true, var legs=true, var organs=true, var brain=true, var arms=true]; // creates an human array with different body parts

function eat(array) { // function that eats the person
  for (var i=0, i<=array.length, ++i) { // looks at each element in the array
    if ([i] == true) { // if it is there
      [i] == false; // eat that shit up!
    }// end of if statement
  } // end of for loop
} // end of eat function

function leftOvers(array) { // tests to see if the body is dead or alive and stores it in a variable
  for (var i=0, i<=array.length, ++i) { // looks at all the body parts
    if ([i] == true) {
      console.log([i] + ' have not been eaten')
    }// end of if
    else if ([i] == false) {
      console.log([i] + ' have been eaten')
    }// end of else if
  }// end of for loop
}// end of testDead

console.log(human); // makes sure we got a live one

eat(human); // a zombie eats the human

leftOvers(human); // tells me what's left over(should be nothing)
