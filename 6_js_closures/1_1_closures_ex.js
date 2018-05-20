/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
*/

function specialMultiply(a,b){
  if (arguments.length === 0){
    return a*b;
  } else {
    return (b)=> {
      return a*b;
    }
  }
}
console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // function(){}....
console.log("============")
console.log("============")
/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.
In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
You will have to make use of closure to solve this problem.
*/

function guessingGame(amount){
    var guesses = 0;
    var answer = Math.floor(Math.random()*11)
    var isFinished = false;
    return (guess) => {
      ++guesses;
      if (!isFinished){
        if (guesses == amount) {
          isFinished = true;
          return "No more guesses the answer was " + answer;
        } else if(guess < answer) {
          return "You're too low!";
        } else if (guess > answer) {
          return "You're too high!";
        } else if (guess == answer) {
          isFinished = true;
          return "You got it!"
        }
      } else {
        return "You are all done playing!";
      }
    }
}

var game = guessingGame(5);
console.log(game(2))
console.log(game(3))
console.log(game(4))
console.log(game(9))
console.log(game(7))
console.log(game(1))
console.log("============")
console.log("============")
var game2 = guessingGame(4);
console.log(game2(2))
console.log(game2(3))
console.log(game2(4))
console.log(game2(9))
console.log(game2(7))
console.log(game2(1))