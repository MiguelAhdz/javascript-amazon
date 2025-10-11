import { addToCart, cart, loadFromStorage } from '../../data/cart.js';

describe('addToCart', () => {
    it('should add existing product to cart', () => {
        // Mock localStorage with one existing item
        const existingProduct = {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        };

        const mockLocalStorage = {
            getItem: jasmine.createSpy('getItem').and.returnValue(JSON.stringify([existingProduct])),
            setItem: jasmine.createSpy('setItem')
        };

        // Replace window.localStorage temporarily
        Object.defineProperty(window, 'localStorage', {
            value: mockLocalStorage,
            writable: true
        });

        // Start fresh
        cart.length = 0;
        loadFromStorage();

        // Call addToCart with the same product
        addToCart(existingProduct.productId);

        // Verify that it updated quantity instead of adding new
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(existingProduct.productId);
        expect(cart[0].quantity).toEqual(2);
        expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('should add a new product to cart', () => {
        // Lightweight mock for localStorage
        const mockLocalStorage = {
            getItem: jasmine.createSpy('getItem').and.returnValue(JSON.stringify([])),
            setItem: jasmine.createSpy('setItem')
        };

        // Temporarily replace window.localStorage
        Object.defineProperty(window, 'localStorage', {
            value: mockLocalStorage,
            writable: true
        });

        // Make sure the cart starts clean
        cart.length = 0;
        loadFromStorage();

        // Use the product ID directly — flexible for future changes
        const productId = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        addToCart(productId);

        // Assertions
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(productId);
        expect(cart[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalled();
    });
});
