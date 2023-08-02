import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import  { useState, useEffect } from 'react';

const WeCreateVirtualWorld = () => {

    const [getdata, setData] = useState([]);
    // const [getvission, setVission] = useState([]);
    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/about-us')
        .then(function (response) {
          // handle success
        //    console.log(response.data.data[0].title)
           let d=response.data.data
         
           setData(d)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })





      },[]);
   

    return (
        <>
            <div className="safer-world-area with-black-color pb-100 pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="safer-world-image">
                            <img src={`http://alobhaitsolution.com:5005/uploaded-files/${getdata.v_m_image}`} alt="image" />
                                {/* <img src="/img/home-7-8-9/safer-world/safer-world.png" alt="image" /> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="safer-world-content">
                                <h3>{getdata?.v_m_title}</h3>
                                <p>{getdata?.v_m_description?.replace(/(<([^>]+)>)/ig, '')}</p>

                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="safer-world-inner-box">
                                            <h4>Our Mission</h4>
                                            <p>{getdata?.mission_description?.replace(/(<([^>]+)>)/ig, '')}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="safer-world-inner-box">
                                            <h4>Our Vision</h4>
                                            <p>{getdata?.vision_description?.replace(/(<([^>]+)>)/ig, '')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="safer-world-btn">
                                    <Link href="/about">
                                        <a className="default-btn">Know More About Us</a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeCreateVirtualWorld;