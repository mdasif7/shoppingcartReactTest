import { connect } from 'react-redux';
import Product from '../components/Product';
import  { addToCart, removeFromCart } from '../actions/cart-actions';
import { isInCart } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
