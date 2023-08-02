import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
const LatesNews = () => {

	const [getdata, setData] = useState([]);
	const [getTitle, setTitle] = useState([]);


	useEffect(() => {
		axios.get('http://alobhaitsolution.com:5005/api/blogs')
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



			axios.get('http://alobhaitsolution.com:5005/api/case-studies-main-title-desc')
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

	// return (
	// 	<section className="blog-area pb-70">
	// 		<div className="container">
	// 			<div className="section-title">
	// 				<h2>{getTitle?.title}</h2>
	// 				<p>{getTitle?.description?.slice(0, 200).replace(/(<([^>]+)>)/ig, '') + "..."}</p>
	// 				{/* <h2>Case Studies</h2> */}
	// 				{/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p> */}
	// 			</div>

	// 			<div className="row">
	// 				{
	// 					getdata.map((element) => {
	// 						return (
	// 							<>
	// 								<div className="col-lg-4 col-sm-6">
	// 									<div className="single-blog">
	// 										<img src={`http://alobhaitsolution.com:5005/uploaded-files/${element.image} `} alt="Image" />

	// 										<div className="blog-content">
	// 											<h3>
	// 												<Link href="/blog-details">
	// 													<a>{element.title}</a>
	// 												</Link>
	// 											</h3>
	// 											<p>{element.description?.slice(0, 100).replace(/(<([^>]+)>)/ig, '') + "..."}</p>

	// 											<Link  href={{ pathname: '/blog-details', query: { id: element?.id } }}>
	// 												<a className="read-more">Read More</a>
	// 											</Link>
	// 										</div>
	// 									</div>
	// 								</div>

	// 							</>
	// 						)
	// 					})
	// 				}



	// 				{/* <div className="col-lg-4 col-sm-6">
	// 					<div className="single-blog">
	// 						<img src={`http://alobhaitsolution.com:5005/uploaded-files/${getdata[1]?.image} `}  alt="Image" />

	// 						<div className="blog-content">
	// 							<h3>
    //                                 <Link href="/blog-details">
    //                                     <a>{getdata[1]?.title}</a>
    //                                 </Link>
	// 							</h3>
	// 							<p>{getdata[1]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
    //                             <Link href="/blog-details">

    //                                 <a className="read-more">Read More</a>
    //                             </Link>
	// 						</div>
	// 					</div>
	// 				</div> */}

	// 				{/* <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
	// 					<div className="single-blog">
	// 						<img src={`http://alobhaitsolution.com:5005/uploaded-files/${getdata[2]?.image} `}  alt="Image" />

	// 						<div className="blog-content">
	// 							<h3>
    //                                 <Link href="/blog-details">
    //                                     <a>{getdata[2]?.title}</a>
    //                                 </Link>
	// 							</h3>
	// 							<p>{getdata[2]?.description.replace(/(<([^>]+)>)/ig, '')}</p>
								
    //                             <Link href="/blog-details">
    //                                 <a className="read-more">Read More</a>
    //                             </Link>
	// 						</div>
	// 					</div>
	// 				</div> */}
	// 			</div>
	// 		</div>
	// 	</section>
	// )
}

export default LatesNews;