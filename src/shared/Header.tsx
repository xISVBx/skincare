import * as React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export interface Menu {
  name: string;
  link: string;
  options?: Menu[];

}

interface IHeaderProps {
  menus: Menu[];
  children: React.ReactNode
}

const Header: React.FunctionComponent<IHeaderProps> = ({ menus, children }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const navigate = useNavigate();

  // Detectar si el usuario está en móvil
  React.useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile(); // Llamar inmediatamente
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Cerrar el menú si se hace clic fuera
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.menu-container')) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className='w-screen h-[70px] bg-primary flex flex-row justify-between py-5 items-center pr-10 shadow-2xl'>
      <div className='bg-white h-[70px] w-[100px] flex flex-col rounded-r-lg'>
        <img className="max-h-[70px] w-auto object-cover" src="/logo.svg" alt="Logo" />
      </div>


      <div className='flex flex-row space-x-10'>
        {menus.map((menu, index) => (
          <div
            key={index}
            className='relative menu-container'
            onMouseEnter={() => !isMobile && setOpenIndex(index)}
            onMouseLeave={() => !isMobile && setOpenIndex(null)}
            onClick={() => isMobile ? setOpenIndex(openIndex === index ? null : index) : (navigate(menu.link))} // Click en móviles
          >
            <div className='flex flex-row items-center text-white space-x-2'>
              <p className='font-semibold hover:font-bold cursor-pointer'>
                {menu.name}
              </p>
              {menu.options && menu.options.length > 0 && (openIndex === index ? <FaChevronUp /> : <FaChevronDown />)}
            </div>

            {menu.options && openIndex === index && (
              <div className='absolute left-0 pt-2 bg-primary shadow-lg rounded-lg w-44 p-2 z-10'>
                {menu.options.map((option, optIndex) => (
                  <a
                    key={optIndex}
                    href={option.link}
                    className="block px-4 py-2 text-white hover:font-semibold"
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="h-full flex flex-row items-center space-x-10">
        {children}
      </div>
    </header>
  );
};

export default Header;
