const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz {
    constructor(type, questions, results) {
        //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
        this.type = type;

        //Массив с вопросами
        this.questions = questions;

        //Массив с возможными результатами
        this.results = results;

        //Количество набранных очков
        this.score = 0;

        //Номер результата из массива
        this.result = 0;

        //Номер текущего вопроса
        this.current = 0;
    }

    Click(index) {
        //Добавляем очки
        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;

        //Если было добавлено хотя одно очко, то считаем, что ответ верный
        if (value >= 1) {
            correct = index;
        } else {
            //Иначе ищем, какой ответ может быть правильным
            for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                if (this.questions[this.current].answers[i].value >= 1) {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }

    //Переход к следующему вопросу
    Next() {
        this.current++;

        if (this.current >= this.questions.length) {
            this.End();
        }
    }

    //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
    End() {
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;
            }
        }
    }
}

//Класс, представляющий вопрос
class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }

    Click(index) {
        return this.answers[index].value;
    }
}

//Класс, представляющий ответ
class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

//Класс, представляющий результат
class Result {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }

    //Этот метод проверяет, достаточно ли очков набрал пользователь
    Check(value) {
        if (this.value <= value) {
            return true;
        } else {
            return false;
        }
    }
}

//Массив с результатами
const results = [
    new Result("Вам многому нужно научиться", 0 || 2 || 3),
    new Result("Вы уже неплохо разбираетесь", 3 || 4 || 5),
    new Result("Ваш уровень выше среднего", 6 || 7 || 8 || 9),
    new Result("Вы в совершенстве знаете тему", 10),
];
const questions = [
    new Question("Помимо автомобилей и мотоциклов, фирма БМВ выпускает?", [
        new Answer("Велосипеды", 1),
        new Answer("Яхты", 0),
        new Answer("Скутеры", 0),
        new Answer("Космические корабли", 0),
    ]),
    new Question("Какой девиз у бренда БМВ?", [
        new Answer("Для тех кто за рулем", 0),
        new Answer("С удовольствием за рулем", 1),
        new Answer("Нам есть что предложить", 0),
        new Answer("Ваще огонь", 0),
    ]),
    new Question("Торговая марка БМВ зарегистрирована", [
        new Answer("В 1917 году", 1),
        new Answer("В 1902 году", 0),
        new Answer("В 1913 году", 0),
        new Answer("В 1855 году", 0),
    ]),
    new Question("Логотип БМВ изначально представлял собой", [
        new Answer("Белый пропеллер", 0),
        new Answer("Клеверный лист на белом фоне", 0),
        new Answer("Белый пропеллер на фоне неба ", 1),
        new Answer("Белый диск в черном ободе", 0),
    ]),
    new Question("С 1917 года БМВ начинает производство", [
        new Answer("Лодочных моторов", 0),
        new Answer("Авиационных двигателей", 1),
        new Answer("Двигателей для скутеров", 0),
        new Answer("Двигателей для подводных лодок", 0),
    ]),
    new Question("При обозначении марок автомобилей БМВ, первая цифра означает", [
        new Answer("Класс транспортного средства", 1),
        new Answer("Объем двигателя", 0),
        new Answer("Регион производства конкретной марки", 0),
        new Answer("Расход топлива", 0),
    ]),
    new Question("В каком году БМВ выпускает свой первый автомобиль?", [
        new Answer("В 1913 году", 1),
        new Answer("В 1930 году", 0),
        new Answer("В 1932 году", 0),
        new Answer("В 1900 году", 0),
    ]),
    new Question("В каком году БМВ выпускает свой первый автомобиль?", [
        new Answer("В 1913 году", 0),
        new Answer("В 1930 году", 1),
        new Answer("В 1932 году", 0),
        new Answer("В 1900 году", 0),
    ]),
    new Question("Какой автомобиль вывел компанию БМВ из кризиса? ", [
        new Answer("BMW 1500", 1),
        new Answer("BMW 2100", 0),
        new Answer(" BMW 1501", 0),
        new Answer("BMW M3", 0),
    ]),
    new Question("Как назывался первый автомобиль БМВ?", [
        new Answer("Dixi", 1),
        new Answer("BMW 1500", 0),
        new Answer("BMW 2100", 0),
        new Answer("BMW X5 M", 0),
    ]),
    new Question("Где собираются автомобили БМВ?", [
        new Answer("В Германии", 1),
        new Answer("Только на территории США ", 0),
        new Answer("Во Франции", 0),
        new Answer("В Казакстане", 0),
    ]),
];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update() {
    //Проверяем, есть ли ещё вопросы
    if (quiz.current < quiz.questions.length) {
        //Если есть, меняем вопрос в заголовке
        headElem.innerHTML = quiz.questions[quiz.current].text;

        //Удаляем старые варианты ответов
        buttonsElem.innerHTML = "";

        //Создаём кнопки для новых вариантов ответов
        for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.appendChild(btn);
        }

        //Выводим номер текущего вопроса
        pagesElem.innerHTML = quiz.current + 1 + " / " + quiz.questions.length;

        //Вызываем функцию, которая прикрепит события к новым кнопкам
        Init();
    } else {
        //Если это конец, то выводим результат
        buttonsElem.innerHTML = "";
        headElem.innerHTML = quiz.results[quiz.result].text;
        pagesElem.innerHTML = "Очки: " + quiz.score;
    }
}

function Init() {
    //Находим все кнопки
    let btns = document.getElementsByClassName("button");

    for (let i = 0; i < btns.length; i++) {
        //Прикрепляем событие для каждой отдельной кнопки
        //При нажатии на кнопку будет вызываться функция Click()
        btns[i].addEventListener("click", function (e) {
            Click(e.target.getAttribute("index"));
        });
    }
}

function Click(index) {
    //Получаем номер правильного ответа
    let correct = quiz.Click(index);

    //Находим все кнопки
    let btns = document.getElementsByClassName("button");

    //Делаем кнопки серыми
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = "button button_passive";
    }

    //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
    if (quiz.type == 1) {
        if (correct >= 0) {
            btns[correct].className = "button button_correct";
        }

        if (index != correct) {
            btns[index].className = "button button_wrong";
        }
    } else {
        //Иначе просто подсвечиваем зелёным ответ пользователя
        btns[index].className = "button button_correct";
    }

    //Ждём секунду и обновляем тест
    setTimeout(Update, 1000);
}
