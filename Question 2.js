// Daniel Davis, Question 2, Write a program that shows both ways of declaring a function.

var flavor = false; // does something taste like a zombie?

function taste(object) { // function that tastes something to see if it is a zombie
  if (flavor == false) { // if it's not a zombie flavor
    console.log('Does not tast like a zombie'); // tell me so
  }// end of if
  else if(flavor == true) { // if it does taste like zombie
    console.log('BANG. He is dead'); // shoot the zombie
  }// end of else if
  else{ // default case
    console.log('needs more salt'); // put more salt on it
  }// end of default case
}// end of taste

var zombie? = function Zombie() { // test to see if it is a zombie and do nothing instead of shooting it
  if (flavor == false;) { // if not a zombie
    return false; // let me know
  }// end of if
  else if (flavor == true){ // if it is a zombie
   return true; // let me know
  }// end of else if
}// end of Zombie function
