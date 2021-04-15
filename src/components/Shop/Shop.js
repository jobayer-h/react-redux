import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartAction';
import Product from './Product';

const Shop = (props) => {
    const {products ,addToCart} = props;
    return (
        <div>
            <h1>This is Shop</h1>

            {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
            }

        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart: state.cart,
        products:state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);