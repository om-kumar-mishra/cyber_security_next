import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Features = () => {

    const [getdata, setData] = useState([]);

    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/banner-content')
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

    let icon = ["bx bx-check-shield", "bx bx-lock", "bx bx-certification"]

    return (
        <div className="container pt-100">
            <div className="row">
                {
                    getdata.map((element, index) => {
                        return (
                            <>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-features">
                                        <h3><i className={icon[index]}></i> {element?.type}</h3>
                                        <p>
                                            {
                                                element?.description?.replace(/(<([^>]+)>)/ig, '')
                                            }
                                        </p>
                                        {/* <p>{
                                            (element?.description?.length > 150) ? element?.description?.slice(0, 125).replace(/(<([^>]+)>)/ig, '') + "..." : element?.description?.slice(0, 125).replace(/(<([^>]+)>)/ig, '')}</p> */}
                                        <span className={icon[index]}></span>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }




            </div>
        </div>
    )
}

export default Features;