import { Header } from "./components/Header"
import { MenuItemC } from "./components/MenuItemC"
import { useMenu } from "./hooks/useMenu"


function App() {

const { products, toggleFavorite, addToCart,clearCart, cart } = useMenu();


  return (
    <div className="min-h-screen bg-gray-50 p-6">
   <Header
   cart={cart}
   clearCart={clearCart}

   />

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(item=>(
      <MenuItemC
      key={item.id}
      item={item}
      products = {products}
      toggleFavorite={toggleFavorite}
      addToCart= {addToCart}
      clearCart={clearCart}
      

      />
    ))}

    </div>
    

    </div>
  )
}

export default App
