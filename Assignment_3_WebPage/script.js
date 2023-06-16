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
  <span id="current-date-time"></span>

  const currentDateElement = document.getElementById("current-date-time");

function updateCurrentDateTime() {
  const currentDate = new Date();
  currentDateElement.textContent = currentDate.toLocaleString();
}
  
  url: "https://openverse.org/image/f1230075-5ab6-45c3-a027-87bf0874a714?q=trees",
  info: '"Corfu - Sept 2005 - Ancient Olive Trees" by Gareth1953 All Right Now is licensed under CC BY 2.0. To view a copy of this license, visit <a href="https://creativecommons.org/licenses/by/2.0/?ref=openverse">https://creativecommons.org/licenses/by/2.0/?ref=openverse</a>.'
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
}
const toggleThemeButton = document.querySelector("button[data-toggle-theme]");
const rootElement = document.documentElement;

toggleThemeButton.addEventListener("click", function () {
  if (rootElement.getAttribute("data-theme") === "dark") {
    rootElement.setAttribute("data-theme", "light");
  } else {
    rootElement.setAttribute("data-theme", "dark");
  }
});
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
  function loadThemePreference() {
    // Check if the 'theme' key exists in the local storage
    if (localStorage.getItem('theme')) {
      // Retrieve the stored theme preference
      const storedTheme = localStorage.getItem('theme');
  
      // Update the CSS class of the <body> tag based on the stored theme preference
      document.body.classList.toggle('dark-theme', storedTheme === 'dark');
    }
  }
  function storeThemePreference() {
    // Get the current theme preference based on the CSS class of the <body> tag
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  
    // Store the theme preference in the local storage
    localStorage.setItem('theme', currentTheme);
  }
  function updateHeadingFromQueryString() {
    // Get the query string from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
  
    // Get the value of the 'user_name' parameter from the query string
    const userName = urlParams.get('user_name');
  
    // Check if the 'user_name' parameter exists in the query string
    if (userName) {
      // Store the user name in the local storage
      localStorage.setItem('user_name', userName);
    } else {
      // Check if the 'user_name' key exists in the local storage
      if (localStorage.getItem('user_name')) {
        // Retrieve the stored user name
        const storedUserName = localStorage.getItem('user_name');
  
        // Update the heading with the stored user name
        const headingElement = document.getElementById('heading');
        headingElement.textContent = `Hello, ${storedUserName}`;
      }
    }
  }
  