import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';

// const OwlCarousel = dynamic(import('react-owl-carousel3'));

// const options = {
//     loop: false,
//     nav: true,
//     lazyLoad:true,
//     autoplay: true,
//     autoplayHoverPause: true,
//     mouseDrag: true,
//     margin: 0,
//     dots: false,
//     smartSpeed: 1500,
//     responsive: {
//         0: {
//             items: 1,
//             margin: 30,

//         },
//         576: {
//             items: 2,
//             margin: 30,

//         },
//         768: {
//             items: 4,
//             nav: true,
//         }
//     }
// };
const Slider_group = {
    dots: true,
    nav: true,
    infinite:true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const Partner = () => {

    const [getdata, setData] = useState("");

    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/industry')
            .then(function (response) {
                // handle success
                //    console.log(response.data.data[0].title)
                let d = response.data.data

                setData(d)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);
    // setTimeout(()=>{
    //     axios.get('http://alobhaitsolution.com:5005/api/industry')
    //     .then(function (response) {
    //         // handle success
    //         //    console.log(response.data.data[0].title)
    //         let d = response.data.data

    //         setData(d)
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    // },1000)


    return (
        <div className="partner-area ptb-100">

            <div className="container">
                <div className="section-title text-dark mb-5  ">
                    <h2>Industries</h2>

                </div>
                {/* {getdata ? <OwlCarousel className="partner-wrap-btn partner-wrap owl-carousel owl-theme" {...options} > */}
                {getdata ? <Slider {...Slider_group} className="partner-wrap-btn">
                    {
                        getdata.map((element, index) => {
                            return (
                                <>
                                    <div className="partner-item" >

                                        <Link href={{ pathname: '/industries-detail', query: { id: element?.id } }}>
                                            <img style={{ maxHeight: "200px", minHeight: "200px", cursor: "pointer" }} className="rounded-circle" src={`http://alobhaitsolution.com:5005/uploaded-files/${element?.icon} `} alt="Image" />
                                        </Link>
                                        {/* <a className="partner-overly" href="javascript:void(0);">
                                                <img src={`http://alobhaitsolution.com:5005/uploaded-files/${element?.icon} `} alt="Image" />
                                            </a> */}

                                        {/* <h1>{element?.id}</h1> */}
                                        <Link href={{ pathname: '/industries-detail', query: { id: element?.id } }}>
                                            <h6 style={{ cursor: "pointer" }} className='my-4'>{element?.title}</h6>
                                        </Link>
                                    </div>

                                </>
                            )
                        })

                    }

                    {/* <div className="partner-item">
                        <img src="/img/partners/new/1.png" alt="Image" />

                        <a className="partner-overly" href="javascript:void(0);">
                            <img src="/img/partners/new/oil-gas.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <img src="/img/partners/new/2.png" alt="Image" />

                        <a className="partner-overly" href="javascript:void(0);">
                            <img src="/img/partners/new/hospital.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <img src="/img/partners/new/3.png" alt="Image" />

                        <a className="partner-overly" href="javascript:void(0);">
                            <img src="/img/partners/new/manuf.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <img src="/img/partners/new/4.png" alt="Image" />

                        <a className="partner-overly" href="javascript:void(0);">
                            <img src="/img/partners/new/educational.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <img src="/img/partners/new/5.png" alt="Image" />

                        <a className="partner-overly" href="javascript:void(0);">
                            <img src="/img/partners/new/pharma.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <img src="/img/partners/new/6.png" alt="Image" />

                        <a className="partner-overly" href="javascript:void(0);">
                            <img src="/img/partners/new/govrn.png" alt="Image" />
                        </a>
                    </div>


                    <div className="partner-item">
                        <img src="/img/partners/new/7.png" alt="Image" />

                        <a className="partner-overly" href="javascript:void(0);">
                            <img src="/img/partners/new/bank.png" alt="Image" />
                        </a>
                    </div>

                    <div className="partner-item">
                        <img src="/img/partners/new/8.png" alt="Image" />

                        <a className="partner-overly" href="javascript:void(0);">
                            <img src="/img/partners/new/asset-manag.png" alt="Image" />
                        </a>
                    </div> */}
                </Slider> : ''}
                {/* </OwlCarousel> : ''} */}
            </div>
        </div>
    )
}

export default Partner;