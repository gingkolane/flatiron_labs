// // Add your code here
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// });

// this is to send data to json server using formdata
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
 
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
 
// get data from server
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   });

// include catch, javascript does not fail silently
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
 
// method: "POST" is missing from the object below
// let configObj = {
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
 
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

function submitData(name, email) {
  // enter user data
  let formData = {
    name: name,
    email: email
  };
  
  // create obj to post
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  // post data to server
  fetch("http://localhost:3000/users", configObj);

};


//  // get data from server 

 fetch("http://localhost:3000/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    const userID = document.createElement('li');
    userID.innerText = json[0]["id"];
    document.getElementById("list").append(userID);
  })
  .catch(function(error) {
    alert("Unauthorized Access");
    const catchedError = document.createElement('p');
    catchedError.innerText = error.message;
    document.getElementById("list").append(catchedError);
    return error;
  });


  document.addEventListener('DOMContendLoaded', function)