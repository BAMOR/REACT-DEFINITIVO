import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { cartReducer, initialState, type CartActions, type CartState } from "../reducer/cartReducer";


type CartContextProps= {
    state: CartState,
    dispatch: Dispatch<CartActions>
}

type CartProviderProps ={
children: ReactNode
}




export const CartContext = createContext<CartContextProps>(null!)


export const CartProvider = ({children}:CartProviderProps) => {
    const [state,dispatch] =useReducer(cartReducer, initialState)


    return (
        <CartContext.Provider>
        
        
        </CartContext.Provider>
    )

}