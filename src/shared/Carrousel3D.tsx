import * as React from "react";

const categories = [
    { name: "Facial Cleansers", color: "bg-pink-300" },
    { name: "Moisturizers", color: "bg-purple-300" },
    { name: "Masks", color: "bg-rose-300" },
    { name: "Sunscreens", color: "bg-fuchsia-300" },
    { name: "Kits and Sets", color: "bg-rose-400" }
];

const animationDuration = 500;

const Carrousel3D: React.FC = () => {
    const [index, setIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => (prev + 1) % categories.length);
        setTimeout(() => setIsAnimating(false), animationDuration);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => (prev - 1 + categories.length) % categories.length);
        setTimeout(() => setIsAnimating(false), animationDuration);
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

            <div className="relative w-[60%] flex justify-center items-center h-[200px]">
                {categories.map((category, i) => {
                    let relativeIndex = (i - index + categories.length) % categories.length;

                    if (relativeIndex > Math.floor(categories.length / 2)) {
                        relativeIndex -= categories.length;
                    }

                    let translateX = relativeIndex * 120;
                    let scale = relativeIndex === 0 ? 1.2 : 0.9; // Centro más grande
                    let opacity = Math.abs(relativeIndex) > 1 ? 0 : 1; // Solo 3 elementos visibles
                    let visibility: "visible" | "hidden" = Math.abs(relativeIndex) > 1 ? "hidden" : "visible";
                    let zIndex = relativeIndex === 0 ? 10 : 5;

                    return (
                        <div
                            key={i}
                            className={`absolute ${category.color} rounded-lg transition-all duration-500 flex items-center justify-center shadow-lg`}
                            style={{
                                width: "40%",
                                height: "80px",
                                transform: `translateX(${translateX}%) scale(${scale})`,
                                zIndex,
                                opacity,
                                visibility,
                            }}
                        >
                            <span className="text-lg font-semibold text-gray-700">{category.name}</span>
                        </div>
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
