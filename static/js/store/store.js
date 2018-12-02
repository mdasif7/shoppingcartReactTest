import { combineReducers, createStore } from 'redux';
import cartReducer from '../reducers/cart';
import productsReducer from '../reducers/products';
import data from '../../../data/mock.json';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

const store = createStore(
    rootReducer,
    {
        products: data.catalog
    }

);

export default store;
