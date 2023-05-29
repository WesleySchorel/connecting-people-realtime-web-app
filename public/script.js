function scrollFunction() {
    const element = document.getElementById("info");
    element.scrollIntoView({behavior: "smooth"});
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }