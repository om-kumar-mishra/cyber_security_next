import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup"
import { useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

const initialValues = {
	
	email: "",
	
};
const Footer = () => {
	const EmailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const formik = useFormik({
		initialValues: initialValues,
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Email is required').matches(EmailRegex, 'Invalid email address ')	
		}),

		onSubmit: (values, { resetForm }) => {
			// console.log(values, { resetForm })
			//axios.post('http://alobhaitsolution.com:5005/api/news-letter', values)
            axios.post('http://alobhaitsolution.com:5005/api/news-letter',values)
            .then(function (response) {
                //console.log(response.data.code);
                if(response.data.code==200)
                {
                    toast.success("Successfully subscribed");               
                }
                else{
                    toast.warn("already subscribed");
                }          
            })
            .catch(function (error) {  
            toast.warn(error.response.data.message);
             // console.log("myerror",error);
            })

		}
	})
    const currentYear = new Date().getFullYear();

    const [getdata, setData] = useState([]);
    const [getsubscribe, setSubscribe] = useState("");
    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/contacts')
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

    //  function subscribe(event)
    //  {
    //     event.preventDefault();
    //     if(getsubscribe.endsWith("@gmail.com"))
    //     {

       
    //     axios.post('http://alobhaitsolution.com:5005/api/news-letter',{email:getsubscribe} )
    //     .then(function (response) {
    //         console.log(response.data.code);
    //         if(response.data.code==200)
    //         {
    //             toast.success("Successfully subscribed");               
    //         }
    //         else{
    //             toast.warn("already subscribed");
    //         }
    //       // handle success
    //     //    console.log(response.data.data[0].title)
          
    //     })
    //     .catch(function (error) {
    //       // handle error
    //     //   toast.error(error);
    //     toast.warn(error.response.data.message);
    //       console.log("myerror",error);
    //     })
    
    // }
    // else
    // {
    //     toast.warn("invalid email please include @gmail.com ");
    // }
    //  }


    return (
        <>
                 <ToastContainer />
            <footer className="footer-style-two-with-color pt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget-card">
                                <Link href="/">
                                    <a className="logo">
                                        <img src="/img/cyber-logo.png" alt="Image" />
                                    </a>
                                </Link>

                                <p>{getdata.summary?.replace(/(<([^>]+)>)/ig, '')}</p>

                                <ul className="social-links">
                                    <li>
                                        <a href={getdata?.facebook} target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={getdata?.instagram} target="_blank">
                                            <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={getdata?.linkedIn} target="_blank">
                                            <i className="bx bxl-linkedin-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={getdata?.twitter} target="_blank">
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget-card">
                                <h3>Help</h3>

                                <ul className="custom-links">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget-card">
                                <h3>Contacts</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <span>Address:</span> {' '}
                                        {getdata.address}
                                    </li>
                                    <li>
                                        <span>Email:</span> {' '}
                                        <a href={`mailto: ${getdata?.email} ` }> {getdata?.email}</a>
                                    </li>
                                    <li>
                                        <span>Phone:</span> {' '}
                                        <a href={`tel:+${getdata?.phone}`}>+{getdata?.phone}</a>
                                    </li>
                                    <li>
                                        <span>Fax:</span> {' '}
                                        <a href={`tel:+${getdata?.fax}`}>+{getdata?.fax}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget-card">
                                <h3>Newsletter</h3>

                                <div className="widget-newsletter-content">
                                    <p>Latest resources sent to your inbox weekly</p>
                                </div>

                                <form onSubmit={formik.handleSubmit} className="newsletter-form">
                                    <input
                                        type="email"
                                        title='please include @gmail.com in last'
                                        className="input-newsletter"
                                        placeholder="Email address"
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    	{formik.touched.email && formik.errors.email ? (
													<div className='text-danger'>*{formik.errors.email}</div>
												) : null}
                                    <button type="submit"  className="default-btn">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-style-two-with-color">
                    <div className="container">
                        <p>
                            Copyright <i className="bx bx-copyright"></i>{currentYear} Cyber Security. Designed By <a href="https://www.alobhatechnologies.com/" target="blank">Alobha Technologies Pvt. Ltd.</a>
                        </p>
                        <div className="footer-shape-1">
                            <img src="/img/home-7-8-9/footer/footer-shape-1.png" alt="image" />
                        </div>
                        <div className="footer-shape-2">
                            <img src="/img/home-7-8-9/footer/footer-shape-2.png" alt="image" />
                        </div>
                        <div className="lines-line">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <footer className="footer-top-area pt-100 pb-70 jarallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Contact Us</h3>

                                <ul className="contact-info">
                                    <li>
                                        <i className="bx bx-phone-call"></i>
                                        <span>Hotline:</span> 
                                        <a href="tel:Phone:+892-569-756">
                                            Phone: +892-569-756
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-envelope"></i>
                                        <span>Email:</span> 
                                        <a href="mailto:hello@lorem.com">
                                            hello@lorem.com
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-location-plus"></i>
                                        <span>Address:</span> 
                                        658 Lane Drive st Riverside. California
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Services Link</h3>

                                <ul>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Web Site Protection
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Hosting & Server Guard
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Web Administrator
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Conducting Training
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                GRPS Smart Protection
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Security App
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Support & Help</h3>

                                <ul>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Support Forum
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                FAQ Questions
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                24/7 Support for Help
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Counseling 
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Protection
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Securihty
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Quick Links</h3>

                                <ul>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Security
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Protection
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Antivirus Packages
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Security App 
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Website Security 
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Digital Security
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="footer-bottom-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="copy-right">
                                <p>Copyright &copy;{currentYear} lorem. Designed <a href="https://envytheme.com/" target="blank">EnvyTheme</a></p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="condition-privacy">
                                <ul>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Condition</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
        </>
    );
}

export default Footer;