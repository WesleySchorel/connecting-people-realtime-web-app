function scrollFunction() {
  const element = document.getElementById("info");
  element.scrollIntoView({behavior: "smooth"});
}

// if (window.navigator.onLine == true) {
//     document.querySelector(".online").style.display="grid";
// } else {
//     document.querySelector(".online").style.display="none";
//     document.querySelector(".offline").style.display="flex";
// }

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})


// PROGRESS

const totalItems = 75; // Set the total number of items
const progressItems = document.getElementById("progressNumber").textContent; // Set the number of items completed
console.log(progressItems);
const progressBar = document.querySelector('.progress-fill');
const circumference = 251.2; // Adjusted circumference value
const offset = circumference - (progressItems / totalItems) * circumference;
progressBar.style.strokeDashoffset = offset;

// Update color based on value range
if (progressItems >= 0 && progressItems <= 20) {
  progressBar.style.stroke = '#FF0000';
} else if (progressItems >= 21 && progressItems <= 40) {
  progressBar.style.stroke = '#FF8000';
} else if (progressItems >= 41 && progressItems <= 60) {
  progressBar.style.stroke = '#FFFF00';
} else if (progressItems >= 61 && progressItems <= 75) {
  progressBar.style.stroke = '#00FF00';
}

document.querySelector('.progress-value').textContent = progressItems; // Display the actual number of items