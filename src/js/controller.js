import * as model from './model.js';
import * as view from './view.js';

const controlAddItem = function(product) {
    model.addItem(product);
}

const init = function () {
    view.addHandlerAdd(controlAddItem);
};

init();