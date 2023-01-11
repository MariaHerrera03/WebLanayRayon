import React from 'react'
import Aboutus from '../components/Aboutus'
import Carousel from '../components/Carousel'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div id='Home' className='bg-sand-bg'>
            <Navbar/>
            <Carousel/>
            <Collections/>
            <Aboutus/>
            <Footer/>
        </div>
    )
}

export default Home