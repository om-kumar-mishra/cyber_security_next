import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import OurIndustries from '../components/Industry/OurIndustries';

const Industries = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Industries"
                homePageUrl="/"
                // homePageText="Home"
                // activePageText="Industries"
            />

            <OurIndustries/>

            <Footer />
        </>
    )
}

export default Industries;