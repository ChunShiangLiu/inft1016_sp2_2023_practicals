// Get elements
const modeButton = document.getElementById("modeButton");
const nameInput = document.getElementById("nameInput");
const heading = document.getElementById("heading");
const dateTime = document.getElementById("dateTime");

// Check local storage for saved data
if (localStorage.getItem("mode") === "dark") {
    enableDarkMode();
}

const savedName = localStorage.getItem("name");
if (savedName) {
    nameInput.value = savedName;
    heading.textContent = `Welcome, ${savedName}!`;
}

// Event listeners
modeButton.addEventListener("click", toggleMode);
nameInput.addEventListener("input", updateName);

// Function to toggle dark mode
function toggleMode() {
    if (document.body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}
function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
}

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
}

// Function to update name
function updateName() {
    const newName = nameInput.value;
    heading.textContent = `Welcome, ${newName}!`;
    localStorage.setItem("name", newName);
}

// Function to update date and time
function updateTime() {
    const now = new Date();
    dateTime.textContent = now.toLocaleString();
}

// Update date and time every second
setInterval(updateTime, 1000);

function displayDateTime() {
  const dateTimeElement = document.getElementById('datetime');
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  dateTimeElement.textContent = dateTimeString;
}

// Call the function to display the date and time when the page loads
displayDateTime();

function updateHeading() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userName = urlParams.get('user_name');
  const headingElement = document.getElementById('heading');
  headingElement.textContent = `Hello, ${userName}`;
}
window.onload = function() {
  const themePreference = localStorage.getItem('theme');
  if (themePreference === 'dark') {
    // Apply dark theme styles
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    // Apply light theme styles (default)
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Apply the new theme styles
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Store the theme preference in local storage
  localStorage.setItem('theme', newTheme);
}
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('user_name')) {
    const userName = urlParams.get('user_name');
    localStorage.setItem('user_name', userName);
  } else {
    const storedUserName = localStorage.getItem('user_name');
    if (storedUserName) {
      // Use the stored user name
      document.getElementById('name-input').value = storedUserName;
    }
  }
}
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('user_name')) {
    const userName = urlParams.get('user_name');
    localStorage.setItem('user_name', userName);
  }
  // Rest of the code...
}



