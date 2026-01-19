import {  useState } from "react"
import type { cartItem, MenuItem } from "../types";
import { initialProducts } from "../data/products";



export const useMenu = () => {

const [products, setProducts]= useState<MenuItem[]>(initialProducts); // arreglo de mis productos mostrados

const [cart, setCart] = useState<cartItem[]>([])



const clearCart = () =>{
 setCart([])

}

const addToCart = (item: MenuItem) => {

  const productExist = cart.find(cartItem => cartItem.id === item.id);

  if (productExist) {
    // 2. Si existe, aumenta la cantidad
    const updateOrder = cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem // ← ¡faltaba esto!
    );
    setCart(updateOrder);
  } else {
    // 3. Si no existe, agrégalo con quantity: 1
    const newItem = { ...item, quantity: 1 };
    setCart([...cart, newItem]);
  }
};




  const toggleFavorite = ((id: number) => {
    setProducts(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  });




  return {
    products,
    toggleFavorite,
    addToCart,
    clearCart,
    cart

  }
}
