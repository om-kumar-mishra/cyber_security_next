import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ServicesCard = () => {


	const [getdata, setData] = useState([]);
	const [active, setActive] = useState(1);
	useEffect(() => {
		axios.get('http://alobhaitsolution.com:5005/api/main-service')
			.then(function (response) {
				
				let d = response.data.data
				
				setData(d)
			})
			.catch(function (error) {
			
				console.log(error);
			})
	}, []);



	//* pagination

	function pagination(page) {	
			axios.get(`http://alobhaitsolution.com:5005/api/main-service?page=${page}`)
				.then(function (response) {
					
					
					let d = response.data.data
				
					setData(d)
				})
				.catch(function (error) {
					
					
				})
		

	}


	

	let page=[];
	let total_pages = Math.ceil(getdata.total_data / 6);

       for (let i=1; i<=total_pages; i++)
	   {
		   page.push(i)
	   }

	return (
		<div className="solutions-area section-width pb-100">
			<div className="container">
				<div className="section-title">
					
					<h2>High-Performance Solutions</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
				</div>


				<div className="row">

					{
						getdata.list?.map((element) => {
							return (
								<>
									<div className="col-lg-4">
									
										<div className="single-solutions" style={{backgroundImage:`url(http://alobhaitsolution.com:5005/uploaded-files/${element.image})`}}>

											<div className="solutions-content">
												<h3>{element.title}</h3>
												<p>{element.description.slice(0,150).replace(/(<([^>]+)>)/ig, '') + "..."}</p>

												<Link href={{ pathname: '/service-details', query: { id: element?.id } }}>
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
								<h3>{getdata[0]?.title}</h3>
								<p>{getdata[0]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
								  
                                <Link href={{ pathname: '/service-details', query: { id:getdata[0]?.id} }}>
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
									<h3>{getdata[1]?.title}</h3>
								     <p>{getdata[1]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
										
                                         <Link href={{ pathname: '/service-details', query: { id:getdata[1]?.id} }}>
                                    <a className="read-more">Read More</a>
                                </Link>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-3">
									<div className="solutions-content">
									<h3>{getdata[2]?.title}</h3>
								    <p>{getdata[2]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
										
									<Link href={{ pathname: '/service-details', query: { id:getdata[2]?.id} }}>
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
									<h3>{getdata[3]?.title}</h3>
								     <p>{getdata[3]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
										
									 <Link href={{ pathname: '/service-details', query: { id:getdata[3]?.id} }}>
                                    <a className="read-more">Read More</a>
                                </Link>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-sm-6">
								<div className="single-solutions solutions-time-bg-5">
									<div className="solutions-content">
									<h3>{getdata[4]?.title}</h3>
								     <p>{getdata[4]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
									 
									 <Link href={{ pathname: '/service-details', query: { id:getdata[4]?.id} }}>
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
							         <h3>{getdata[5]?.title}</h3>
								     <p>{getdata[5]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
								
									 <Link href={{ pathname: '/service-details', query: { id:getdata[5]?.id} }}>
                                    <a className="read-more">Read More</a>
                                </Link>
							</div>
						</div>
					</div> */}
              
					{/* Pagination */}
					{/* <div className="col-lg-12">
						<div className="page-navigation-area">

							<ul className="pagination">

								{
									getdata.has_previous ?
										<>

											<li className="page-item">
												<Link href="#">
													<a onClick={(e) => pagination(getdata.current)} className="page-link page-links">
														<i className='bx bx-chevrons-left'></i>
													</a>
												</Link>
											</li>
										</>
										: ""

								}

								{
                                 
									page.map((element)=>{
										
										return(
													<>
													<li className={`page-item ${(getdata.current === element) ? "active" : ""}`}>
													<Link  href="#">
														<a onClick={() => pagination(element)} className="page-link">{element}</a>
													</Link>
												</li>
													</>
										)
									})
                                
                                    
									

								}


								{
									getdata.has_next?
										<>
											<li className="page-item">
												<Link href="#">
													<a onClick={() => pagination(getdata.next)} className="page-link">
														<i className='bx bx-chevrons-right'></i>
													</a>
												</Link>
											</li>
										</>
										: ""
								}

							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default ServicesCard;