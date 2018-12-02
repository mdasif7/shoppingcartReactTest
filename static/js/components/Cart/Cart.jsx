import React,{ Component } from 'react';
import CartItem from '../../containers/CartItem';
import PropTypes from 'prop-types';
import Scroll from '../Scroll';


class Cart extends Component{
    render(){
        const { items, total, currency } = this.props;
        return (
            <div>
                <h3>Shopping Cart</h3>
                <div className="cart">
                    {items.length > 0 &&
                     (<ul className="cart_item_list">
                     <Scroll>
                        {items.map(item => (
                            
                                <li key={item.id} className="cart_list_item">
                                <CartItem {...item} />
                                </li>
                            
                           
                        ))}
                        </Scroll>
                      </ul>)
                     }
                    {items.length === 0 && (
                      <div className="cart_empty">Cart is empty</div>
                    )}
                    <div className="cart__total">Total:{currency}{total}</div>
                </div>
            </div>
        );

    }
   
}

    


Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string
}

export default Cart;
