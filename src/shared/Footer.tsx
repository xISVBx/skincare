import * as React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
    return (
        <footer className='w-screen flex mt-5 flex-col items-center px-10'>
            <div className='flex flex-row w-full space-x-5 items-center justify-end text-sm text-gray-500 hover:underline cursor-pointer'>
                <span>Sobre Nosotros</span>
                <span>Servicios</span>
                <span>Contactanos</span>
            </div>
            <div className='w-full my-20 rounded-full h-[1px] bg-gray-300' />
            <div className='w-full flex flex-row mb-20 items-center justify-between'>
                <span className='text-gray-500'>@2024 Jecopa. Todos los derechos reservados.</span>
                <div className='text-gray-500 flex flex-row items-center justify-center space-x-5'>
                    <FaFacebook />
                    <FaInstagram />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
