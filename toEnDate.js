/**
 * Created by DT274 on 2016/4/18.
 */


//function toEnDate(enDate) {
//    var strs = enDate.split("\-");
//    console.log(strs)
//    var year = strs[2];
//    var date = strs[1];
//    var month = strs[0];
//    return String(year + "-" + month + "-" + date);
//}

function toEnDate(cnDate){
    var strs = cnDate.split("\-");
    var year = strs[2];
    var month = strs[0];
    var date = strs[1];
    return String(month + "-" + date + "-" + year);
}

console.log(toEnDate("04-18-2016"))

function toCnDate(enDate) {
    var strs = enDate.split("\-");
    var year = strs[2];
    var date = strs[1];
    var month = strs[0];
    return String(year + "-" + month + "-" + date);
}
console.log(toCnDate("04-18-2016"))

function enDateFomater(time) {
    var dt = new Date(time);
    console.log(dt)
    var m = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec");
    var d = new Array("st", "nd", "rd", "th");

    var w = new Array("Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat");

    var mn = dt.getMonth();
    var wn = dt.getDay();
    var dn = dt.getDate();
    var dns;

    console.log(mn,wn,dn)
    if (((dn % 10) < 1) || ((dn % 10) > 3)) {
        dns = d[3];
    } else {
        dns = d[(dn % 10) - 1];
        if ((dn == 11) || (dn == 12)) {
            dns = d[3];
        }
    }
    return {
        year : dt.getFullYear(),
        month : m[mn],
        dayNoSuffix : dn,
        day : dn + dns,
        week : w[wn]
    }
    /*
     * document.write(m[mn] + " " + dn + dns + " " + w[wn - 1] + " " +
     * dt.getFullYear());
     */
}

function enDateDiff(checkIn,checkOut){
    return cnDateDiff(toCnDate(checkIn),toCnDate(checkOut));
}

function cnDateDiff(checkIn, checkOut) {
    var checkInTime = new Date(checkIn).getTime();
    var checkOutTime = new Date(checkOut).getTime();
    var dayTimes = checkOutTime - checkInTime;
    return parseInt(dayTimes / (1000 * 60 * 60 * 24));
}


console.log(enDateFomater(toEnDate("04-01-2016")))

console.log('====================');
console.log(enDateDiff("04-18-2016","04-20-2016"))