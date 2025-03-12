import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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
                name: 'Facial Cleansers'
            },
            {
                link: '',
                name: 'Moisturizers'
            },
            {
                link: '',
                name: 'Masks'
            },
            {
                link: '',
                name: 'Sunscreens'
            },
            {
                link: '',
                name: 'Kits and Sets'
            }
        ]
    },
    {
        link: '',
        name: 'Skin Types'
    },
    {
        link: '/workshops',
        name: 'Workshops'
    },
    {
        link: '/aboutus',
        name: 'About Us'
    }
]



const Layout: React.FunctionComponent<ILayoutProps> = () => {
    const navigate = useNavigate()
    const adminProfileOption: ProfileOption[] = [
        {
            label: "My account",
            onClick: () => { },
            Icon: <MdAccountCircle className='h-full w-full text-gray-400'/>
        },
        {
            label: "shopping cart",
            onClick: () => { 
                navigate('/shoppingcart')
            },
            Icon: <FaCartShopping className='h-full w-full text-gray-400' />,
        },
        {
            label: "Logout",
            onClick: () => { },
            Icon: <IoExitOutline className='h-full w-full text-gray-400'/>
        }
    ]
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
