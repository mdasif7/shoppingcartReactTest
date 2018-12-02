import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';
import Scroll from '../Scroll';

const ProductList  = ({products})  => {
    console.log(products);
    return (
    <div>
        <h3>Products</h3>
            
            <ul className="product-list">
            <Scroll>
              {products.map(product => (

                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </Scroll>
            </ul>
    </div>
    );
}
ProductList.propTypes = {
    products: PropTypes.array
}

export default ProductList;