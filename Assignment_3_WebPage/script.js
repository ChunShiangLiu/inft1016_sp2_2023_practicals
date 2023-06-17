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

