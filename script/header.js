var modal = document.getElementById("myModal");
var btn = document.getElementById("si");

btn.onclick = function () {
    modal.style.display = "block";
};

var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("su");

btn1.onclick = function () {
    modal1.style.display = "block";
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};

var span1 = document.getElementsByClassName("close1")[0];

span1.onclick = function () {
    modal1.style.display = "none";
};