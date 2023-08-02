import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

const Team = () => {
    const [getdata, setData] = useState([]);
    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/about-us')
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
            <div className="expert-team-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="expert-team-image">
                                <img src={`http://alobhaitsolution.com:5005/uploaded-files/${getdata.who_image}`} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="expert-team-content with-left">

                                <h3>Who we are</h3>
                                {/* <p>{getdata.who_description}</p> */}
                                <p>{ReactHtmlParser(getdata.who_description)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;