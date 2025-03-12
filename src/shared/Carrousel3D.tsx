import * as React from "react";

const items = ["bg-blue-200", "bg-green-200", "bg-slate-200", "bg-yellow-200", "bg-purple-200"];

const animationDuration = 500;

const Carrousel3D: React.FC = () => {
    const [index, setIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true)
        setIndex((prev) => (prev + 1) % items.length);
        setTimeout(() => {
            setIsAnimating(false)
        }, animationDuration)
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true)
        setIndex((prev) => (prev - 1 + items.length) % items.length);
        setTimeout(() => {
            setIsAnimating(false)
        }, animationDuration)
    };

    return (
        <div className="relative w-full flex items-center justify-center overflow-hidden px-10">
            {/* Botón izquierdo */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl font-bold px-5 z-10 bg-white p-2 rounded-full shadow-md"
            >
                {"<"}
            </button>

            <div className="relative w-[60%] flex justify-center items-center h-[400px]">
                {items.map((item, i) => {
                    let relativeIndex = (i - index + items.length) % items.length;

                    if (relativeIndex > Math.floor(items.length / 2)) {
                        relativeIndex -= items.length;
                    }

                    let translateX = relativeIndex * 120;
                    let scale = relativeIndex === 0 ? 1.2 : 0.9; // Centro más grande
                    let opacity = Math.abs(relativeIndex) > 1 ? 0 : 1; // Solo 3 elementos visibles
                    let visibility: 'visible' | 'hidden' = Math.abs(relativeIndex) > 1 ? 'hidden' : 'visible';
                    let zIndex = relativeIndex === 0 ? 10 : 5;

                    return (
                        <div
                            key={i}
                            className={`absolute ${item} rounded-lg transition-all duration-500`}
                            style={{
                                width: "40%",
                                height: "300px",
                                transform: `translateX(${translateX}%) scale(${scale})`,
                                zIndex,
                                opacity,
                                visibility,
                            }}
                        />
                    );
                })}
            </div>

            {/* Botón derecho */}
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl font-bold px-5 z-10 bg-white p-2 rounded-full shadow-md"
            >
                {">"}
            </button>
        </div>
    );
};

export default Carrousel3D;
