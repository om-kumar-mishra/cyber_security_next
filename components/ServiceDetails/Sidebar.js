import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Sidebar = (props) => {
    console.log("sidebar props======,", props)
    const [getdata, setData] = useState([]);
    //const [active, setActive] = useState(1);
    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/main-service')
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


    return (
        <div className="sidebar-pl-15">
            <aside className="widget-area" id="secondary">
                <div className="widget widget_search">
                    <h3 className="widget-title mt-2">Search Now</h3>
                    <div className="post-wrap">
                        <form  method='' action='' className="search-form">
                            <label>
                                <input type="search" className="search-field" placeholder="Search..." disabled/>
                            </label>
                            <button type="button" disabled><i className='bx bx-search'></i></button>
                        </form>
                    </div>
                </div>

                <section className="widget widget_categories">
                    <h3 className="widget-title">Other Services</h3>
                    <div className="post-wrap">
                        <ul>

                            {
                                getdata.list?.map((element) => {
                                    return (
                                        <>


                                        
                                               {
                                                (props.id!=element.id)?
                                                    
                                                            <li>
                                                        <Link href={{ pathname: '/service-details', query: { id: element?.id } }}>
                                                            <a>{element.title}</a>
                                                        </Link>
                                                        </li>
                                                   
                                                    :""

                                                   }

                                          
                                        </>
                                    )


                                })

                            }
                            {/* <li>
                                <Link href="#">
                                    <a>Information Security Risk Assessments And Audits</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Vulnerability Assessment</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Penetration Testing</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>ISO 27001 Readiness And Compliance</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Business Continuity Management</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Regulatory Compliance</a>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </section>

                {/* <section className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>
                    <div className="post-wrap">
                        <div className="tagcloud">
                            <Link href="#">
                                <a>Blockchain (3)</a>
                            </Link>
                            <Link href="#">
                                <a>Cyber security (3)</a>
                            </Link>

                            <Link href="#">
                                <a>Cybercrime (2)</a>
                            </Link>

                            <Link href="#">
                                <a>Global news (2)</a>
                            </Link>

                            <Link href="#">
                                <a>Ransomware (1)</a>
                            </Link>

                            <Link href="#">
                                <a>Whitepapers (2)</a>
                            </Link>
                        </div>
                    </div>
                </section> */}
            </aside>
        </div>
    )
}

export default Sidebar;