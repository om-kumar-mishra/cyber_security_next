import React from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function OurIndustries() {

    const [getdata, setData] = useState([]);
    const [getMainTitle, setMainTitle] = useState();


    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/industry')
            .then(function (response) {

                let d = response.data.data
                //    console.log("=====ferreeewrew",response.data.data)
                setData(d)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        axios.get('http://alobhaitsolution.com:5005/api/industry-main-title-desc')
            .then(function (response) {

                let d = response.data.data
                //   console.log("=====ferreeewrew",response.data.data)
                setMainTitle(d)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);


    return (
        <section className="performance-area bg-none pt-70 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>{getMainTitle?.title}</h2>
                    <p>{getMainTitle?.description?.replace(/(<([^>]+)>)/ig, '')}</p>
                </div>
                       {console.log("getdata in our industries:",getdata)}
                <div className="row">
                    {
                       
                        getdata.map((element) => {
                                return <div className="col-lg-3 col-sm-6">
                                    <div className="single-security">
                                        {/* <i className="flaticon-website"></i> */}
                                        <i className="">
                                        <img className="img-round" src={`http://alobhaitsolution.com:5005/uploaded-files/${element?.icon}`} alt="image" style={{ maxHeight: "90px", maxWidth: "90px" }}    ></img>
                                        </i>
                                        <h3>{element?.title}</h3>
                                        <p>{element?.description?.slice(0,100).replace(/(<([^>]+)>)/ig, '')+"..."}</p>

                                        <Link  href={{ pathname: '/industries-detail', query: { id: element?.id } }}>
                                            <a className="read-more">Read More</a>
                                        </Link>
                                        {/* <img src={`http://alobhaitsolution.com:5005/uploaded-files/${element?.icon}`} alt="image" style={{maxHeight:"50px",maxWidth:"50px"}} ></img> */}
                                         <img src="/img/shape/shape4.png" alt="Image" />
                                    </div>
                                </div>
                           
                        })
                    }
                    {/* <div className="col-lg-3 col-sm-6">
                        <div className="single-security">
                            <i className="flaticon-website"></i>
                            <h3>Energy and Infrastructure</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>

                            <Link href="/industries-detail">
                                <a className="read-more">Read More</a>
                            </Link>

                            <img src="/img/shape/shape4.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-security">
                            <i className="flaticon-profile"></i>
                            <h3>Manufacturing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>

                            <Link href="/industries-detail">
                                <a className="read-more">Read More</a>
                            </Link>

                            <img src="/img/shape/shape4.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-security">
                            <i className="flaticon-content"></i>
                            <h3>Educational Institutions</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>

                            <Link href="/industries-detail">
                                <a className="read-more">Read More</a>
                            </Link>

                            <img src="/img/shape/shape4.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-security">
                            <i className="flaticon-cyber"></i>
                            <h3>Medical Establishments</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>

                            <Link href="/industries-detail">
                                <a className="read-more">Read More</a>
                            </Link>

                            <img src="/img/shape/shape4.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-security">
                            <i className="flaticon-profile"></i>
                            <h3>Pharmaceuticals</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>

                            <Link href="/industries-detail">
                                <a className="read-more">Read More</a>
                            </Link>

                            <img src="/img/shape/shape4.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-security">
                            <i className="flaticon-profile"></i>
                            <h3>Financial Institutions and Banks</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>

                            <Link href="/industries-detail">
                                <a className="read-more">Read More</a>
                            </Link>

                            <img src="/img/shape/shape4.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-security">
                            <i className="flaticon-profile"></i>
                            <h3>Hospitality and Asset Management</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>

                            <Link href="/industries-detail">
                                <a className="read-more">Read More</a>
                            </Link>

                            <img src="/img/shape/shape4.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-security">
                            <i className="flaticon-profile"></i>
                            <h3>Government Institutions</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>

                            <Link href="/industries-detail">
                                <a className="read-more">Read More</a>
                            </Link>

                            <img src="/img/shape/shape4.png" alt="Image" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

