import React, { useEffect } from 'react'
import '../../App.css'
import HeroSection from '../HeroSection/HeroSection'
import Cards from '../Card/Cards'
import Footer from '../Footer/Footer'

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return(
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;