window.onscroll = function () {
  let dateAid = new Date("Sep 21, 2024 17:28:50");
  let counter = setInterval(() => {
    let datenow = new Date();
    let countdate = dateAid - datenow;
    let days = Math.floor(countdate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (countdate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((countdate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countdate % (1000 * 60)) / 1000);

    if (days < 10) {
      document.querySelector(".days").innerHTML = `0${days}`;
    } else {
      document.querySelector(".days").innerHTML = days;
    }

    if (hours < 10) {
      document.querySelector(".hours").innerHTML = `0${hours}`;
    } else {
      document.querySelector(".hours").innerHTML = hours;
    }

    if (minutes < 10) {
      document.querySelector(".minutes").innerHTML = `0${minutes}`;
    } else {
      document.querySelector(".minutes").innerHTML = minutes;
    }

    if (seconds < 10) {
      document.querySelector(".seconds").innerHTML = `0${seconds}`;
    } else {
      document.querySelector(".seconds").innerHTML = seconds;
    }

    if (countdate <= 0) {
      clearInterval(counter);
      document.querySelector(".days").innerHTML = "00";
      document.querySelector(".hours").innerHTML = "00";
      document.querySelector(".minutes").innerHTML = "00";
      document.querySelector(".seconds").innerHTML = "00";
    }
  }, 1000);
};
