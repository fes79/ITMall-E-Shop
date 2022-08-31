class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img:'./img/notebook.jpg'},
            {id: 2, title: 'Mouse', price: 20, img:'./img/mouse.jpg'},
            {id: 3, title: 'Keyboard', price: 200, img:'./img/keyboard.jpg'},
            {id: 4, title: 'Gamepad', price: 50, img:'./img/gamepad.jpg'},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
//              block.innerHTML += item.render();
        }
    // Сумма стоимости товаров в каталоге
    //
    //     SumPrices() {
    //         let sum = 0;
    //         for(let product of this.goods){
    //            sum += product.price;
    //        }
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render(){
        return `<div class="product-item">
                <img src="${this.img}">
                <div class="product-info"> 
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                </div>
                <button class="buy-btn">Add to cart</button>
            </div>`
    }
}

let list = new ProductList();
// list.render();
// list.getSum();

// class Basket {
//     addGood() {

//     }
//     removeGood() {

//     }
//     changeGood() {

//     }
    
//     render(){
        
//     }
// }

// class ElemBasket {
//     render(){}
// }



// const products = [
//     {id: 1, title: 'Notebook', price: 2000, img:'./img/notebook.jpg'},
//     {id: 2, title: 'Mouse', price: 20, img:'./img/mouse.jpg'},
//     {id: 3, title: 'Keyboard', price: 200, img:'./img/keyboard.jpg'},
//     {id: 4, title: 'Gamepad', price: 50, img:'./img/gamepad.jpg'},
// ];

// const renderProduct = (product) => {
//     return `<div class="product-item">
//                 <img src="${product.img}">
//                 <div class="product-info">
//                     <h3>${product.title}</h3>
//                     <p>${product.price}</p>
//                 </div>   
//                 <button class="buy-btn">Add to cart</button>
//             </div>`
// };
// const renderPage = list => {
//     document.querySelector('.products').innerHTML = 
//         list.map(item => renderProduct(item)).join('');
// };

// renderPage(products);

