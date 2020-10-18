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

  // Form

  let message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так...",
  };

  let form = document.querySelector(".main-form"),
    input = form.getElementsByTagName("input"),
    statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");

    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener("readystatechange", function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  });
  //slider
  let slideIndex = 1; //параметр текущего слайда// count
  let slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1; //чтобы после последней картинки переключалась на первую
    }
    if (n < 1) {
      slideIndex = slides.length; //если с первой то на последнюю
    }
    slides.forEach((item) => (item.style.display = "none")); //этот способ лучше более современно
    // for (let i = 0; i < slides.length; i++) {
    //   slides[i].style.display = "none";
    // } // но можно и так
    dots.forEach((item) => item.classList.remove("dot-active"));
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  prev.addEventListener("click", function () {
    plusSlides(-1);
  });
  next.addEventListener("click", function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains("dot") &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });
  //calculator
  let persons = document.querySelectorAll(".counter-block-input")[0],
    restdays = document.querySelectorAll(".counter-block-input")[1],
    place = document.querySelector("#select"),
    totalValue = document.querySelector("#total"),
    personsSum = 0,
    daysSum = 0,
    total = 0;
  totalValue.textContent = 0;

  persons.addEventListener("change", function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;
    if (restdays.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restdays.addEventListener("change", function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;
    if (persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  place.addEventListener("change", function () {
    if (restdays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      let a = total; //техническая переменная избавляет от постоянного умножения total
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
});
