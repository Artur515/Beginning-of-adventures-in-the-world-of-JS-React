import { pizzaList } from "/list.js";
const basketArr = [];
const renderCard = (item) => {
    const card = document.createElement("div");
    card.className = "card";
    const button = document.createElement("button");
    button.innerText = "Купить";

    button.onclick = function () {
        console.log(item);
        basketArr.push(item);
        console.log(basketArr);
    };
    card.innerHTML = `<span>♡</span>
        <img src="${item.img}" alt="picture">
        <h2>Название: ${item.name}</h2>
        <p>Цена: ${item.price}</p>
        <p>Каллории: ${item.caloricity}</p>
    `;
    card.appendChild(button);

    return card;
};

const renderCards = (data = pizzaList) => {
    document.querySelector(".container").innerHTML = "";
    data.forEach((item) => {
        const card = renderCard(item);
        document.querySelector(".container").appendChild(card);
    });
};

renderCards(pizzaList);

// const searchPizzas = () => {
//     const value = document.getElementById("search").value;
//     const result = pizzaList.filter((pizza) => {
//         return pizza.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
//     });
//     renderCards(result);
// };

// document.getElementById("search").oninput = searchPizzas;
///////////////////
//select change
let select = () => {
    const selectPizzas = document.querySelector(".select");
    selectPizzas.addEventListener("change", (e) => {
        let target = e.target.value;
        console.log(target);
        let sortPizzas = pizzaList.slice().sort((a, b) => {
            if (target === "up") {
                return a.price - b.price;
            }
            if (target === "down") {
                return b.price - a.price;
            }
            if (target === "default") {
                return a.price;
            }
            if (target === "max_cal") {
                return a.caloricity - b.caloricity;
            }
            if (target === "min_cal") {
                return b.caloricity - a.caloricity;
            }
        });
        renderCards(sortPizzas);
    });
};
select();

//////

const searchComposition = () => {
    const value = document.getElementById("search").value;
    let result = pizzaList.filter((pizza) => {
        console.log(pizza);
        let isInclude = pizza.composition.find((item) => {
            return item.includes(value);
        });
        return !!isInclude;
    });
    renderCards(result);
};

document.getElementById("search").oninput = searchComposition;

///filter

// let filterBtn = document.querySelectorAll('.btn');
// let valueFrom = document.getElementById('price from')
// filterBtn[0].onclick = function () {
//     console.log(valueFrom.value);
// }

const filterPriceCaloricity = () => {
    let filterBtn = document.querySelectorAll(".btn");
    let valueFrom = document.getElementById("price from");
    let valueTo = document.getElementById("price to");
    filterBtn[1].onclick = function () {
        let result = pizzaList.filter((pizza) => {
            if (valueFrom.value == "" && valueTo.value == "") {
                return pizza;
            }
            if (valueFrom.value == "" && valueTo.value != "") {
                return pizza.price < valueTo.value;
            }
            if (valueFrom.value != "" && valueTo.value == "") {
                return pizza.price > valueFrom.value;
            }
            if (pizza.price >= valueFrom.value && pizza.price <= valueTo.value) {
                return pizza;
            }
        });
        renderCards(result);
    };

    filterBtn[0].onclick = function () {
        let result = pizzaList.filter((pizza) => {
            if (valueFrom.value == "" && valueTo.value == "") {
                return pizza;
            }
            if (valueFrom.value == "" && valueTo.value != "") {
                return pizza.caloricity < valueTo.value;
            }
            if (valueFrom.value != "" && valueTo.value == "") {
                return pizza.caloricity > valueFrom.value;
            }
            if (pizza.caloricity >= valueFrom.value && pizza.caloricity <= valueTo.value) {
                return pizza;
            }
        });
        renderCards(result);
    };
    //наверное будет правильно добавить еще проверку на ввод символов и букв
    filterBtn[2].onclick = function () {
        (valueFrom.value = ""), (valueTo.value = "");
    };
};

filterPriceCaloricity();

//priceOfTheDay
let bannerOfPizzas = () => {
    let bunnerCart = document.createElement("div");
    bunnerCart.className = "bunner_cart";
    let carusel = document.querySelector("#carusel");
    let bunnerPizza = pizzaList.filter((pizza) => {
        if (pizza.priceOfTheDay) {
            console.log(pizza);
            bunnerCart.innerHTML = `
            <img src="${pizza.img}" alt="picture">
                <h2>Название: ${pizza.name}</h2>
                <p>Цена: ${pizza.price}</p>
            `;
        }
        carusel.appendChild(bunnerCart);
    });
};

bannerOfPizzas();

//Basket Array
// let basketBuy = document.querySelector(".buy");
// basketBuy.addEventListener("click", () => {
//     const basketCard = document.createElement("div");
//     basketCard.className = "basket";
//     document.querySelector(".container").innerHTML = "";
//     return renderCards(basketArr);
// });
