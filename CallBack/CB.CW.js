// //CallBack function

// function greetUser(userName, callback){
//   let message = "Good morning, " + userName

//   callback(message)
// }
// function logMessage(message){
//   console.log(message)
// }
// greetUser("Alice", logMessage)

const getUser = (username, callback) => {
  let message = "Good Morning, " + username;
  callback(message);
};
const logMessage = (message) => {
  console.log(message);
};

greetUser();
