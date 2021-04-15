import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
    cart: [],
    products:[
        { name: 'Asus Laptop', id: 1 },
        { name: 'Dell Laptop', id: 2 },
        { name: 'Hp Laptop', id: 3 },
        { name: 'Lenevo Laptop', id: 4 },
        { name: 'Aser Laptop', id: 5 }
    ]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newCartItem={
                productID: action.id,
                name: action.name,
                cartID: state.cart.length +1
            }
            const oldCart = state.cart;
            const newCart = [...oldCart, newCartItem]
            
            return {
                ...state,
                cart: newCart
            }

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartID !== id)
            
            return {
                ...state,
                cart : remainingCart
            }
            
        default:
            return state;
    }
}

export default cartReducer