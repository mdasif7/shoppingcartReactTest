import cartConstants from '../constants/cart-constants';

export function addToCart(productId) {
    return {
        type: cartConstants.CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: cartConstants.CART_REMOVE,
        payload: {
            productId
        }
    }
}
