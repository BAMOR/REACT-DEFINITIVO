import { useState } from 'react';

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 px-6 mb-6 relative">
      {/* Contenedor del título (centrado en el contenido) */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-xl font-black text-gray-800">
          Mi Tienda Privada Online
        </h1>
      </div>

      {/* Carrito posicionado absolutamente a la derecha */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsCartOpen(!isCartOpen)}
          aria-label="Abrir carrito"
        >
          🛒
        </button>

        {isCartOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
            <p className="text-sm text-gray-500 mb-3">Carrito</p>
            <div className="text-center py-4 text-gray-400 text-sm">
              Vacío
            </div>
            <button className="w-full mt-2 py-1.5 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 transition cursor-not-allowed">
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </header>
  );
};