const basketArr = [];
//Basket Array
let basketBuy = document.querySelector(".buy");
basketBuy.addEventListener("click", () => {
    const basketCard = document.createElement("div");
    basketCard.className = "basket";
    let basket = (document.querySelector(".container").innerHTML = "");
    if (basket !== null) {
        basket =
            '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
        for (let items in basketArr) {
            basket += "<tr>";
            for (let i = 0; i < basketArr[items].length; i++) {
                basket += "<td>" + basketArr[items][i] + "</td>";
            }
            basket += "</tr>";
        }
        basket += "</table>";
       basket.innerHTML=
       
    }
});
function openCart(e) {
    var cartData = getCartData(), // вытаскиваем все данные корзины
        totalItems = "";
    // если что-то в корзине уже есть, начинаем формировать данные для вывода
    if (cartData !== null) {
        totalItems =
            '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
        for (var items in cartData) {
            totalItems += "<tr>";
            for (var i = 0; i < cartData[items].length; i++) {
                totalItems += "<td>" + cartData[items][i] + "</td>";
            }
            totalItems += "</tr>";
        }
        totalItems += "</table>";
        cartCont.innerHTML = totalItems;
    } else {
        // если в корзине пусто, то сигнализируем об этом
        cartCont.innerHTML = "В корзине пусто!";
    }
    return false;
}
