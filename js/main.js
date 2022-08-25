const products = [
    {id: 1, title: 'Notebook', price: 2000, img:'./img/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20, img:'./img/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img:'./img/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img:'./img/gamepad.jpg'},
];

const renderProduct = (product) => {
    return `<div class="product-item">
                <img src="${product.img}">
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.price}</p>
                </div>   
                <button class="buy-btn">Add to cart</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = 
        list.map(item => renderProduct(item)).join('');
};

renderPage(products);