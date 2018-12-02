import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="App_main">
                <div className="App_cart_main">
                    <Cart />
                </div>
                <div className="App_products_main">
                    <ProductList />
                </div>
            </div>
    );
}

export default App;
