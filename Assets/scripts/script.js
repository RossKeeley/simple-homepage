// function myFunction() {
//   console.log("hello");
//   var x = document.getElementById("menu");
//   if (!x.className) {
//     x.style.display = "none";
//     x.classList.add("accordion");
//     console.log("add: " + x.className);
//   } else {
//     x.classList.remove("accordion");
//     x.style.display = "block";
//     console.log("remove: " + x.className);
//   }
// }

// function myFunction() {
//   console.log("hello");
//   var x = document.getElementById("menu");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//     console.log(x.style.display);
//   } else {
//     x.style.display = "none";
//     console.log(x.style.display);
//   }
// }

function myFunction() {
  var x = document.getElementById("nav-menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
