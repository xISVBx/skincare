import * as React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { products } from "./HomePage";

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products[Number(id)];
    const [rating, _] = React.useState(4);
    const [comment, setComment] = React.useState("");
    const [comments, setComments] = React.useState<string[]>([]);
    const [cart, setCart] = React.useState<{ name: string; price: string; imagePath: string }[]>([]);

    React.useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    const handleCommentSubmit = () => {
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment("");
        }
    };

    const addToCart = () => {
        if (product) {
            const updatedCart = [...cart, product];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    };

    if (!product) {
        return <div className="p-6 text-center text-red-500">❌ Producto no encontrado</div>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto mt-5 relative">
            {/* Burbuja de carrito Kawaii 🎀 */}
            {cart.length > 0 && (
                <div className="absolute top-2 right-2 bg-pink-500 text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full shadow-lg">
                    {cart.length}
                </div>
            )}

            <div className="bg-white shadow-xl rounded-3xl p-6 border-4 border-pink-200">
                {/* Imagen y detalles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img 
                        src={product.imagePath} 
                        alt={product.name} 
                        className="w-full h-80 object-contain rounded-xl border-4 border-pink-300" 
                    />
                    <div>
                        <h1 className="text-4xl font-bold text-pink-600">{product.name}</h1>
                        <p className="text-gray-600 my-4 text-lg">{product.description}</p>
                        <p className="text-2xl font-bold text-pink-700">💲{Number(product.price).toFixed(2)}</p>
                        
                        <div className="flex items-center my-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={i < rating ? "text-yellow-400 text-2xl" : "text-gray-300 text-2xl"} />
                            ))}
                        </div>

                        <button 
                            className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition shadow-lg"
                            onClick={addToCart}
                        >
                            🛒 Añadir al Carrito
                        </button>
                    </div>
                </div>

                {/* Sección de Comentarios */}
                <div className="mt-8">
                    <h2 className="text-3xl font-semibold text-pink-600">💬 Comentarios</h2>
                    <div className="mt-4">
                        {comments.length === 0 ? (
                            <p className="text-gray-500 italic">No hay comentarios aún. ¡Sé la primera en opinar! 🌸</p>
                        ) : (
                            comments.map((cmt, index) => (
                                <div key={index} className="bg-pink-100 p-4 rounded-xl my-2 shadow-md border border-pink-300">
                                    {cmt}
                                </div>
                            ))
                        )}
                    </div>
                    
                    {/* Área para escribir comentario */}
                    <div className="mt-4">
                        <textarea 
                            className="w-full p-3 border-2 border-pink-300 rounded-xl bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            rows={3}
                            placeholder="Escribe tu comentario... ✨"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <button 
                            className="mt-3 bg-pink-500 text-white px-5 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition shadow-lg"
                            onClick={handleCommentSubmit}
                        >
                            💌 Enviar comentario
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
