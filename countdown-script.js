
    (function countdown() {
        var EventDate = {
            day: 31,
            month: 12,
            year: 2021
        };
        var currentTime = new Date().getTime();
        var eventTime = new Date(EventDate.year, EventDate.month, EventDate.day).getTime();

        var remTime = eventTime - currentTime;


        var s = Math.floor(remTime / 1000);
        var m = Math.floor(s / 60);
        var h = Math.floor(m / 60);
        var d = Math.floor(h / 24);

        h %= 24;
        m %= 60;
        s %= 60;

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        document.getElementById("hours").textContent = h;
        document.getElementById("minutes").textContent = m;
        document.getElementById("seconds").textContent = s;

        setTimeout(countdown, 1000);
    })();

    document.querySelectorAll('.countdown-unit').forEach(unit => {
        unit.classList.add('visible');
    });
