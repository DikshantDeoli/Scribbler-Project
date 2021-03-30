
var modal = document.getElementById("myModal");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal1 = document.getElementById("myModal1");

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

var sp = document.getElementById("redirect");
sp.onclick = function () {
  modal.style.display = "none";
  modal1.style.display = "block";
};

var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("createp");

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};