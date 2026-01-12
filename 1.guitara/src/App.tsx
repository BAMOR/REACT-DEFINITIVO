import { useState } from "react"
import { Guitar } from "./components/Guitar"
import { Header } from "./components/Header"
import { db } from "./data/db"
import { useCart } from "./hooks/useCart"
import type { GuitarType } from "./interface/types"



function App() {
  const [data] = useState<GuitarType[]>(db)


  const {
    cart,
    addToCart,
    remuveFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  } = useCart()


  return (
    <>
      <Header

        cart={cart}
        remuveFromCart ={remuveFromCart}
        increaseQuantity ={increaseQuantity}
      decreaseQuantity ={decreaseQuantity}
      clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
