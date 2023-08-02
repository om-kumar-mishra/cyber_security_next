import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
const RelatedServices = () => {

    const [getdata, setData] = useState([]);

    useEffect(() => {

        axios.get('http://alobhaitsolution.com:5005/api/main-service')
            .then(function (response) {
                // handle success
                //    console.log(response.data.data[0].title)
                //console.log("related =====",response.data.data.list)
                let d = response.data.data.list

                setData(d)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);
    return (
        <>
            <h3 className="services-related-post">Related Post</h3>
            <div className="row">

                {/* {
                    getdata.map((element) => {
                        return (
                            <>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-solutions solutions-time-bg-1 mb-0 mb-ud">
                                        <div className="solutions-content">
                                            <h3>{element?.title}</h3>
                                            <p>{element?.description?.slice(0,200).replace(/(<([^>]+)>)/ig, '')+"..."}</p>

                                            <Link href={{ pathname: '/service-details', query: { id: element?.id } }}>
                                                <a className="read-more">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                } */}
                <div className="col-lg-6 col-sm-6">
                    <div className="single-solutions solutions-time-bg-2 mb-0">
                        <div className="solutions-content">
                            <h3>{getdata[0]?.title}</h3>
                            <p>{getdata[0]?.description.replace(/(<([^>]+)>)/ig, '')+"..."}</p>

                            <Link href={{ pathname: '/service-details', query: { id: getdata[0]?.id } }}>
                                <a className="read-more">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="single-solutions solutions-time-bg-2 mb-0">
                        <div className="solutions-content">
                            <h3>{getdata[1]?.title}</h3>
                            <p>{getdata[1]?.description.replace(/(<([^>]+)>)/ig, '')}</p>

                            <Link href={{ pathname: '/service-details', query: { id: getdata[1]?.id } }}>
                                <a className="read-more">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedServices;