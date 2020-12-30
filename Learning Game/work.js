var name = prompt("Как тебя зовут?");

if (name == "null" || name == +name) {
    alert("Try again later!");
} else {
    console.log("Привет, " + name);
}
var likeOrange = confirm("Любишь апельсины?");
if (likeOrange) {
    console.log("Эти фрукты крутые");
} else {
    console.log("И я люблю клубнику");
}
//Псевдокод для разработчика
/*Выбрать случайное слово
 пока слово не угадано {
     Показать игроку текущее состояние игры
     запросить у игрока вариант ответа
     Если..If..игрок хочет выйти из игры {
         выйти из игры
     }
     Иначе Если вариант ответа - не одиночная буква {
         сообщить игроку, что он должен ввести букву
     }
     иначе {
         Если такая буква есть в слове {
             обновить состояние игры, подставив новую букву
         }
     }



 }
 Поздравить игрока с победой - слово угадано*/
//создаем массив со словами
var words = ["арбуз", "персик", "яблоко", "банан"];
//выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
//создаум итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "-";
}
var remainingLetters = word.length;
//игровой цикл
while (remainingLetters > 0) {
    alert(answerArray.join(""));

    //запрашиваем вариант ответа
    var guess = prompt("Угадайте букву,или нажмите Отмена для выхода из игры.");
    if (guess === null) {
        break;
    } else if (guess.length != 1) {
        alert("Введите только одну  букву!");
    } else {
        //обновляем состояние игры
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
//отображаем ответ и поздравляем игрока
alert(answerArray.join(""));
alert("Отлично!Вы угадали слово и это слово " + word);
