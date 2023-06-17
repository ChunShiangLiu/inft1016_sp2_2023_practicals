// Function to toggle the theme
function toggleTheme() {
    const root = document.querySelector(':root');
    const currentTheme = root.getAttribute('data-theme');
  
    // Toggle the theme attribute
    if (currentTheme === 'light') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }
  
  // Function to display current date and time
  function displayDateTime() {
    const currentDate = new Date();
    const dateTimeElement = document.getElementById('datetime');
    dateTimeElement.textContent = currentDate.toLocaleString();
  }
  
  // Run the displayDateTime function when the page loads
  window.addEventListener('load', displayDateTime);
  function updateHeading() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userName = urlParams.get('user_name');
    const greetingElement = document.getElementById('greeting');
  
    if (userName) {
      greetingElement.textContent = `Hello, ${userName}`;
    }
  }
    