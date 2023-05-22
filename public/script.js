function scrollFunction() {
  const element = document.getElementById("info");
  element.scrollIntoView({behavior: "smooth"});
}

if (window.navigator.onLine == true) {
    document.querySelector(".online").style.display="grid";
} else {
    document.querySelector(".online").style.display="none";
    document.querySelector(".offline").style.display="flex";
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

