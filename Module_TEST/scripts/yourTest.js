const inputQuestion = document.querySelector(".question");
const btn = document.querySelector(".btn");
const wrapper = document.querySelector("#your_test_wrapper");
const question = {};
const answer = [];
for (let i = 0; i < 10; i++) {
    btn.onclick = () => {
        let input = inputQuestion.value;
        question.text = input;
        inputQuestion.value = "";
        btn.className = "hide";
        inputQuestion.className = "hide";
        let rightAnswer = document.createElement("input");
        rightAnswer.placeholder = "Введите правильный ответ";
        wrapper.appendChild(rightAnswer);
        for (let i = 0; i < 3; i++) {
            let answer = document.createElement("input");
            answer.placeholder = "Введите ответ";
            wrapper.appendChild(answer);
        }
        let buttonSend = document.createElement("button");
        buttonSend.innerText = "save";
        wrapper.appendChild(buttonSend);
        buttonSend.onclick = () => {
            console.log(question);
        };
    };
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
console.log(new Question(question));

class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

const yourTest = () => {};

yourTest();
