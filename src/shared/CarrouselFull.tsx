import * as React from 'react';

export interface Slides {
    type: "video" | "image",
    src: string
}

interface ICarrousellFullProps {
    slides: Slides[]
}

const CarrousellFull: React.FunctionComponent<ICarrousellFullProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
    const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        resetAutoSlide();
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        resetAutoSlide();
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const resetAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 3000);
    };

    React.useEffect(() => {
        resetAutoSlide();
        return () => stopAutoSlide();
    }, []);

    React.useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentIndex) {
                    video.play();  // Reproduce el video actual
                } else {
                    video.pause(); // Pausa los videos que no están visibles
                }
            }
        });
    }, [currentIndex]);


    return (
        <div className="w-full bg-black relative overflow-hidden" style={{ height: "calc(100dvh - 150px)" }}>
            {/* Contenedor de slides */}
            <div
                className="w-full h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        {slide.type === "image" ? (
                            <img
                                src={slide.src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                                onMouseEnter={stopAutoSlide}
                                onMouseLeave={resetAutoSlide}
                            />
                        ) : (
                            <video
                                ref={(el) => {
                                    videoRefs.current[index] = el;
                                }}
                                src={slide.src}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                onMouseEnter={stopAutoSlide}
                                onMouseLeave={resetAutoSlide}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Botón Izquierdo */}
            <button
                className="absolute top-1/2 -translate-y-1/2 left-4 w-[50px] h-[50px] opacity-70 flex items-center justify-center
          bg-gray-700 rounded-full text-white text-3xl hover:opacity-100 transition-opacity duration-300"
                onClick={prevSlide}
                onMouseEnter={stopAutoSlide}
                onMouseLeave={resetAutoSlide}
            >
                {"<"}
            </button>

            {/* Botón Derecho */}
            <button
                className="absolute top-1/2 -translate-y-1/2 right-4 w-[50px] h-[50px] opacity-70 flex items-center justify-center
          bg-gray-700 rounded-full text-white text-3xl hover:opacity-100 transition-opacity duration-300"
                onClick={nextSlide}
                onMouseEnter={stopAutoSlide}
                onMouseLeave={resetAutoSlide}
            >
                {">"}
            </button>
        </div>
    );
};

export default CarrousellFull;
