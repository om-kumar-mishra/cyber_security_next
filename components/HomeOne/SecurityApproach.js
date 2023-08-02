import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const SecurityApproach = () => {
	const [getdata, setData] = useState([]);
	const [getTitle, setTitle] = useState([]);

	useEffect(() => {
		axios.get('http://alobhaitsolution.com:5005/api/our-approach')
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



			
			axios.get('http://alobhaitsolution.com:5005/api/our-approach-main-title-desc')
			.then(function (response) {
				
				let d = response.data.data

				setTitle(d)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
	}, []);

	return (
		<section className="approach-area pb-100 pt-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="approach-img">
							<img src="/img/approach-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="approach-content approach-con-cus">
						<h2 style={{fontSize:"30px"}}>{getTitle?.title}</h2>
						<p>{getTitle?.description?.slice(0, 200).replace(/(<([^>]+)>)/ig, '') + "..."}</p>
							{/* <h2>How We Do It (Our Approach To Information Security And Resilience)</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumv</p> */}

							<ul>
								{
									getdata.map((element) => {
										return (
											<>
												<li>
													<i className=""><img src={`http://alobhaitsolution.com:5005/uploaded-files/${element?.icon}`} alt="Image" /></i>
													<h3>{element?.title}</h3>
													<p>{element?.description?.replace(/(<([^>]+)>)/ig, '')}</p>
												</li>
											</>
										)
									})
								}

								{/* <li>
									<i className="flaticon-cyber"></i>
									<h3>Secure by Design</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut suspendisse ultrices</p>
								</li>
								<li>
									<i className="flaticon-cyber-security"></i>
									<h3>Compliant by Design</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut suspendisse ultrices</p>
								</li>
								<li>
									<i className="flaticon-profile"></i>
									<h3>Continuous Monitoring</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut suspendisse ultrices</p>
								</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SecurityApproach;