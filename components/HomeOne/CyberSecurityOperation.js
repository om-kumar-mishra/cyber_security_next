import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CyberSecurityOperation = () => {
	const [getdata, setData] = useState([]);
	const [getTitle, setTitle] = useState([]);

	useEffect(() => {
		axios.get('http://alobhaitsolution.com:5005/api/operation')
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


			axios.get('http://alobhaitsolution.com:5005/api/typical-attacks-main-title-desc')
			.then(function (response) {
				// handle success
				
				let d = response.data.data

				setTitle(d)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
	}, []);

	return (
		<section className="cybersecurity-area ptb-100">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<div className="cybersecurity-content">

						<h2>{getTitle?.title}</h2>
						<p>{getTitle?.description?.replace(/(<([^>]+)>)/ig, '')}</p>

							{/* <h2>Typical Attacks</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p> */}

							<div className="row">
								{
									getdata.map((element) => {
										return (
											<>
												<div className="col-lg-6 mt-2 col-sm-6">
													<ul>
														<li>
															<i className="bx bx-check"></i>
															{element?.title}
														</li>

													</ul>
												</div>
											</>
										)
									})
								}
								{/* <div className="col-lg-6 col-sm-6">
									<ul className="cybersecurity-item">
										{
											getdata.map((element) => {
												return (
													<>
														<li>
															<i className="bx bx-check"></i>
															{element?.title}
														</li>
													</>
												)
											})
										}
										{/* <li>
											<i className="bx bx-check"></i>
											Managed Web Application
										</li>
										<li>
											<i className="bx bx-check"></i>
											SIEM Threat Detection
										</li>
										<li>
											<i className="bx bx-check"></i>
											Content Delivery Network
										</li>
										<li>
											<i className="bx bx-check"></i>
											Website Hack Repair
										</li>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li> 
									</ul>
								</div> */}

								{/* <div className="col-lg-6 col-sm-6">
									<ul>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li>
										<li>
											<i className="bx bx-check"></i>
											Instant Malware Removal
										</li>
									</ul>
								</div> */}
							</div>
						</div>
					</div>
					<div className="col-lg-6 pr-0">
						<div className="cybersecurity-img"></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CyberSecurityOperation;