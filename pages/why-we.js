import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import WhyChooseUs from '../components/HomeSix/WhyChooseUs';
import CounterArea from '../components/HomeSix/CounterArea';
import Footer from '../components/_App/Footer';

const Why = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Why We"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Why We"
            />


            <WhyChooseUs />

            <CounterArea />
            {/* <ContactInfo />

            <ContactForm /> */}

            <Footer />
        </>
    )
}

export default Why;