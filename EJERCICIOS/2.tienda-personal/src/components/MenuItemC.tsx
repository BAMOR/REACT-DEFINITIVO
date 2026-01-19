import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"

type MenuItemProps={
    item:MenuItem
    toggleFavorite: (id:number)=> void
    products:MenuItem[]
    clearCart:()=>void,
    addToCart:(item:MenuItem)=>void
}

export const MenuItemC = ({item,toggleFavorite,addToCart}:MenuItemProps) => {
  return (
    <>
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 max-w-sm">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg  text-gray-800">{item.name}</h3>
        <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100  text-blue-800 rounded-full">
          {item.category}
        </span>
       <button onClick={()=>toggleFavorite(item.id)}>
      {item.isFavorite ? '★' : '☆'}
       </button>
      </div>
      <p className="mt-3 text-lg font-bold text-green-600">{formatCurrency(item.price)}</p>

      <button className="font-semibold bg-blue-500 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-blue-600 transition duration-300"
      onClick={()=>addToCart(item)}
      >
  Agregar
</button>

    </div>
    </>
  )
}
