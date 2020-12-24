const create_test = document.getElementById("create_test");
const bmw = document.getElementById("bmw");
const wrapper = document.querySelector(".wrapper");
const change_test = document.querySelector(".change_test");

const beginBMWTest = () => {
    change_test.style.display = "none";
    wrapper.style.display = "table";
    testBMW();
};
const beginYourTest = () => {
    yourTest();
};
bmw.onclick = beginBMWTest;
change_test.onclick = beginYourTest;

const testBMW = () => {
    const headElem = document.getElementById("head");
    const buttonsElem = document.getElementById("buttons");
    const pagesElem = document.getElementById("pages");

    class Test {
        constructor(type, questions, results) {
            this.type = type;

            this.questions = questions;

            this.results = results;

            this.score = 0;

            this.result = 0;

            this.current = 0;
        }

        Click(index) {
            let value = this.questions[this.current].Click(index);
            this.score += value;

            let correct = -1;

            if (value >= 1) {
                correct = index;
            } else {
                for (
                    let i = 0;
                    i < this.questions[this.current].answers.length;
                    i++
                ) {
                    if (
                        this.questions[this.current].answers[i]
                            .value >= 1
                    ) {
                        correct = i;
                        break;
                    }
                }
            }

            this.Next();

            return correct;
        }

        Next() {
            this.current++;

            if (this.current >= this.questions.length) {
                this.End();
            }
        }

        End() {
            for (let i = 0; i < this.results.length; i++) {
                if (this.results[i].Check(this.score)) {
                    this.result = i;
                }
            }
        }
    }

    class Question {
        constructor(text, answers) {
            this.text = text;
            this.answers = answers;
        }

        Click(index) {
            return this.answers[index].value;
        }
    }

    class Answer {
        constructor(text, value) {
            this.text = text;
            this.value = value;
        }
    }

    class Result {
        constructor(text, value) {
            this.text = text;
            this.value = value;
        }

        Check(value) {
            if (this.value <= value) {
                return true;
            } else {
                return false;
            }
        }
    }

    const results = [
        new Result("Вам многому нужно научиться", 0 || 2 || 3),
        new Result("Вы уже почти прошли", 3 || 4 || 5 || 6),
        new Result(
            "Ваш уровень выше среднего и вы прошли тест",
            7 || 8 || 9
        ),
        new Result("Вы в совершенстве знаете тему", 10),
    ];
    const questions = [
        new Question(
            "Помимо автомобилей и мотоциклов, фирма БМВ выпускает?",
            [
                new Answer("Велосипеды", 1),
                new Answer("Яхты", 0),
                new Answer("Скутеры", 0),
                new Answer("Космические корабли", 0),
            ]
        ),
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
        new Question(
            "При обозначении марок автомобилей БМВ, первая цифра означает",
            [
                new Answer("Класс транспортного средства", 1),
                new Answer("Объем двигателя", 0),
                new Answer("Регион производства конкретной марки", 0),
                new Answer("Расход топлива", 0),
            ]
        ),

        new Question(
            "В каком году БМВ выпускает свой первый автомобиль?",
            [
                new Answer("В 1913 году", 0),
                new Answer("В 1930 году", 1),
                new Answer("В 1932 году", 0),
                new Answer("В 1900 году", 0),
            ]
        ),
        new Question(
            "Какой автомобиль вывел компанию БМВ из кризиса? ",
            [
                new Answer("BMW 1500", 1),
                new Answer("BMW 2100", 0),
                new Answer(" BMW 1501", 0),
                new Answer("BMW M3", 0),
            ]
        ),
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

    console.log(questions);
    const test = new Test(1, questions, results);

    Update();

    function Update() {
        if (test.current < test.questions.length) {
            headElem.innerHTML = test.questions[test.current].text;
            buttonsElem.innerHTML = "";
            for (
                let i = 0;
                i < test.questions[test.current].answers.length;
                i++
            ) {
                let btn = document.createElement("button");
                btn.className = "button";
                btn.innerHTML =
                    test.questions[test.current].answers[i].text;
                btn.setAttribute("index", i);
                buttonsElem.appendChild(btn);
            }
            pagesElem.innerHTML =
                test.current + 1 + " / " + test.questions.length;

            Init();
        } else {
            buttonsElem.innerHTML = "";
            buttonsElem.innerHTML = '<img src="gift.jpg">';
            headElem.innerHTML = test.results[test.result].text;
            pagesElem.innerHTML = "Очки: " + test.score;
        }
    }

    function Init() {
        let btns = document.getElementsByClassName("button");

        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function (e) {
                Click(e.target.getAttribute("index"));
            });
        }
    }

    function Click(index) {
        let correct = test.Click(index);

        let btns = document.getElementsByClassName("button");

        for (let i = 0; i < btns.length; i++) {
            btns[i].className = "button button_passive";
        }

        if (test.type == 1) {
            if (correct >= 0) {
                btns[correct].className = "button button_correct";
            }

            if (index != correct) {
                btns[index].className = "button button_wrong";
            }
        } else {
            btns[index].className = "button button_correct";
        }

        setTimeout(Update, 1000);
    }
};
