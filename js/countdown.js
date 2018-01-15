let confDate = new Date("March 10, 2018 09:00:00").getTime();
let earlyBird = new Date("January 26, 2018 00:00:00").getTime();

let timeTo = (date) => {
    let result = {},
        now = new Date().getTime(),
        dt = date - now;
    
    result.d = Math.floor(dt / (1000 * 60 * 60 * 24)),
    result.h = Math.floor((dt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    result.m = Math.floor((dt % (1000 * 60 * 60)) / (1000 * 60)),
    result.s = Math.floor((dt % (1000 * 60)) / 1000);
    if (dt < 0) return 0;
    return result;
};

let countDown = setInterval(() => {
    document.getElementById("countdown").innerHTML = timeTo(confDate).d + " days, " + (timeTo(confDate).h >= 10 ? timeTo(confDate).h : ("0" + timeTo(confDate).h)) + "h " + (timeTo(confDate).m >= 10 ? timeTo(confDate).m : ("0" + timeTo(confDate).m)) + "m " + (timeTo(confDate).s >= 10 ? timeTo(confDate).s : ("0" + timeTo(confDate).s)) + "s until NBTC";
    document.getElementById("earlybird").innerHTML = timeTo(earlyBird).d + " days, " + (timeTo(earlyBird).h >= 10 ? timeTo(earlyBird).h : ("0" + timeTo(earlyBird).h)) + "h " + (timeTo(earlyBird).m >= 10 ? timeTo(earlyBird).m : ("0" + timeTo(earlyBird).m)) + "m " + (timeTo(earlyBird).s >= 10 ? timeTo(earlyBird).s : ("0" + timeTo(earlyBird).s)) + "s left to buy earlybird tickets!";
}, 1000);