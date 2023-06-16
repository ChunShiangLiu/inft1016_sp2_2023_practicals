// Function to toggle between light and dark mode
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
  