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
  