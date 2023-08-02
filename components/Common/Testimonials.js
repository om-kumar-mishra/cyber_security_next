import React from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useState, useEffect } from 'react';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 30,
    mouseDrag: true,
    dots: false,
    nav: false,
    navText: ["<div class='nav-button owl-prev text-white'>‹</div>", "<div class='nav-button owl-next text-white'>›</div>"],
    autoplay: false,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    center: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    // React.useEffect(() => {
    //     setDisplay(true);
    // }, [])


    const [getdata, setData] = useState(null);
    const [getTitle, setTitle] = useState([]);

    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/testimonial')
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


        axios.get('http://alobhaitsolution.com:5005/api/our-advisory-main-title-desc')
            .then(function (response) {
                // handle success

                let d = response.data.data

                setTitle(d)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);



    return (
        <section className="client-area ptb-100">
            <div className="container">
                <div className="section-title white-title">
                    <h2>{getTitle?.title}</h2>
                    <p>{getTitle?.description?.replace(/(<([^>]+)>)/ig, '')}</p>
                    {/* <h2>Our Advisory Board</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p> */}
                </div>

                {getdata ? <OwlCarousel
                    className="client-wrap owl-carousel owl-theme"
                    {...options}
                >

                    {
                        getdata.map((element) => {
                            return (
                                <>
                                    <div className="single-client">
                                        <i className="quotes bx bxs-quote-alt-left"></i>
                                        <p>{element.message?.replace(/(<([^>]+)>)/ig, '')}</p>

                                        <ul>
                                            <li><i className="bx bxs-star"></i></li>
                                            <li><i className="bx bxs-star"></i></li>
                                            <li><i className="bx bxs-star"></i></li>
                                            <li><i className="bx bxs-star"></i></li>
                                            <li><i className="bx bxs-star"></i></li>
                                        </ul>

                                        <div className="client-img">
                                            <img src={`http://alobhaitsolution.com:5005/uploaded-files/${element.image} `} alt="Image" className='testimonial-img' />
                                            <h3>{element.Name}</h3>
                                            <span>{element.designation}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }



                    {/* <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>

                        <div className="client-img">
                            <img src="/img/client-img/client1.jpg" alt="Image" />
                            <h3>Alen Meair</h3>
                            <span>Developer</span>
                        </div>
                    </div> */}

                    {/* <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>

                        <div className="client-img">
                            <img src="/img/client-img/client2.jpg" alt="Image" />
                            <h3>Axon Detos</h3>
                            <span>CEO</span>
                        </div>
                    </div>

                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>

                        <div className="client-img">
                            <img src="/img/client-img/client3.jpg" alt="Image" />
                            <h3>John Dona</h3>
                            <span>Designer</span>
                        </div>
                    </div>

                    <div className="single-client">
                        <i className="quotes bx bxs-quote-alt-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>
                        
                        <div className="client-img">
                            <img src="/img/client-img/client4.jpg" alt="Image" />
                            <h3>Jon Smith</h3>
                            <span>Developer</span>
                        </div>
                    </div> */}
                </OwlCarousel> : ''}
            </div>
        </section>
    )
}

export default Testimonials;