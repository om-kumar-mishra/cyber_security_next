import React, { Component } from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default class WhyChooseUs extends Component {

  
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }



    componentDidMount() {
        fetch(
"http://alobhaitsolution.com:5005/api/why-we")
            .then((res) => res.json())
            .then((json) => {
                
                this.setState({
                    items: json.data,
                    DataisLoaded: true
                });
            })
    }


    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("wcu_tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            // tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        // document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }





    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
            <div className="choose-us-six-area ptb-100 overflow-hidden">
                <div className="container">
                    <div className="section-title-six">
                        <span>Why We</span>
                        <h2>We Different From Others</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       
                    </div>
                  
                    <div className="choose-us-six-content">
                        <div className="tab">
                            <div className="row align-items-center">
                                <div className="col-lg-9">
                                    <div className="tab_content">



                                                
                                        {
                                             

                                             items.map((element) => {
                                                return (
                                                    <>
                                                        <div id={element.id} className="wcu_tabs_item">
                                                            <div className="row align-items-center">
                                                                <div className="col-lg-6">
                                                                    <div className="choose-us-content">
                                                                        <div className="choose-us">
                                                                            <h3>{element.title}</h3>
                                                                            <p>{element.description.replace(/(<([^>]+)>)/ig, '')}</p>
                                                                        </div>
                                                                        <div className="shape-1">
                                                                            <img src="/img/home-six/choose-us/shape-1.png" alt="Image" />
                                                                        </div>
                                                                        <div className="shape-3">
                                                                            <img src="/img/home-six/choose-us/shape-3.png" alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="choose-us-img">
                                                                        <img style={{maxHeight:"420px",minHeight:"420px"}}  src={`http://alobhaitsolution.com:5005/uploaded-files/${element.image}`} alt="Image" />

                                                                        <div className="shape-2">
                                                                            <img src="/img/home-six/choose-us/shape-2.png" alt="Image" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })




                                        }


                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <ul className="tabs">


                                        {

                                               items.map((element) => {
                                                return (
                                                    <>
                                                        <li
                                                            onClick={(e) => this.openTabSection(e, element.id)}
                                                        >
                                                            <i className="bx bx-chevron-left"></i>
                                                            {
                                                                element.title
                                                            }
                                                            {/* Dedicated Team */}
                                                        </li>

                                                    </>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
