import React from 'react';
// import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';




const Home = () => {
    return (
        <div>
            <Hero />
            <Intro />
            <Services />     
            {/* <Clients /> */}
            <Footer />
        </div>

    )
}

export default Home;

