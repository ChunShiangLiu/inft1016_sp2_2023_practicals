const mode = "light";
const name = "";

const toggleMode = () => {
if (mode === "light") {
mode = "dark";
} else {
mode = "light";
}

document.getElementById("mode-toggle").innerHTML = `
<button id="light-mode">Light Mode</button>
<button id="dark-mode">Dark Mode</button>
`;

document.querySelector(`[id="${mode}-mode"`).classList.add("active");
document.querySelector(`[id="${!mode}-mode"`).classList.remove("active");
};

const getName = () => {
name = document.getElementById("name").value;
};

const getDateAndTime = () => {
const date = new Date();
const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

document.getElementById("date-time").innerHTML = `
Current Date and Time: ${dateString} ${timeString}
`;
};

document.addEventListener("DOMContentLoaded", () => {
getName();
getDateAndTime();

document.getElementById("light-mode").addEventListener("click", toggleMode);
document.getElementById("dark-mode").addEventListener("click", toggleMode);
});
