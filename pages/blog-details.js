import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/_App/Footer';
import { useRouter } from "next/router";
import axios from 'axios';
import { useState, useEffect } from 'react';
const BlogDetails = () => {
 // const { id } = useRouter.query




    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
            /> 

            <BlogDetailsContent />
            
            <Footer />
        </>
    )
}

export default BlogDetails;