let example2 = document.getElementById("example-1");
example2.style.display = "none";
document.getElementById("img1").addEventListener("click", function () {
  example1.style.display = "block";
});
document.getElementById("img1").addEventListener("dblclick", function () {
  example1.style.display = "none";
});

let example2 = document.getElementById("example2");
example2.style.display = "none";
document.getElementById("img2").addEventListener("click", function () {
   example2.style.display = "block";
});
document.getElementById("img2").addEventListener("dblclick", function () {
  example2.style.display = "none";
});

let article3 = document.getElementById("article3");
article3.style.display = "none";
document.getElementById("art3").addEventListener("click", function () {
  article3.style.display = "block";
});
document.getElementById("art3").addEventListener("dblclick", function () {
  article3.style.display = "none";
});
