import React from 'react'
import {FaInstagram, FaEnvelope, FaPhone} from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <div className='containerOne bg-purple-bg px-10 py-4'>
                <h1 className='text-center text-purple-dark text-sm leading-5'>Sé la o el primera(o) en conocer nuestras promociones, novedades y actividades</h1>
                <div className='containerOneOne grid grid-cols-1 py-2'>
                    <h1 className=' text-purple-dark text-sm leading-5 font-bold py-1'>Siguenos</h1>
                    <a href='https://api.whatsapp.com/send?phone=573203401248'>
                        <FaInstagram size={25} className='fill-purple-light'/>
                    </a>
                </div>
            </div>
            <div className='containerTwo grid grid-cols-1 bg-purple-light px-20 py-4 justify-items-center'>
                <div className='containerTwoOne flex items-center py-1'>
                    <FaEnvelope size={37} className='fill-purple-bg px-2'/>
                    <h1 className='text-center text-light text-sm leading-5'>lana&rayon@gmail.com</h1>
                </div>
                <div className='containerOTwoTwo flex items-center py-1'>
                    <a href='https://api.whatsapp.com/send?phone=573203401248'>
                        <FaPhone size={37} className='fill-purple-bg px-2'/>
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=573203401248'>
                        <h1 className='text-center text-light text-sm leading-5'>+57 320 3401448</h1>
                    </a>
                </div>
            </div>
            <div className='containerOne bg-purple-light px-10 py-4'>
                <h5 className='text-center text-light text-xs leading-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</h5>
            </div>
        </div>
    )
}

export default Footer