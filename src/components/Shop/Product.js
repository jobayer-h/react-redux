import React from 'react';

const Product = (props) => {
    const {name,id} = props.product;
    const {addToCart} = props;
    return (
        <div style={{border: '1px solid black', margin:'10px 0',padding:'10px'}}>
            <h3>{name}</h3>
            <button onClick={()=> addToCart(id, name)}>Add To Cart</button>
        </div>
    );
};

export default Product;