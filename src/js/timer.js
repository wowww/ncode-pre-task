function updateTimer() {
  let endTime = Date.parse("Nov 26, 2020 17:00:00");
  let now = new Date();
  let startTime = Date.parse("Oct 7, 2020 11:00:00");
  let diff = endTime - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;
  percent = (now - startTime)*100 / (endTime-startTime);

  document.getElementById("timer")
    .innerHTML =
    '<div class="bar">' + '<span class="bar-color"><span></div>' +
    '<div>' + d + '<span>일</span></div>' +
    '<div>' + h + '<span>시간</span></div>' +
    '<div>' + m + '<span>분</span></div>' +
    '<div>' + s + '<span>초</span></div>';

  document.querySelector('.bar-color').style.width = `${percent}%`;
}
setInterval('updateTimer()', 1000);