
    let burger__menu = document.getElementById('burger_menu')

function burgerMenu(){
    let burger_icon = document.querySelector('.burger_icon')
    let close_icon = document.getElementById('close_icon')

    burger_icon.addEventListener('click', toggleBurgerMenu)
    close_icon.addEventListener('click', toggleBurgerMenu)
}

function toggleBurgerMenu() {
    burger_menu.classList.toggle('burger_menu_active')
}

burgerMenu() 



let buyButtons = document.querySelectorAll('.products__btn')
let cart_count = document.getElementById('cart_count')

function addToCart() {
    cart_count.innerText = Number(cart_count.innerText) + 1
}

for(let i = 0; i < buyButtons.length; i ++) {
    buyButtons[i].addEventListener('click', addToCart)
}