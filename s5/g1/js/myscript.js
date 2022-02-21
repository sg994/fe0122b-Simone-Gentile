// data attuale
/*var dataAttuale = new Date();
        console.log(dataAttuale);
        alert(dataAttuale);

        var a = new Date("january 01, 2021");
        var b = a.getDate();
        console.log(b);

        var c = new Date("april 22, 2000 22:15:18");
        var d = c.getHours();
        var e = c.getMinutes();
        var f = c.getSeconds();
        console.log(d + '' + e + '' + f);

        var millisecondi = Date.parse();
        console.log(millisecondi);

        var iso = new Date('2019-03T12:06:53');
        document.write(iso);*/

//timer
setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("boom").innerHTML = date.toLocaleTimeString();
}