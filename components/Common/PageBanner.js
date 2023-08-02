import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import  { useState, useEffect } from 'react';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    const [getdata, setData] = useState(null);

    useEffect(() => {
        axios.get('http://alobhaitsolution.com:5005/api/comman-banner')
        .then(function (response) {
          // handle success
           console.log(response.data.data.image)
           let d=response.data.data
         
          setData(d)
        })
        .catch(function (error) {
          // handle error
        //   console.log(error);
        })
      },[]);

    return (
        <div className=" bg-22 page-title-area " style={{backgroundImage:`url(http://alobhaitsolution.com:5005/uploaded-files/${getdata?.image})`}} >
            <div className="container">
                <div className="page-title-content">
                    <h2>{pageTitle}</h2>
                    <ul>
                        <li>
                            <Link href={homePageUrl}>
                                <a>{homePageText}</a>
                            </Link>
                        </li>
                        {/* <li>/</li> */}
                        <li>{activePageText}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;