const addForm = document.querySelector('.addForm');
const product_name = document.querySelector('.product_name');
const product_price = document.querySelector('.product_price');
const product_quantity = document.querySelector('.product_quantity');

export const addHandlerAdd = function(handler) {
    addForm.addEventListener('submit' , function(e) {
        e.preventDefault();
        let data = {
            name: product_name.value,
            price: product_price.value,
            quantity: product_quantity.value
        };
        console.log(data);
        handler(data);
    });
}