import { connect } from 'react-redux';
import CartItem from '../components/Cart/CartItem';
import { removeFromCart } from '../actions/cart-actions';

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(null,mapDispatchToProps)(CartItem);
