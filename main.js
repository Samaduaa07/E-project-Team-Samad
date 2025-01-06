

function details(pname, price, image, descript) {
    var view = {
        'productname': pname,
        'productprice': price,
        'productimage': image,
        'productdesc': descript
    }
    var ot = JSON.stringify(view)
    localStorage.setItem('bkey', ot)
    window.location.href = "details.html"
}





function change() {
    var cat = $('#blop').val()
    if (cat == 'bdecor') {
        $('.holes').show()
        $('.dots').hide()

        $('.cots').show()
    }
    else if (cat == 'Wdecors') {
        $('.dots').show()
        $('.holes').hide()

        $('.cots').show()
    }
    else if (cat == 'all') {
        $('.dots').show()
        $('.holes').show()
        $('.cots').show()
    }
    else {

        $('.dots').show()
        $('.holes').show()
        $('.cots').show()
    }
}
function addToWishlist() {
    alert("Item added to your wishlist!");
    // Additional code to handle the wishlist functionality can be added here
}
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if (loginTab && registerTab && loginForm && registerForm) {
    loginTab.addEventListener('click', () => {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    });
} else {
    console.error('One or more elements are missing from the DOM.');
}


registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});


// Function to update the button text based on login state
function updateLoginButton() {
    const button = document.querySelector('.logout-button');
    const welcomeMessage = document.getElementById('change');

    // Simulating a login check (Replace with actual logic, e.g., API check or session storage)
    const isLoggedIn = !!localStorage.getItem('userLoggedIn');

    if (isLoggedIn) {
        welcomeMessage.textContent = "User"; // Change "Guest" to "User" or specific username
        button.textContent = "Logout"; // Show Logout
        button.setAttribute('onclick', 'logout()');
    } else {
        welcomeMessage.textContent = "Guest"; // Show Guest
        button.textContent = "Login"; // Show Login
        button.setAttribute('onclick', 'login()');
    }
}


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function toggleVisibility() {
    const hiddenContent = document.querySelector('.hidden-content');
    const toggleButton = document.getElementById('toggleButton');

    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        toggleButton.textContent = 'Show Less';
    } else {
        hiddenContent.style.display = 'none';
        toggleButton.textContent = 'Show More';
    }
}
