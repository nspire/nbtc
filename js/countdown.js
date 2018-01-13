let confDate = new Date("March 10, 2018 09:00:00").getTime();

let countDown = setInterval(() => {
    let now = new Date().getTime(),
        dt = confDate - now,
        d = Math.floor(dt / (1000 * 60 * 60 * 24)),
        h = Math.floor((dt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m = Math.floor((dt % (1000 * 60 * 60)) / (1000 * 60)),
        s = Math.floor((dt % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = d + " days, " + h + "h "+ m + "m " + s + "s";
    if (dt < 0) {
        clearInterval(countDown);
        document.getElementById("countdown").innerHTML = "";
    }
}, 1000)