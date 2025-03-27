function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    return true;
  } else {
    x.className = "topnav";
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// var blink = document.getElementById("blink");
// setInterval(function () {
//   blink.style.opacity = blink.style.opacity == 0 ? 1 : 0;
// }, 1500);
