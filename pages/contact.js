import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';
import { useRouter } from "next/router";
const Contact = () => {
   
    // const router = useRouter()
    // const { getintouch } = router.query
    // console.log("useRouter?.query==========",getintouch)
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 

                // getTouch={getintouch}
                // homePageText="Home" 
                // activePageText="Contact" 
            /> 

            <ContactInfo />

            <ContactForm />
            
            <Footer />
        </>
    )
}

export default Contact;