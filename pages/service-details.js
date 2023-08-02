import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import Footer from '../components/_App/Footer';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

const ServiceDetails = () => {
  const router = useRouter()

  const [getId, setId] = useState(null);
  const { id } = router.query

  console.log("service details",id)
  return (
    <>
      {/* {id} */}

      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
      // homePageText="Home" 
      // activePageText="Service Details" 
      />
    
          <ServiceDetailsContent
            id={id}
          />

    

      <Footer />
    </>
  )
}

export default ServiceDetails;