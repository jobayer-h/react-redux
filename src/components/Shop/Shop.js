import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartAction';
import Product from './Product';

const Shop = () => {
    const products = [
        { name: 'Asus Laptop', id: 1 },
        { name: 'Dell Laptop', id: 2 },
        { name: 'Hp Laptop', id: 3 },
        { name: 'Lenevo Laptop', id: 4 },
        { name: 'Aser Laptop', id: 5 }
    ]
    return (
        <div>
            <h1>This is Shop</h1>

            {
                products.map(product => <Product product={product}></Product>)
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