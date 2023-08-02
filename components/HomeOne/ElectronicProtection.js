import React, { Component } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
class ElectronicProtection extends Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			getTitle:{},
			DataisLoaded: false
		};
	}



	componentDidMount() {
		
			axios.get(
				"http://alobhaitsolution.com:5005/api/innovation")
				.then((res) =>{
                    //   console.log("daaaaaaaaattaaaaaa==",res.data.data)
					  this.setState({
								items: res.data.data,
								DataisLoaded: true
							});
				} )
				// .then((json) => {
	
				// 	this.setState({
				// 		items: json.data,
				// 		DataisLoaded: true
				// 	});
				
				axios.get(
					"http://alobhaitsolution.com:5005/api//dimensions-info-techno-main-title-desc")
					.then((res) =>{
						// console.log(res.data.data)
						this.setState({
							getTitle: res.data.data,
								  DataisLoaded: true
							  });
				     } )
		
	}

//   setTimeout(() => {
	
//   }, timeout);

	// Tab
	openTabSection = (evt, tabNmae) => {
		let i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabs_item");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		tablinks = document.getElementsByTagName("li");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace("current", "");
		}

		document.getElementById(tabNmae).style.display = "block";
		evt.currentTarget.className += "current";
	}

	render() {
		
		const { DataisLoaded, items,getTitle } = this.state;
		// console.log("retun==",items)
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
		return (
			<section className="electronic-area bg-color ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="electronic-content">
								{/* <h2>The 5 Dimensions Of Information Technology</h2> u */}
								<h2>{getTitle?.title}</h2>
								<div className="electronic-tab-wrap">
									<div className="tab electronic-tab">
										{/* Tabs Nav */}
										<ul className="tabs">
											{
												items.map((element) => {
													return (
														<>
															<li
																className="current"
																onClick={(e) => this.openTabSection(e, element?.id)}
															>
																{element?.title}
																{/* Intercom System */}
															</li>
														</>
													)
												})
											}

										</ul>

										{/* Tab Content */}
										<div className="tab_content">
											{
												items.map((element) => {
													return (
														<>
															<div id={element.id} className="tabs_item">
																<p>
																	{
																		ReactHtmlParser(element?.description)

																	}
																</p>

																{/* <Link href="/about">
																	<a className="default-btn">Learn About</a>
																</Link> */}
															</div>
														</>
													)
												})
											}

										</div>
									</div>
								</div>
							</div>
                        </div>
							<div className="col-lg-6">
								<div className="electronic-img">
									<img src="/img/electronic-img.png" alt="Image" />
								</div>
							</div>
						</div>
					</div>
				
			</section>
		);
	}
}

export default ElectronicProtection;