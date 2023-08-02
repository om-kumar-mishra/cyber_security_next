import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
//import { ToastContainer, toast } from 'react-toastify';

const TopHeader = () => {
    const [getdata, setData] = useState([]);
   
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

    return (
        <div className="top-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-8">
                        <ul className="header-content-left">
                            <li>
                                <a href="mailto:contactus@exosolv.com">
                                    <i className="bx bx-envelope"></i>
                                    {
                                        getdata.email
                                    }
                                    
                                </a>
                            </li>

                            {/* <li>
                                <i className="bx bx-location-plus"></i>
                                658 Lane Drive St. California
                            </li> */}
                        </ul>
                    </div>

                    <div className="col-lg-6 col-sm-4">
                        <ul className="header-content-right">
                            {/* <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li> */}

                            <li>
                                <a href={getdata?.linkedIn} target="_blank">
                                    <i style={{fontSize:"30px"}} className="bx bxl-linkedin-square"></i>
                                </a>
                            </li>
                            {/* <li>
                                <a href="#" target="_blank">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;