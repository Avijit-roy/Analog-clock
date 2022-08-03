let a;
let secondHand = document.querySelector("#sec");
let minHand = document.querySelector("#min");
let hourHand = document.querySelector("#hr");
setInterval(() => {
  a = new Date();
  var getSeconds = a.getSeconds() / 60;
  var getMinutes = a.getMinutes() / 60;
  var getHours = a.getHours() / 12;
  secondHand.style.transform = "rotate(" + getSeconds * 360 + "deg)";
  minHand.style.transform = "rotate(" + getMinutes * 360 + "deg)";
  hourHand.style.transform = "rotate(" + getHours * 360 + "deg)";
  document.getElementById("current-date").innerHTML = a.toDateString();
  document.getElementById("cur-sec").innerHTML = a.getSeconds();
}, 1000);
