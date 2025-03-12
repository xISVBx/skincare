import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";

export interface ProfileOption {
    label: string;
    link?: string;
    onClick?: () => void;
    Icon?: React.ReactNode;
    subOptions?: ProfileOption[]; // Soporte para submenús
}

interface ProfileProps {
    name: string;
    options?: ProfileOption[];
}

const Profile: React.FC<ProfileProps> = ({ name, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Cierra el menú si se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setOpenSubmenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Obtener iniciales del nombre
    const getInitials = (fullName: string) => {
        return fullName
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase();
    };

    return (
        <div className="relative inline-block" ref={menuRef}>
            {/* Botón principal */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-12 h-12 bg-gray-400 text-white 
                rounded-full font-medium hover:bg-gray-500 transition"
            >
                {getInitials(name)}
            </button>

            {/* Dropdown si hay opciones */}
            {options && options.length > 0 && isOpen && (
                <div className="absolute mt-2 w-48 right-0 bg-white border border-gray-300 
                rounded-lg shadow-lg p-2 z-10">
                    {options.map((option, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => {
                                    if (option.subOptions) {
                                        setOpenSubmenu(openSubmenu === index ? null : index);
                                    } else {
                                        option.onClick?.();
                                        setIsOpen(false);
                                    }
                                }}
                                className="flex justify-between items-center w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    {option.Icon && <div className="h-5 w-5">{option.Icon}</div>}
                                    <span>{option.label}</span>
                                </div>
                                {option.subOptions && <FaChevronRight className="text-gray-500" />}
                            </button>

                            {/* Submenú */}
                            {option.subOptions && openSubmenu === index && (
                                <div className="absolute top-0 right-full w-48 bg-white border border-gray-300 
                                rounded-lg shadow-lg p-2 z-10">
                                    {option.subOptions.map((subOption, subIndex) => (
                                        <button
                                            key={subIndex}
                                            onClick={() => {
                                                subOption.onClick?.();
                                                setIsOpen(false);
                                            }}
                                            className="flex items-center space-x-2 w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                                        >
                                            {subOption.Icon && <div className="h-5 w-5">{subOption.Icon}</div>}
                                            <span>{subOption.label}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profile;
