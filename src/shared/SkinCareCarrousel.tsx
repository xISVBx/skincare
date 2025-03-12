import * as React from "react";
import { Link } from "react-router-dom";

export interface CarrouselItem {
    name: string;
    price: string;
    description: string;
    imagePath: string;
}

interface ICarrousel {
    items: CarrouselItem[]; // Array de productos
    visibleItems: number; // Número de elementos visibles en pantalla
}

const Carrousel: React.FC<ICarrousel> = ({ items, visibleItems }) => {
    const [index, setIndex] = React.useState(0);
    const totalItems = items.length;
    const itemWidth = 100 / visibleItems; // Usar división exacta
    const maxIndex = totalItems - visibleItems; // Última posición permitida

    const nextSlide = () => {
        if (index < maxIndex) {
            setIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(prev => prev - 1);
        }
    };

    return (
        <div className="flex flex-row w-full items-center justify-center overflow-hidden px-2">
            {/* Botón izquierdo */}
            <button
                onClick={prevSlide}
                className="text-3xl font-bold px-5 z-10 bg-white p-2 rounded-full shadow-sm disabled:opacity-50"
                disabled={index === 0}
            >
                {"<"}
            </button>

            {/* Carrusel */}
            <div className="relative w-full flex flex-row justify-center items-center overflow-hidden">
                <div
                    className="flex transition-transform duration-500 p-5"
                    style={{
                        transform: `translateX(-${index * itemWidth}%)`,
                        width: `${totalItems * itemWidth}%`,
                        minWidth: "100%", // Evita cortes en el último ítem
                    }}>
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex items-center justify-center h-[350px] p-5 rounded-lg"
                            style={{
                                width: `${itemWidth}%`,
                                minWidth: `${itemWidth}%`,
                            }}>
                            <Link to={`/product/${i}`} className="h-full flex flex-row rounded-lg w-full p-5 shadow-lg cursor-pointer">
                                <img className="w-[50%] object-scale-down" src={item.imagePath} alt="" />
                                <div className="flex flex-col w-1/2 justify-between items-center px-2 py-2">
                                    <span className="font-semibold text-lg">{item.name}</span>
                                    <span className="font-medium text-sm text-gray-500">{item.description}</span>
                                    <span className="font-bold text-green-600 text-lg">
                                        {new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(Number(item.price))}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón derecho */}
            <button
                onClick={nextSlide}
                className="text-3xl font-bold px-5 z-10 bg-white p-2 rounded-full shadow-md disabled:opacity-50"
                disabled={index >= maxIndex}
            >
                {">"}
            </button>
        </div>
    );
};

export default Carrousel;
