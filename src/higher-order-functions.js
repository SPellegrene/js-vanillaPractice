// Task
//
// Implement a function that takes a function as its first argument, a number num as its second argument,
// then executes the passed in function num times.
//
// Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.
//

//Boilerplate

    function repeat(operation, num) {
      if(num===0) return;
      operation();
      return repeat(operation, --num);
    }

    // Do not remove the line below
    module.exports = repeat
