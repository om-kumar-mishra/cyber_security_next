import React from 'react';
import axios from 'axios';
import  { useState, useEffect } from 'react';

const CounterArea = () => {

    const [getdata, setData] = useState([]);
    
	useEffect(() => {
		axios.get('http://alobhaitsolution.com:5005/api/why-we-count')
			.then(function (response) {
				
				let d = response.data.data
              
				setData(d)
			})
			.catch(function (error) {
				
				console.log(error);
			})
	}, []);

    return (
        <div className="counter-area-six bg-color pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counters">
                            <i className="flaticon-anti-virus-software"></i>

                            <h2>
                                <span>{getdata.customers_served}</span> <span>+</span>
                            </h2>

                            <p>Customers Served Globally</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counters">
                            <i className="flaticon-cyber"></i>

                            <h2>
                                <span>{getdata.cybersecurity_projects}</span> <span>+</span>
                            </h2>

                            <p>Cybersecurity Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counters">
                            <i className="flaticon-content"></i>

                            <h2>
                                <span>{getdata.customer_retention}</span><span>%</span>
                            </h2>

                            <p>Customer Retention Rate</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-counters">
                            <i className="flaticon-medal"></i>

                            <h2>
                                <span>{getdata.cybersecurity_experts}</span> <span>+</span>
                            </h2>

                            <p>Cybersecurity Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterArea;