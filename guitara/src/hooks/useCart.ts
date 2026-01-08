import { useEffect, useState } from "react"
import type { GuitarType } from "../interface/types"
import type { CartItem } from "../interface/CartItem"

const MAX_ITEM = 5
const MIN_ITEM = 1

const initialCart = (): CartItem[] => {
  const localStorageCart = localStorage.getItem('cart')
  if (!localStorageCart) return []

  try {
    const parsed = JSON.parse(localStorageCart)
    if (!Array.isArray(parsed)) return []

    return parsed.filter(
      (item): item is CartItem =>
        item !== null &&
        typeof item.id === 'number' &&
        typeof item.quantity === 'number'
    )
  } catch {
    return []
  }
}

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: GuitarType) => {
    const index = cart.findIndex(g => g.id === item.id)

    if (index >= 0) {
      if (cart[index].quantity >= MAX_ITEM) return

      const updated = [...cart]
      updated[index].quantity++
      setCart(updated)
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const remuveFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const increaseQuantity = (id: number) => {
    setCart(
      cart.map(item =>
        item.id === id && item.quantity < MAX_ITEM
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (id: number) => {
    setCart(
      cart.map(item =>
        item.id === id && item.quantity > MIN_ITEM
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  return {
    cart,
    addToCart,
    remuveFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  }
}
