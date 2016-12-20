// Use Arrayfilter to write a function called getShortMessages.
//
// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
//
// The function should return an array containing the messages themselves, without their containing object.



function getShortMessages(messages) {
    let filteredArray =  messages.filter(function(word) { //redefine messages as filteredArray with word filtered
      if (word.message && word.message.length < 50) {  // place a 50 word limit on the words within the message as well as the length of the words within the message
        return true;   //if they meet the filter criterion then show them
      }
    })

    return filteredArray.map(function(word) { // map through each word in the meesage within the filtered array
      return word.message;  //show each word within the message
    })
  }


    module.exports = getShortMessages
