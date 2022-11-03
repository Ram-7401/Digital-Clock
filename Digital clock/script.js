function Time() {
 var date = new Date();
 var hour = date.getHours();
 var minute = date.getMinutes();
 var second = date.getSeconds();
 var period = "";
 if (hour >= 12) {
 period = "PM";
 } else {
 period = "AM";
 }
 hour = update(hour);
 minute = update(minute);
 second = update(second);
 document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
 setTimeout(Time, 1000);
}
function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}
Time();
var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
