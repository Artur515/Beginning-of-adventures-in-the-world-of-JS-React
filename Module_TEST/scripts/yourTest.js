//////////////////////

export const yourTest = () => {
    const inputQuestion = document.querySelector(".question");
    const wrapper = document.querySelector(".wrapper");
    const btn = document.querySelector(".btn");
    const true_answer = document.querySelectorAll(".answer");
    // const first_answer = document.querySelector(".first_answer");
    // const second_answer = document.querySelector(".second_answer");
    // const third_answer = document.querySelector(".third_answer");
    const headElem = document.getElementById("head");
    const buttonsElem = document.getElementById("buttons");
    const pagesElem = document.getElementById("pages");
    const your_wrapper = document.querySelector("#your_test_wrapper");
    const questions = [];

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

    btn.onclick = () => {
        questions.push(
            new Question(inputQuestion.value, [
                new Answer(true_answer[0].value, 1),
                new Answer(true_answer[1].value, 0),
                new Answer(true_answer[2].value, 0),
                new Answer(true_answer[3].value, 0),
            ])
        );
        Math.floor(Math.random() * true_answer.length);
        inputQuestion.value = "";
        true_answer[0].value = "";
        true_answer[1].value = "";
        true_answer[2].value = "";
        true_answer[3].value = "";
        // inputQuestion.value = "";
        // true_answer.value = "";
        // first_answer.value = "";
        // second_answer.value = "";
        // third_answer.value = "";

        if (questions.length == 4) {
            your_wrapper.className = "hide";
            wrapper.style.display = "table";
            return Update();
        }
    };

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

    const countQuestions = () => {
        if (questions.length == 1) {
            Update();
        }
    };

    countQuestions();
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

    const test = new Test(1, questions, results);

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
