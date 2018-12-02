import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
    handleClick = () => {
        const { id, removeFromCart } = this.props;
        removeFromCart(id);
    }
    render(){
        const { name, price, currency, imageURL } = this.props;
    return (

        <div className="cart-item">
          <img src={imageURL} alt="cart" />
          <span className = "cart-item__name">{name}</span>
          <span className="cart-item__price">{currency}{price} </span>
          <button className='cart_button' onClick ={this.handleClick}>
          {'Remove'}
          </button>
        </div>
    );
    }
}


CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default CartItem;
