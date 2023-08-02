import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const EffectiveProtection = () => {
	const [getdata, setData] = useState([]);
	useEffect(() => {
		axios.get('http://alobhaitsolution.com:5005/api/most-complete')
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
		<section className="complete-area ptb-100">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 pl-0">
						<div className="complete-img"></div>
					</div>
					<div className="col-lg-6">
						<div className="complete-content">
							<h2>The most Complete and Effective Protection for Your Home and Office</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit incididunt ut labore et dolore magna aliqua. Quis ipsum</p>

							<div className="row">

								{
									getdata.map((element) => {
										return (
											<>
												<div className="col-lg-6 col-sm-6">
													<div className="single-security">
														 <i className="">
														<img src={`http://alobhaitsolution.com:5005/uploaded-files/${element?.icon}`} alt="Image" /></i> 
														<h3>{element.title}</h3>
														<p>{element?.description?.slice(0,150).replace(/(<([^>]+)>)/ig, '')+"..."}</p>
													</div>
												</div>
											</>
										)
									})
								}
								{/* <div className="col-lg-6 col-sm-6">
									<div className="single-security">
										<i className="flaticon-order"></i>
										<h3>Check and Search Hazards</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6">
									<div className="single-security">
										<i className="flaticon-anti-virus-software"></i>
										<h3>Install and Configure Software</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6">
									<div className="single-security mb-0 mb-rs-need">
										<i className="flaticon-scientist"></i>
										<h3>Departure of the Our Experts</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6">
									<div className="single-security mb-0">
										<i className="flaticon-technical-support"></i>
										<h3>24/7 Support & Remote Admit</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="complete-shape">
				<img src="/img/complete-shape.png" alt="Image" />
			</div>
		</section>
	)
}

export default EffectiveProtection;