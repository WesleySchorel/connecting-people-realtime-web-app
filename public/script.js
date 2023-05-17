const details = document.querySelectorAll("details");

if (document.querySelector('details')) {
    // Fetch all the details elements
    const details = document.querySelectorAll('details');

    // Add onclick listeners
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            // Close all details that are not targetDetail
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });
}
function scrollFunction() {
  const element = document.getElementById("info");
  element.scrollIntoView({behavior: "smooth"});
}

console.log(window.navigator.onLine)

if (window.navigator.onLine == true) {
    document.querySelector(".offline").style.display="none";
    document.querySelector(".online").style.display="block";
} else {
    document.querySelector(".online").style.display="none";
    document.querySelector(".offline").style.display="flex";
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})