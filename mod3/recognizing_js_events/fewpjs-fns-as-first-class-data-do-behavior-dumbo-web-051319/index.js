/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const time = parseInt(timeString.split(":")[0]);
  let greeting = '';
  if (time < 12) {
    greeting = "Good Morning";
  } else if (time >= 12 && time < 17) {
    greeting = "Good Afternoon";
  } else if (time >= 17 && time <= 24) {
    greeting = "Good Evening";
  } else {
    greeting = "Please enter a real time";
  }
  return greeting;
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.querySelector("#greeting").innerText = string;
  alert(string);
}