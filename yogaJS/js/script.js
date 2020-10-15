window.addEventListener("DOMContentLoaded", function () {
  //слушаем весь ДОМ и включается скрипт после загрузки
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"), //достаем ДОМ элементы
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      // прячем все остальные за первым табом
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      //  наоборот показываем все табы
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }
  info.addEventListener("click", function (event) {
    // делаем чтобы при выборе таба выскакивал и нужный контент
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //TIMER JS create the timer to deadline
  let deadline = "2020-10-17";

  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()); //parse превращает любую дату в кол-во миллисекунд
    //мы взяли дату deadline (она когда-то будет) и отняли дату  когда пользователь зашел на сайт
    //и в t лежит кол-во миллисекунд
    console.log(getDate());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor(t / (1000 * 60 * 60));
    //let hoursDay=Math.floor((t / 1000 / 60/60) % 24);
    //let days =Math.floor((t / (1000 * 60 * 60*24)));

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function setClock(id, endtime) {
    let timer = document.getElementById(id);
    let hours = timer.querySelector(".hours");
    let minutes = timer.querySelector(".minutes");
    let seconds = timer.querySelector(".seconds");
    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      function addZeroNum(num) {
        if (num <= 9) {
          return "0" + num;
        } else return num;
      }
      hours.textContent = addZeroNum(t.hours);
      minutes.textContent = addZeroNum(t.minutes);
      seconds.textContent = addZeroNum(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }
  setClock("timer", deadline);

  //Model window

  let more = document.querySelector(".more"); //создаем переменнные
  let overlay = document.querySelector(".overlay");
  let close = document.querySelector(".popup-close");

  more.addEventListener("click", function () {
    // слушаем и обращаемся к стилям (уже созданным в css)
    overlay.style.display = "block"; //при клике вызываем модальное окно
    this.classList.add("more-splash");
    //если закзчик не хочет чтобы страница двигалась при открытом модальном окне
    document.body.style.overflow = "hidden";
  });
  close.addEventListener("click", function () {
    overlay.style.display = "none"; //при клике на крестик закрываем окно , но только ужене через this
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
});
