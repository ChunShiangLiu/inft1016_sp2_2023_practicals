function toggleMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

// Function to update the heading with the entered name
function updateName() {
  var name = document.getElementById("name-input").value;
  document.getElementById("heading").textContent = "Welcome, " + name + "!";
}

// Function to display the current date and time
function displayDateTime() {
  var dateTime = new Date();
  document.getElementById("date-time").textContent = "Current Date and Time: " + dateTime;
}

// Check if there is a saved name in local storage and update the heading
var savedName = localStorage.getItem("name");
if (savedName) {
  document.getElementById("name-input").value = savedName;
  updateName();
}

// Add event listeners for the button and input field
document.getElementById("toggle-button").addEventListener("click", toggleMode);
document.getElementById("name-input").addEventListener("input", updateName);

// Call the displayDateTime function to show the current date and time
displayDateTime();

// Function to change the displayed image and information
function changeImage(button) {
  var image = document.getElementById("main-image");
  var info = document.getElementById("image-info");

  // Map button text to corresponding image URL and information
  var imageMap = {
    "Japanese Garden Tree": {
      url: "https://openverse.org/image/e2049614-f186-4d07-819a-c96028b0d007?q=trees",
      info: '"Famous Japanese Garden Tree in Portland by Michael Matti" by Michael Matti is licensed under CC BY-NC 2.0. To view a copy of this license, visit <a href="https://creativecommons.org/licenses/by-nc/2.0/?ref=openverse">https://creativecommons.org/licenses/by-nc/2.0/?ref=openverse</a>.'
    },
    "Ceiba Tree": {
      url: "https://openverse.org/image/bc3938ee-5cdd-48f5-a808-a8d441904bd3?q=trees",
      info: '"Ceiba Tree" by LollyKnit is licensed under CC BY 2.0. To view a copy of this license, visit <a href="https://creativecommons.org/licenses/by/2.0/?ref=openverse">https://creativecommons.org/licenses/by/2.0/?ref=openverse</a>.'
    },
    "Ancient Olive Trees": {
      url: "https://openverse.org/image/f1230075-5ab6-45c3-a027-87bf0874a714?q=trees",
      info: '"Corfu - Sept 2005 - Ancient Olive Trees" by Gareth1953 All Right Now
    },
    "Palm tree": {
      url: "https://openverse.org/image/b7313e95-498b-4917-9a2b-7fd50f072bfe?q=trees",
      info: '"Palm tree" by F H Mira is licensed under CC BY-SA 2.0. To view a copy of this license, visit <a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse">https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse</a>.'
    },
    "Mangroves": {
      url: "https://openverse.org/image/752085e7-81bb-473c-a0fc-2f19fa977345?q=mangrove",
      info: '"Mangrove" by Brisbane City Council is licensed under CC BY 2.0. To view a copy of this license, visit <a href="https://creativecommons.org/licenses/by/2.0/?ref=openverse">https://creativecommons.org/licenses/by/2.0/?ref=openverse</a>.'
    }
  };

  // Get the image URL and information corresponding to the clicked button
  var buttonText = button.textContent;
  var imageData = imageMap[buttonText];

  // Update the image source and information
  image.src = imageData.url;
  info.innerHTML = imageData.info;
  function updateHeadingFromQueryString() {
    // Get the query string from the URL
    const queryString = window.location.search;
  
    // Create a URLSearchParams object to parse the query string
    const urlParams = new URLSearchParams(queryString);
  
    // Get the value of the 'user_name' parameter from the query string
    const userName = urlParams.get('user_name');
  
    // Get the heading element by its ID
    const headingElement = document.getElementById('heading');
  
    // Update the heading with the user's name
    headingElement.textContent = `Hello, ${userName}`;
  }