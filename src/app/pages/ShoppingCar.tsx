import * as React from "react";

interface Product {
    name: string;
    price: string; // Asegurar que el precio se maneje como string
    imagePath: string;
}

const ShoppingCartPage: React.FC = () => {
    const [cart, setCart] = React.useState<Product[]>(JSON.parse(localStorage.getItem("cart") || "[]"));

    const removeFromCart = (index: number) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    const subtotal = cart.reduce((sum, product) => sum + Number(product.price), 0);
    const iva = subtotal * 0.19;
    const total = subtotal + iva;

    return (
        <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tarjetas de productos en el carrito */}
            <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6 border-2 border-pink-300">
                <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">🛍 Tu Carrito</h1>
                {cart.length === 0 ? (
                    <p className="text-center text-gray-500">Tu carrito está vacío. ¡Agrega algo lindo! 💕</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((product, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-md bg-pink-50">
                                <div className="flex items-center">
                                    <img src={product.imagePath} alt={product.name} className="w-16 h-16 object-cover rounded-lg border border-pink-300" />
                                    <div className="ml-4">
                                        <p className="text-lg font-semibold text-pink-700">{product.name}</p>
                                        <p className="text-gray-600">💲{Number(product.price).toFixed(2)}</p>
                                    </div>
                                </div>
                                <button 
                                    className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                                    onClick={() => removeFromCart(index)}
                                >
                                    ❌
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Resumen de pago */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-pink-400 sticky top-4">
                <h2 className="text-2xl font-semibold text-pink-600 mb-4">💖 Resumen de Pago</h2>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <p className="text-gray-600">Subtotal:</p>
                        <p className="text-gray-800">💲{subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-600">IVA (19%):</p>
                        <p className="text-gray-800">💲{iva.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between font-bold text-pink-700 text-xl border-t pt-2">
                        <p>Total:</p>
                        <p>💲{total.toFixed(2)}</p>
                    </div>
                </div>
                {cart.length > 0 && (
                    <>
                        <button 
                            className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg w-full hover:bg-pink-700 transition"
                            onClick={clearCart}
                        >
                            💳 Finalizar Compra
                        </button>
                        <button 
                            className="mt-2 bg-gray-300 text-gray-700 px-6 py-2 rounded-lg w-full hover:bg-gray-400 transition"
                            onClick={clearCart}
                        >
                            🗑 Vaciar Carrito
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShoppingCartPage;
