import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const WebsiteSecurity = () => {
	const [getdata, setData] = useState([]);

	useEffect(() => {
		axios.get('http://alobhaitsolution.com:5005/api/security-service')
			.then(function (response) {

				let d = response.data.data
				
				setData(d)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
	}, []);

	return (
		<div className="security-area  pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<h2>Complete Website Security</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima sapiente.</p>
				</div>

				<div className="row">
					{
						getdata.map((element) => {
							return (
								<>
									<div className="col-lg-3 col-sm-6">
										<div className="single-security-img">
											<i className="">
											<img className="img-round" src={`http://alobhaitsolution.com:5005/uploaded-files/${element?.icon}`} alt="image" style={{maxHeight:"90px",maxWidth:"90px"}} /></i>
											<h3>{element?.title}</h3>
											<p>{element?.description?.replace(/(<([^>]+)>)/ig, '')}</p>
										</div>
									</div>

								</>
							)
						})
					}
					{/* <div className="col-lg-3 col-sm-6">
						<div className="single-security">
							<i className="flaticon-bug"></i>
							<h3>Malware Detection Removal</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-security">
							<i className="flaticon-content"></i>
							<h3>Content Delivery Network</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-security">
							<i className="flaticon-support"></i>
							<h3>24/7 Cyber Security Support</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-security">
							<i className="flaticon-profile"></i>
							<h3>Managed Web Application</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default WebsiteSecurity;