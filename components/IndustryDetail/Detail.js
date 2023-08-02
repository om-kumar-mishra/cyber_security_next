import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
export default function Detail() {


    const [getdata, setData] = useState();

    const router = useRouter();
    const { id } = router.query;
    // useEffect(() => {
    //     // axios.get(`http://alobhaitsolution.com:5005/api/industry?id=${id}`)
    //     //     .then(function (response) {

    //     //         let d = response.data.data
    //     //         // console.log("=====ferreeewrew", response.data.data)
    //     //         setData(d)
    //     //     })
    //     //     .catch(function (error) {
    //     //         // handle error
    //     //         console.log(error);
    //     //     })


    // }, []);

    setTimeout(()=>{
        axios.get(`http://alobhaitsolution.com:5005/api/industry?id=${id}`)
        .then(function (response) {

            let d = response.data.data
            // console.log("=====ferreeewrew", response.data.data)
            setData(d)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },500)
    return (
        <>
            <section className="approach-area pb-70 pt-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="approach-img">
                                {/* <img src="/img/approach-img.jpg" alt="Image" /> */}
                                <img style={{maxHeight:"600px",minHeight:"600px"}} src={`http://alobhaitsolution.com:5005/uploaded-files/${getdata?.image}`} alt="image"  ></img>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="approach-content">




                                {/* <h2>How we do it (Our approach to information security and resilience)</h2> */}
                                <h2>{getdata?.title}</h2>

                                {/* <p>{
                               
                                getdata?.description?.slice(0, 1600).replace(/(<([^>]+)>)/ig, '')
                            }</p> */}
                            <p>{ReactHtmlParser( getdata?.description?.slice(0, 1600))}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="approach-area pt-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="approach-content">
                                {/* <p>{
                               
                                getdata?.description?.slice(1600).replace(/(<([^>]+)>)/ig, '')
                            
                                }</p> */}
                                 <p>{ReactHtmlParser(getdata?.description?.slice(1600))}</p>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumv</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumv</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumv</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* description */}
            {/* <section className="approach-area pt-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="approach-img">
                            <img src="/img/transform-img.jpg" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="approach-img">
                            <img src="/img/transform-img.jpg" alt="Image" />    
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
            {/* images */}
            {/* <section className="approach-area pt-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="approach-img">
                                <img src="/img/transform-img.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="approach-img">
                                <img src="/img/transform-img.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="approach-area pt-70">
                <div className="container">
                    <div className="row align-items-center">

                        {
                            getdata?.industry_image?.map((element) => {
                                return (
                                    <>
                                        <div className="col-lg-6">
                                            <div className="approach-img">
                                                <img style={{maxHeight:"500px",minHeight:"500px"}} src={`http://alobhaitsolution.com:5005/uploaded-files/${element?.image}`} alt="image"  ></img>

                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }

                        {/* <div className="col-lg-6">
                        <div className="approach-img">
                            <img src="/img/transform-img.jpg" alt="Image" />    
                        </div>
                    </div> */}
                    </div>
                </div>
            </section>
        </>

    )
}
