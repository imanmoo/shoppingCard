export const state = {
    cardItems: [],
    tipPercentage: 0,
    subTotal: 0,
    tipAmount: 0,
    totla: 0,
}

export const addItem = function(product) {
    let arr = {
        product: product.name,
        price: product.price,
        quantity: product.quantity,
        totalPrice: product.price * product.quantity
    };

    state.cardItems.push(arr);
    console.log(state.cardItems);
};

