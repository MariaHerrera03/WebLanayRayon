import React, { useState } from 'react'
import imageLogo from '../assets/img/logo.png';
import {FaBars, FaShoppingCart, FaInstagram, FaEnvelope, FaPhone} from 'react-icons/fa'

const Navbar = () => {

    const [navClass, setNavClass] = useState('absolute top-0 left-0 grid grid-cols-1 bg-magenta-opa w-screen h-screen')

    const handleOpenMenu = () => {
        setNavClass('absolute top-0 left-0 grid grid-cols-1 bg-magenta-opa w-screen h-screen')
    };
    const handleCloseMenu = () => {
        setNavClass('hidden')
    };

    return (
        <div className='sticky top-0 w-full'>
            <div className='containerOne bg-sand-light-70 px-10 py-2'>
                <h5 className='text-center text-purple-dark text-xs leading-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</h5>
            </div>
            <div className='containerTwo w-18 bg-sand-bg px-10 py-2 grid grid-cols-5 gap-10 items-center justify-items-center'>
                <div className='colOne col-start-1 col-end-2 items-center'>
                    <button onClick={handleOpenMenu}>
                        <FaBars size={25} className='fill-purple-dark cursor-pointer' />
                    </button>
                    <nav className={navClass}>
                        <div className='w-9/12 text-base font-normal text-light bg-magenta-light pt-16' >
                            <div className='grid grid-cols-1 pl-12'>
                                <button onClick={handleCloseMenu} className='py-5'>
                                        <FaBars size={25} className='fill-light cursor-pointer'/>
                                </button>
                                <a className='tracking-widest pl-10 py-1' href='#Home'>HOME</a>
                                <a className='tracking-widest pl-10 py-1' href=''>PERSONALIZADOS</a>
                                <a className='tracking-widest pl-10 py-1' href=''>RELIGIOSOS</a>
                                <a className='tracking-widest pl-10 pt-1 pb-20' href=''>NAVIDEÑOS</a>
                            </div>
                        </div>
                        <div className='w-9/12 py-12 px-12 grid grid-cols-1 bg-magenta-dark justify-items-center'>
                            <div className='containerMenuOne flex items-center'>
                                <a href='https://www.instagram.com/lanayrayon/'>
                                    <FaInstagram size={35} className='fill-light px-2'/>
                                </a>
                                <a href='https://www.instagram.com/lanayrayon/'>
                                    <h1 className='text-light text-sm leading-5'>@lanayrayon</h1>
                                </a>
                            </div>
                            <div className='containerMenuTwo flex items-center'>
                                <FaEnvelope size={35} className='fill-light px-2'/>
                                <h1 className='text-light text-sm leading-5'>lana&rayon@gmail.com</h1>
                            </div>
                            <div className='containerMenuThree flex items-center'>
                                <a href='https://api.whatsapp.com/send?phone=573203401248'>
                                    <FaPhone size={35} className='fill-light px-2'/>
                                </a>
                                <a href='https://api.whatsapp.com/send?phone=573203401248'>
                                    <h1 className='text-light text-sm leading-5'>+57 320 3401448</h1>
                                </a>
                            </div> 
                        </div>
                    </nav>
                </div>
                <div className='colTwo col-start-2 col-end-5 items-center w-16'>
                    <a href='#Home'><img src={imageLogo} alt='Logo Lana & Rayón'/></a>
                </div>
                <div className='colThree col-start-5 col-end-6 items-center'>
                    <a href=''><FaShoppingCart size={25} className='fill-purple-dark'/></a>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar