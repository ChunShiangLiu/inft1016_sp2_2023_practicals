function toggleImg(imgName) {
    document.getElementById("displayImage").src = imgName;
}

function changeText() {
    var inputValue = document.getElementById('userName').value;
    document.getElementById('displayUserName').innerText = inputValue;
  }
