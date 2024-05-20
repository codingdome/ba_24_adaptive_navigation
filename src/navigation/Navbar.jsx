import React from "react";
import Logo from '../assets/logo.svg';
import { Spin as Hamburger } from 'hamburger-react'
import { useNavigate } from "react-router-dom";

const Navbar = ({
    tradIsOpen,
    setTradIsOpen,
    mode
}) => {

    const navigate = useNavigate();

    return (
        <div className='w-full flex gap-2 items-center sticky top-0 left-0 h-[70px] overflow-hidden bg-[#FFFFFF] py-4 px-2'>
            {mode === 'traditional' && (
                <div className='relative'>
                    <Hamburger toggled={tradIsOpen} toggle={setTradIsOpen} />
                    <p className='absolute top-9 left-1 font-medium text-sm text-center'>Menü</p>
                </div>
            )}
            <button onClick={() => navigate('/')} className='h-full w-auto'>
                <img className='object-contain h-full' src={Logo} alt="" />
            </button>
        </div>
    )
}

export default Navbar;