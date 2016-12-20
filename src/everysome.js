// Task
//
//Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied
//users exist in the original list of users.
//
// You only need to check that the ids match.



function checkUsersValid(validUsers) { //create a function checkUsersValid with goodUsers passed in
      return function allUsersValid(submittedUsers) { // return a function allUsersValid with submittedUsers passed in
        return submittedUsers.every(function(submit){ //return every submitted user who submitted
          return validUsers.some(function(valid) { //return every user who submitted and is valid
            if( valid.id === submit.id ) { //if the id of the valid user equals the id of the submitted user
              return true; //show the list of users
            }
          })
        });
      };
    };

    module.exports = checkUsersValid
