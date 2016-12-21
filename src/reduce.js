// Proper Reduce syntax:

// [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
//   return accumulator + currentValue;
//  }, 0);

// Objective
// Given an Array of strings, use Array reduce to create an
// object that contains the number of times each string occured in the
// array. Return the object directly (no need to console.log).

// create a function called countWords passing in inputWords
// create a new variable titled summedWords making the passed in array and empty object
// take the inputted words and reduce them, pass in the accumulator(prev) and the current word (curr)
// if the current word has not been in the object summedWords
// return this word and make it equal to 1
// if it has been in the object summedWords
// add to it one at a time
// return the current word
// return the new object

  function countWords(inputWords) {
    let result = {};
    inputWords.reduce(function(prev, curr) {
      if (!result[curr]) {
          return result[curr]=1
      } else {
          return result[curr]++
      }
      return curr;
    }, 0);
    return result;
  }

    module.exports = countWords
