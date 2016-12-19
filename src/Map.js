// Convert the following code from a for-loop to Array map:
//
//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }
//
//     module.exports = doubleAll
//


//Boilerplate

    function doubleAll(numbers) {
      var result = [];
      numbers.map(function(number) {
        result.push(number * 2);//the push method is only for arrays. It adds one or more elements onto the end of an array. 
      });
      return result;
    }

    module.exports = doubleAll
