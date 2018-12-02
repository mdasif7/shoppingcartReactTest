import { connect } from 'react-redux';
import Cart from '../components/Cart';
import  { getItems, getCurrency, getTotal} from '../reducers/cart';




const mapStateToProps = (state, props) => {
    console.log(state)
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

export default connect(mapStateToProps)(Cart);
