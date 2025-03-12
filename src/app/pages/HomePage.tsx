import * as React from 'react';
import CarrousellFull, { Slides } from '../../shared/CarrouselFull';
import Carrousel3D from '../../shared/Carrousel3D';
import Carrousel, { CarrouselItem } from '../../shared/SkinCareCarrousel';
import FloatingChat from '../../shared/FloatingChat';

const banner: Slides[] = [
    {
        type: "image",
        src: "/images/publicidad.jpg"
    },

    {
        type: "image",
        src: "/images/publicidad2.jpg"
    },
    {
        type: "image",
        src: "/images/publicidad3.jpg"
    },
    {
        type: "image",
        src: "/images/publicidad4.jpg"
    }
]
export const products: CarrouselItem[] = [
    {
        name: "CeraVe Hydrating Facial Cleanser - 16oz",
        description: "Un limpiador facial suave con ácido hialurónico y ceramidas para mantener la hidratación de la piel.",
        imagePath: "/products/product1.png",
        price: "100000"
    },
    {
        name: "Neutrogena Hydro Boost Water Gel - 50ml",
        description: "Hidratante ligero con ácido hialurónico que proporciona una hidratación intensa sin sensación grasosa.",
        imagePath: "/products/product2.png",
        price: "120000"
    },
    {
        name: "The Ordinary Niacinamide 10% + Zinc 1% - 30ml",
        description: "Suero concentrado que ayuda a reducir la apariencia de los poros y mejora la textura de la piel.",
        imagePath: "/products/product3.png",
        price: "85000"
    }
];


interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
    return (
        <div>
            <CarrousellFull slides={banner} />
            <div className='bg-background text-4xl text-red-500 font-bold w-full flex flex-col items-center justify-center pt-10'>
                Welcome
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block mt-[-1px]">
                <path fill="#A4B2FA"
                    fill-opacity="1"
                    d="M0,160L26.7,165.3C53.3,171,107,181,160,165.3C213.3,149,267,107,320,90.7C373.3,75,427,85,480,122.7C533.3,160,587,224,640,224C693.3,224,747,160,800,149.3C853.3,139,907,181,960,208C1013.3,235,1067,245,1120,229.3C1173.3,213,1227,171,1280,181.3C1333.3,192,1387,256,1413,288L1440,320L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z">
                </path>
            </svg>
            <div className='flex flex-col px-5'>
                <label className='text-4xl font-bold mb-10 text-primary'>Categories</label>
                <Carrousel3D />
                <label className='text-4xl font-bold mb-10 text-primary'>Best Sellers</label>
                <Carrousel items={products} visibleItems={3} />
            </div>
            <FloatingChat />
        </div>
    );
};

export default HomePage;
