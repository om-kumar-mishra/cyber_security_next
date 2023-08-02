import React from 'react';
// import RelatedServices from './RelatedServices';
import Sidebar from './Sidebar';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser'; 
// import {Route, Link, Routes, useParams} from 'react-router-dom';
const ServiceDetailsContent = (props) => {
	// const params = useParams();

	const router = useRouter();
   
	const [getdata, setData] = useState([]);
	

	// useEffect(() => {
	// 		// const { id } = router.query;
	// 		// console.log(params); // 👉️ {userId: '4200'}
	// 		console.log("wrwerewrewr  s======id=======props id",props?.id)

	// 	//  console.log("wrwerewrewr  s======id=======",id)
	// 	// axios.get(`http://alobhaitsolution.com:5005/api/single-main-service?service_id=${props?.id}`)
	// 	// 	.then(function (response) {
	// 	// 		// handle success
	// 	// 		    console.log("==================================",response?.data?.data)
	// 	// 		let d = response?.data?.data
    //     //          //  console.log("data====",d)
	// 	// 		setData(d)
	// 	// 	})
	// 	// 	.catch(function (error) {
	// 	// 		// handle error
	// 	// 		console.log(error);
	// 	// 	})
	// }, []);
let myTimeout= setTimeout(()=>{
	axios.get(`http://alobhaitsolution.com:5005/api/single-main-service?service_id=${props?.id}`)
	.then(function (response) {
		// handle success
			//console.log("==================================",response?.data?.data)
		let d = response?.data?.data
		 //  console.log("data====",d)
		setData(d)
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
},500)


    return( <div className="blog-details-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="services-details">
							<h3>{getdata?.title}</h3>

							<img style={{maxHeight:"100%",minHeight:"100%",minWidth:"100%"}} src={`http://alobhaitsolution.com:5005/uploaded-files/${getdata?.image}`} alt="Image" className='img-fluid'/>
                             <div>
							 {
								
								 ReactHtmlParser (getdata?.description?.slice(0,1000))
								 
							  }
							 </div>
							

							{/* <div className="choose-wrap">
								<h2>Why Choose Us</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
			
								<ul>
									<li>
										<i className="bx bx-check"></i>
										Extemly low response  time at all time
									</li>
									<li>
										<i className="bx bx-check"></i>
										We are always ready for your growth
									</li>
									<li>
										<i className="bx bx-check"></i>
										We understand security and compliance
									</li>
								</ul>
							</div> */}

							{/* <h3>Cloud Security</h3> */}

							{/* <img src="/img/services-details/services-details2.jpg" alt="Image" /> */}
							<img className='mt-4' style={{minHeight:"100%",maxHeight:"100%",minWidth:"100%"}} src={`http://alobhaitsolution.com:5005/uploaded-files/${getdata?.image2}`} alt="Image" />

							<p> {
								(getdata?.description?.length>1500)?
								 ReactHtmlParser (getdata?.description?.slice(1000)):ReactHtmlParser (getdata?.description?.slice(1000))
								 
							  }</p>
                            {/* Related Services */}
                            {/* <RelatedServices />	 */}
						</div>
					</div>

					<div className="col-lg-4 col-md-12">
						<Sidebar id={getdata?.id} />
					</div>
				</div>
			</div>
		</div>)

}

export default ServiceDetailsContent;