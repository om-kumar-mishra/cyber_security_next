import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const WebsiteSecurity = () => {

	const [getdata, setData] = useState([]);
	const [getMainTitle, setMainTitle] = useState();


	useEffect(() => {
		axios.get('http://alobhaitsolution.com:5005/api/security-service')
			.then(function (response) {
				
				let d = response.data.data
                //   console.log("=====ferreeewrew",response.data.data)
				setData(d)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})

			axios.get('http://alobhaitsolution.com:5005/api/security-service-main-title-desc')
			.then(function (response) {
				
				let d = response.data.data
                //   console.log("=====ferreeewrew",response.data.data)
				setMainTitle(d)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
	}, []);


	return (

			

		<section className="security-area bg-light ptb-100">
			<div className=" p-3">
				<div className="container">
					<div className="section-title">
					<h2>{getMainTitle?.title}</h2>
					<p>{getMainTitle?.description?.replace(/(<([^>]+)>)/ig, '')}</p>
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
												<h3 >{element?.title}</h3>
												<p>{element?.description?.replace(/(<([^>]+)>)/ig, '')}</p>
											</div>
										</div>
									</>
								)
							})
						}


						{/* <div className="col-lg-3 col-sm-6">
							<div className="single-security">
								<i className="flaticon-content"></i>
								<h3>{getdata[1]?.title}</h3>
								<p>{getdata[1]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="single-security">
								<i className="flaticon-support"></i>
								<h3>{getdata[2]?.title}</h3>
								<p>{getdata[2]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="single-security">
								<i className="flaticon-profile"></i>
								<h3>{getdata[3]?.title}</h3>
								<p>{getdata[3]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
							</div>
						</div> */}

					</div>
				</div>
			</div>
		</section>
	)
}

export default WebsiteSecurity;