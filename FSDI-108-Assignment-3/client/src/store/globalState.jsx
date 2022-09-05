import StoreContext from "./storeContext";
import { useState } from 'react'

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const addToCart = () => { };
    const removeFromCart = () => { };

    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,

            addToCart: addToCart,
            removeFromCart: removeFromCart,

        }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default GlobalState;