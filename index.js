const HourEl = document.getElementById("Hour");
const MinuteEl = document.getElementById("Minutes");
const SecondsEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");
function ubdateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s


    HourEl.innerText = h;
    MinuteEl.innerText = m;
    SecondsEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
        ubdateclock();
    }, 1000)
}

ubdateclock();
const analogclock = document.getElementById("button");

button.addEventListener('click', () => {
    window.open('index2.html');
});
