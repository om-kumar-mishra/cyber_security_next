import React , {useState} from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Detail from '../components/IndustryDetail/Detail';
// import Description from '../components/IndustryDetail/Description';
// import IndustriesImage from '../components/IndustryDetail/IndustriesImage';
import Partner from '../components/Common/Partner';


const IndustrieDetails = () => {
    const [industryName , setindustryName] = useState("Industries Details")
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle={industryName} 
                homePageUrl="/" 
                // homePageText="Home" 
                // activePageText="Industrie Details" 
            /> 
            <Detail/>
            {/* <Description/>
            <IndustriesImage/> */}
            <Partner />
            <Footer />
        </>
    )
}

export default IndustrieDetails;