import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser'; 

const TermsConditions = () => {

    const [getdata, setData] = useState([]);
    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/slug?slug_name=term_condition')
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
            <Navbar />
            
            <PageBanner 
                pageTitle="Terms & Conditions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms & Conditions" 
            /> 

            <section className="terms-conditions-area ptb-100">
                <div className="container">
                    <div className="single-privacy">

                         {

                          ReactHtmlParser (getdata.description) 
                         
                        }
                        {/* <h3 className="mt-0">Welcome To Pisa Terms Conditions</h3>

                        <ul>
                            <li>
                                <p><strong>01.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora laboriosam porro fugit debitis, dolorem natus assumenda facilis in ut reiciendis laborum sapiente minima libero quas praesentium ex rerum eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla porro commodi illum necessitatibus, dicta officiis dolore iusto quaerat officia alias blanditiis, in ea non eveniet? Ipsam neque harum in. quas praesentium ex rerum eos</p>
                            </li>
                            <li>
                                <p><strong>02.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora laboriosam porro fugit debitis, dolorem natus assumenda facilis in ut reiciendis laborum sapiente minima libero quas praesentium ex rerum eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit necessitatibus similique quia nostrum ullam repellendus ea, eum ipsum voluptate odit harum reprehenderit, nesciunt eius animi totam aliquam dicta officia minima!</p>
                            </li>
                            <li>
                                <p><strong>03.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora laboriosam porro fugit debitis, dolorem natus assumenda facilis in ut reiciendis laborum sapiente minima libero quas praesentium ex rerum eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magnam cum a doloremque? Eveniet, eum consequatur? Provident accusantium, libero molestiae consequuntur quisquam laboriosam dolor voluptas? Eveniet!</p>
                            </li>
                            <li>
                                <p><strong>04.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora laboriosam porro fugit debitis, dolorem natus assumenda facilis in ut reiciendis laborum sapiente minima libero quas praesentium ex rerum eos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem atque sapiente debitis distinctio mollitia deleniti beatae nostrum reprehenderit aperiam nobis recusandae voluptas harum, totam necessitatibus quia adipisci.</p>
                            </li>
                            <li>
                                <p><strong>05.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora laboriosam porro fugit debitis, dolorem natus assumenda facilis in ut reiciendis laborum sapiente minima libero quas praesentium ex rerum eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus voluptatem porro aliquid illo optio necessitatibus, rem in aspernatur natus voluptate dolorum nihil repellat quia assumenda impedit eligendi, doloremque?</p>
                            </li>
                        </ul>

                        <h3>Help Conditions</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <h3>Services Conditions</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default TermsConditions;