// Task
//
//Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied
//users exist in the original list of users.
//
// You only need to check that the ids match.



//create a function checkUsersValid with validUsers passed in
// return a function allUsersValid with submittedUsers passed in
//return every submitted user who submitted
//return every user who submitted and is valid
//if the id of the valid user equals the id of the submitted user
//show the list of users


  checkUsersValid = function(validUsers) {
    return allUsersValid = function(submittedUsers) {
      return submittedUsers.every(function(submit) {
        return validUsers.some(function(valid) {
          if (valid.id === submit.id) {
            return true;
          }
        })
      })
    }
  }

    module.exports = checkUsersValid
