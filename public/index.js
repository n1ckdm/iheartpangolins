let sadNum = 0;
let pageOpen = (new Date()).getTime();

function update() {
    let now = new Date(),
    then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0),
    diff = (now.getTime() - then.getTime())/1000;
    diff2 = (now.getTime() - pageOpen)/1000;
    pdr_sec = 300/(3600*24)
    document.getElementById("sad").innerText = (diff2*pdr_sec).toFixed(2);
    document.getElementById("sad2").innerText = (diff*pdr_sec).toFixed(2);
}
setInterval(update, 1000);