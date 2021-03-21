import { pizzaList } from "/list.js";

console.log(pizzaList);

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
    card.innerHTML = `<p class="favor" >&#9825</p>
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
//Basket Array
// let basketBuy = document.querySelector(".buy");
// basketBuy.addEventListener("click", () => {
//     const basketCard = document.createElement("div");
//     basketCard.className = "basket";
//     document.querySelector(".container").innerHTML = "";
//     return renderCards(basketArr);
// });
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

// btnFilterOfPizza();
// btnFilterOfPizza();
///is Favorite
// function initFavorite() {
//     let items = document.getElementsByClassName("favor");
//     for (let i = 0; i < items.length; i++) {
//         let item = items[i];
//         console.log(item);
//         pizzaList.forEach((pizza) => {
//             item.addEventListener("click", function () {
//                 item.style.background = "red";
//             });
//         });
//     }
// }
// initFavorite();
