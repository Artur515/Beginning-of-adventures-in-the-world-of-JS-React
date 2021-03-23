import {items} from "../js/items.js";
//slider

console.log(items);

let slideIndex = 1;
let slides = document.querySelectorAll(".slider_item");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let banners = document.querySelector(".slider_banner");


const show = (n) => {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => {
        item.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";
};

setInterval(() => {
    plusSlides(1);
}, 2500);

show();

const plusSlides = (n) => {
    show((slideIndex += n));
};

const currentSlide = (n) => {
    show((slideIndex = n));
};

// prev.addEventListener("click", () => {
//     plusSlides(-1);
// });
//
// next.addEventListener("click", () => {
//     plusSlides(1);
// });


//according

const accordion = document.getElementsByClassName("accordion");


for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// accordion end


//create card
const createCard = (item) => {
    const card = document.createElement('div')
    card.className = 'apple_card'
    card.id = "myBtnCard"
    // const button = document.createElement("button");
    // button.innerText = "Add to cart";
    card.innerHTML = `
<img class="card_img" src="${item.imgUrl}" alt="apple_img">
<h3>${item.name}</h3>
<span>${item.orderInfo.inStock} left in stock</span>
<span>Price:${item.price}$</span>
<button class="btn">Add to cart</button>
<div class="card_footer">
<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
<div>${item.orderInfo.reviews}% Positive reviews</div>
</div>
`;
    return card
}


const renderCard = (data = items) => {
    document.querySelector('.cards').innerHTML = ''
    data.forEach((item) => {
        const card = createCard(item)
        document.querySelector('.cards').appendChild(card)
    })
}

renderCard(items)


// const createModalCard = (item) => {
//     const modalCard = document.createElement('div')
//     modalCard.className = 'modal '
//     modalCard.id = 'myModal'
//     modalCard.innerHTML = `
// <div class="modal_content>
//
//
//     <div class="modal_img"><img src="${item.imgUrl}" alt="apple_img"></div>
//     <div class="modal_content">
//     <h3>${item.name}</h3>
//     <p>Color:${item.color}</p>
//     <p>Operation System:${item.os}</p>
//     <p>Chip:${item.chip.name}</p>
//     <p>Height:${item.size.height}</p>
//     <p>Width:${item.size.width}</p>
//     <p>Depth:${item.size.depth}</p>
//     <p>Weigth:${item.size.weight}</p>
// </div>
//     <div class="modal_price">
//     <h2>${item.price}</h2>
//     <p>Stock:${item.orderInfo.inStock}</p>
//     <button class="btn">Add to cart</button>
// </div>
// </div>
//     `
// }


const btn = document.querySelector('.btn')


//search value

const searchDevice = () => {
    const value = document.querySelector('.search_input').value;
    let searchResult = items.filter((card) => {
        return card.name.toLowerCase().includes(value.toLowerCase())
    })
    setTimeout(() => {
        renderCard(searchResult)
    }, 500)
}


document.querySelector('.search_input').oninput = searchDevice


//search panel show & hide

const showHideSearchPanel = () => {
    document.querySelector('.search_setting').addEventListener('click', () => {
        document.querySelector('.search_panel').classList.toggle('hide')
    })
}

showHideSearchPanel()

//sort panel

const sortPanel = () => {
    document.querySelector('.search_sort').addEventListener('click', () => {
        document.querySelector('.search_sort_menu').classList.toggle('hide')
    })
}
sortPanel()
//sorting
const selectPrice = () => {
    const selectCard = document.querySelector('.search_sort_select')
    selectCard.addEventListener('change', (e) => {
        let target = e.target.value
        let sortCard = items.slice().sort((a, b) => {
            if (target === "up") {
                return a.price - b.price;
            }
            if (target === "down") {
                return b.price - a.price;
            }
            if (target === "default") {
                return a.price;
            }
        })
        renderCard(sortCard)
    })
}
selectPrice()


//search Price
const searchPrice = () => {
    const fromValue = document.querySelector('.search_from').value
    const toValue = document.querySelector('.search_to').value


    let priceResult = items.filter((item) => {
        return (!fromValue || fromValue <= item.price) && (!toValue || toValue >= item.price)
    })
    console.log(priceResult)
    setTimeout(() => {
        renderCard(priceResult)
    }, 500)
}

document.querySelector('.search_from').oninput = searchPrice


//searchColor


const searchColor = () => {
    let result
    document.querySelectorAll('.color_input').forEach((item) => {
        if (item.checked == true) {
            return result = items.filter((col) => {
                return col.color.includes(item.name)
            })
        }
        return result
    })

    setTimeout(() => {
        renderCard(result)
    }, 500)
}

document.querySelectorAll('.color_input').forEach((item) => {
    item.onchange = searchColor
})

//old  search_script

// const searchColor = () => {
//
//     let color = []
//     const colorCheckbox = document.querySelectorAll('.color_input')
//     colorCheckbox.forEach((checkItem) => {
//         if (checkItem.checked == true) {
//             color.push(checkItem.name)
//         }
//         return color
//     })
//     console.log(color)
//
//     let resultFilter = items.filter(item => item.color.some(i => color.includes(i)))
//
//
//     setTimeout(() => {
//         renderCard(resultFilter)
//     }, 500)
// }
//
//
//
//
// //need to finish to fix
// document.querySelectorAll('.color_input').forEach((item) => {
//     item.onchange = searchColor
// })


//find storage


const searchStorage = () => {
    let result
    document.querySelectorAll('.storage').forEach((item) => {
        if (item.checked == true) {
            return result = items.filter((card) => {
                return card.storage == item.name
            })
        }
        return result
    })

    setTimeout(() => {
        renderCard(result)
    }, 500)
}

document.querySelectorAll('.storage').forEach((item) => {
    item.onchange = searchStorage
})

//search OS


const searchOS = () => {
    let result
    document.querySelectorAll('.panel_os').forEach((item) => {
        if (item.checked == true) {
            return result = items.filter((card) => {
                return card.os == item.name
            })
        }
        return result
    })

    setTimeout(() => {
        renderCard(result)
    }, 500)

}


document.querySelectorAll('.panel_os').forEach((item) => {
    item.onchange = searchOS
})


//search display

const searchDisplay = () => {
    let result
    document.querySelectorAll('.display').forEach((item) => {
        if (item.checked == true && item.value == 2) {
            return result = items.filter((card) => {
                if (card.display <= item.value) {
                    return card
                }
            })
        }
        return console.log(result)
    })

}

document.querySelector('.check').addEventListener('click', () => {
    searchDisplay()
})


//basket array




// let basketBuy = document.querySelector(".buy");
// basketBuy.addEventListener("click", () => {
//     const basketCard = document.createElement("div");
//     basketCard.className = "basket";
//     let basket = (document.querySelector(".basket_container").innerHTML = "");
//     if (basketArr !== null) {
//         basket =
//             '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
//         for (let items in basketArr) {
//             basket += "<tr>";
//             for (let i = 0; i < basketArr[items].length; i++) {
//                 basket += "<td>" + basketArr[items][i] + "</td>";
//             }
//             basket += "</tr>";
//         }
//         basket += "</table>";
//         basket.innerHTML = ''
//
//     }
// });
//
// function openCart(e) {
//     let cartData = getCartData(), // вытаскиваем все данные корзины
//         totalItems = "";
//     // если что-то в корзине уже есть, начинаем формировать данные для вывода
//     if (cartData !== null) {
//         totalItems =
//             '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
//         for (var items in cartData) {
//             totalItems += "<tr>";
//             for (var i = 0; i < cartData[items].length; i++) {
//                 totalItems += "<td>" + cartData[items][i] + "</td>";
//             }
//             totalItems += "</tr>";
//         }
//         totalItems += "</table>";
//         cartCont.innerHTML = totalItems;
//     } else {
//         // если в корзине пусто, то сигнализируем об этом
//         cartCont.innerHTML = "В корзине пусто!";
//     }
//     return false;
// }
