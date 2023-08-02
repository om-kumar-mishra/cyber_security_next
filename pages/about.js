import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
// import EffectiveProtection from '../components/HomeOne/EffectiveProtection';
// import ElectronicProtection from '../components/HomeOne/ElectronicProtection';
// import SecurityApproach from '../components/HomeOne/SecurityApproach';
// import Testimonials from '../components/Common/Testimonials';
// import Partner from '../components/Common/Partner';
import Footer from '../components/_App/Footer';
import WeCreateVirtualWorld from '../components/HomeEight/WeCreateVirtualWorld';
import Team from '../components/HomeEight/Team';
// import ServicesTab from '../components/HomeSix/ServicesTab';
import ProtectYourWebsite from '../components/Common/ProtectYourWebsite';
import WhyChooseUs from '../components/HomeSix/WhyChooseUs';

const About = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="About Us"
                homePageUrl="/"
                // homePageText="Home"
                // activePageText="About"
            />
            <Team />

            <WeCreateVirtualWorld />

            {/* <EffectiveProtection /> */}
            <WhyChooseUs/>

            <ProtectYourWebsite />

            <Footer />
        </>
    )
}

export default About;