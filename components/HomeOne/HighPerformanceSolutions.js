import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
const HighPerformanceSolutions = () => {
	const [getdata, setData] = useState([]);
	const [getTitle, setTitle] = useState();


	useEffect(() => {
		axios.get('http://alobhaitsolution.com:5005/api/main-service')
			.then(function (response) {
				
				let d = response.data.data.list
				
				setData(d)
			})
			.catch(function (error) {
			
				console.log(error);
			})


			axios.get('http://alobhaitsolution.com:5005/api/main-service-main-title-desc')
			.then(function (response) {
			
				let d = response.data.data
				
				setTitle(d)
			})
			.catch(function (error) {
				
				console.log(error);
			})
	}, []);

	return (
		<section className="solutions-area ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>{getTitle?.title}</h2>
					<p>{getTitle?.description.replace(/(<([^>]+)>)/ig, '') }</p>
				</div>

				<div className="row">
					{
						getdata.map((element) => {
							let detailId=element.id
							return (
								<>
									<div className="col-lg-4">
										<div className="single-solutions " style={{backgroundImage:`url(http://alobhaitsolution.com:5005/uploaded-files/${element.image})`}}>
											<div className="solutions-content">
											<h3>{element.title}</h3>
												<p>{element.description.slice(0, 300).replace(/(<([^>]+)>)/ig, '') + "..."}</p>
												<Link href={{ pathname: '/service-details', query: { id:  detailId} }}>
													<a className="read-more">Read More</a>
												</Link>
											</div>
										</div>
									</div>
								</>
							)
						})
					}
					{/* <div className="col-lg-5">
						<div className="single-solutions solutions-time-bg-1">
							<div className="solutions-content">
								<h3>Secure Managed IT</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-2">
									<div className="solutions-content">
										<h3>Compliance</h3>
										<p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>
                                        <Link href="/service-details">
                                            <a className="read-more">Read More</a>
                                        </Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-3">
									<div className="solutions-content">
										<h3>Cyber Security</h3>
										<p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>
                                        <Link href="/service-details">
                                            <a className="read-more">Read More</a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-4">
									<div className="solutions-content">
										<h3>Disaster Planning</h3>
										<p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>
                                        <Link href="/service-details">
                                            <a className="read-more">Read More</a>
                                        </Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-5">
									<div className="solutions-content">
										<h3>Secure By Design</h3>
										<p>Lorem ipsum dolor sit amet sed, consectetur adipiscing elit do</p>
                                        <Link href="/service-details">
                                            <a className="read-more">Read More</a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="single-solutions solutions-time-bg-6">
							<div className="solutions-content">
								<h3>Secure Awareness Training</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorer</p>
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default HighPerformanceSolutions;