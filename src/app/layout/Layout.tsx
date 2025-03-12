import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import Header, { Menu } from '../../shared/Header';
import Profile, { ProfileOption } from '../../shared/Profile';
import Footer from '../../shared/Footer';
import { FaCartShopping } from "react-icons/fa6";


interface ILayoutProps {
}

const adminHeader: Menu[] = [
    {
        link: '/',
        name: 'Home'
    },
    {
        link: '',
        name: 'Products',
        options: [
            {
                link: '',
                name: 'Limpieza facial'
            },
            {
                link: '',
                name: 'Hidratantes'
            },
            {
                link: '',
                name: 'Mascarillas'
            },
            {
                link: '',
                name: 'Protectores solares'
            },
            {
                link: '',
                name: 'Kits y sets'
            }
        ]
    },
    {
        link: '',
        name: 'Kinds of skins'
    },
    {
        link: '/workshops',
        name: 'Workshops'
    },
    {
        link: '/aboutus',
        name: 'About us'
    }
]

const adminProfileOption: ProfileOption[] = [
    {
        label: "My account",
        onClick: () => { },
        Icon: <MdAccountCircle className='h-full w-full text-gray-400'/>
    },
    {
        label: "Shoppingcart",
        onClick: () => { 

        },
        Icon: <FaCartShopping className='h-full w-full text-gray-400' />,
    },
    {
        label: "Logout",
        onClick: () => { },
        Icon: <IoExitOutline className='h-full w-full text-gray-400'/>
    }
]

const Layout: React.FunctionComponent<ILayoutProps> = () => {
    return (
        <>
            <Header menus={adminHeader}
                children={<Profile name={'Ivan Santiago Vasquez'} options={adminProfileOption} />} />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
