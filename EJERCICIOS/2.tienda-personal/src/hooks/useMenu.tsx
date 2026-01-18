import { useCallback, useState } from "react"
import type { MenuItem } from "../types";
import { initialProducts } from "../data/products";



export const useMenu = () => {

const [products, setProducts]= useState<MenuItem[]>(initialProducts);




  const toggleFavorite = useCallback((id: number) => {
    setProducts(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  }, []);




  return {
    products,
    toggleFavorite

  }
}
