import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/actions/cartAction';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h1>This is Cart</h1>
            <ul>
                {
                    cart.map(id => 
                    <li key={id.cartID}>
                        {id.name}
                        <button onClick={() => removeFromCart(id.cartID)}>
                            X
                        </button>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);