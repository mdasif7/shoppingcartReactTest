import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {

     handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }
    render() {
        const { name, price, currency, imageURL,isInCart } = this.props;
        return (
            <div className="product">
                <img src={imageURL} alt="product" />
                <span className = "product__name">{name}</span>
                <span className="product__price">{currency}{price} </span>
                <button className={isInCart ? 'btn btn-danger' : 'btn btn-primary'} onClick={this.handleClick}>
                {isInCart ? 'Remove' : 'Add to cart'}
                </button>
            </div>
        );
    }
}
Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    imageURL: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
}
export default Product;
