import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('addToCart', () => {
    it('should add existing product to cart', () => {

    });
    //flaky test need to use mock test
    it('should add a new product to cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        spyOn(localStorage, 'setItem');
        console.log(localStorage.getItem('cart'));
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
    });
});