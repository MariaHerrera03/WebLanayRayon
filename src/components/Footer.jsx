import React from 'react'
import {FaInstagram, FaEnvelope, FaPhone} from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <div className='containerOne bg-purple-bg px-10 py-4'>
                <h1 className='text-center text-purple-dark text-sm leading-5'>Sé la o el primera(o) en conocer nuestras promociones, novedades y actividades</h1>
                <div className='containerOneOne grid grid-cols-1 py-2'>
                    <h1 className=' text-purple-dark text-sm leading-5 font-bold py-1'>Siguenos</h1>
                    <FaInstagram size={25} className='fill-purple-light'/>
                </div>
            </div>
            <div className='containerTwo bg-purple-light px-20 py-4'>
                <div className='containerTwoOne grid grid-cols-3 justify-items-center py-1'>
                    <FaEnvelope size={20} className='fill-purple-bg col-start-1 col-end-2'/>
                    <h1 className='text-center text-light text-sm leading-5 col-start-2 col-end-4'>lana&rayon@gmail.com</h1>
                </div>
                <div className='containerOTwoTwo grid grid-cols-3 justify-items-center py-1'>
                    <FaPhone size={20} className='fill-purple-bg col-start-1 col-end-2'/>
                    <h1 className='text-center text-light text-sm leading-5 col-start-2 col-end-4'>+57 320 3401448</h1>
                </div>
            </div>
            <div className='containerOne bg-purple-light px-10 py-4'>
                <h5 className='text-center text-light text-xs leading-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</h5>
            </div>
        </div>
    )
}

export default Footer