import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
// import  { useState,useEffect} from 'react';

import 'react-toastify/dist/ReactToastify.css';


const initialValues = {
	name: "",
	phone: "",
	address: "",
	qulification: "",
    image: "",
	email: ""

};

const ProtectYourWebsite = () => {
    // const [image, setImage] = useState("");
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
	const EmailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const formik = useFormik({
		initialValues: initialValues,

		validationSchema: Yup.object({
			name: Yup.string()
				.min(2, 'Must be 2 characters or more')
				.max(30, 'Must be 15 characters or less')
				.required('Name is required'),
			phone: Yup.string()
				.required("Phone number is required")
				.matches(phoneRegExp, 'Phone number is not valid')
				.min(10, "too short")
				.max(10, "too long"),
			address: Yup.string()
				.required("Address is required"),
				
			qulification: Yup.string()
				.required("Qulification is required"),
				
			image: Yup.string()
			.required("Resume is required"),
			email: Yup.string().email('Invalid email address').required('Email is required').matches(EmailRegex, 'Invalid email address'),

		}),

		onSubmit: (values, { resetForm }) => {
			const formData = new FormData();
			formData.append("name", values.name)
			formData.append("phone", values.phone)
			formData.append("address", values.address)
			formData.append("qulification", values.qulification)
			formData.append("image", values.image)
			formData.append("email", values.email)

		
			axios.post('http://alobhaitsolution.com:5005/api/career', formData)
				.then(function (response) {
					if (response.data.code == 200) {
						toast.success("Thank you contacting us . We will revert back to your query soon. ");
						document.getElementById("file").value="";
						resetForm();
					}
				})

				.catch(function (error) {
					 toast.warn(error.response.data.message);

				})

		}
	})

	

	return (
		<div className="manual-area bg-color ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="manual-img">
							<img src="/img/manual-img.png" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="manual-content mr-auto ml-0">
							<h2>Career</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

							<form onSubmit={formik.handleSubmit} >
								<div className="row">
									<div className="col-lg-6 col-sm-6">
										<div className="cybersecurity-item cybersec-item-career mb-3">
											<label className="form-check-label text-white">Name *</label>
											<input
												type="text"
												name="name" className="form-control"
												placeholder="Enter Name..."
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.name}
												
											/>
											{/* {console.log("image=",formik)} */}
											{formik.touched.name && formik.errors.name ? (
												<div className='text-danger'>*{formik.errors.name}</div>
											) : null}
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<div className="cybersecurity-item cybersec-item-career mb-3">
											<label className="form-check-label text-white">Email *</label>
											<input
												type="email"
												name="email"
												className="form-control"
												placeholder="Enter Email..."
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.email}
											/>
											{formik.touched.email && formik.errors.email ? (
												<div className='text-danger'>*{formik.errors.email}</div>
											) : null}
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<div className="cybersecurity-item cybersec-item-career mb-3">
											<label className="form-check-label text-white">Mobile *</label>
											<input
												type="tel"
												name="phone"
												onKeyPress={(event) => {
													if (!/[0-9]/.test(event.key)) {
														event.preventDefault();
													}
												}}
												maxLength="10"
												minLength="10"
												pattern=".{10,10}"
												className="form-control"
												placeholder="Enter Mobile No..."
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.phone} />
											{formik.touched.phone && formik.errors.phone ? (
												<div className='text-danger'>*{formik.errors.phone}</div>
											) : null}
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<div className="cybersecurity-item cybersec-item-career mb-3">
											<label className="form-check-label text-white">Addres *</label>
											<input
												type="text"
												name="address"
												className="form-control"
												placeholder="Enter Address..."
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.address} />
											{formik.touched.address && formik.errors.address ? (
												<div className='text-danger'>*{formik.errors.address}</div>
											) : null}
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<div className="cybersecurity-item cybersec-item-career mb-3">
											<label className="form-check-label text-white">Qualification *</label>
											<input
												type="text"
												name="qulification"
												className="form-control"
												placeholder="Enter Qualification..."
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.qulification} />
											{formik.touched.qulification && formik.errors.qulification ? (
												<div className='text-danger'>*{formik.errors.qulification}</div>
											) : null}
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<div className="cybersecurity-item cybersec-item-career mb-3">
											<label className="form-check-label text-white">Upload Resume <small>(Pdf,Doc) *</small></label>
											<input
												type="file"
												name="image"
												id='file'
												accept=".doc,.pdf" 
												className="form-control"
												placeholder="..."
												onChange={(e)=>{formik.setFieldValue("image",e.target.files[0])}} 
												
												onBlur={formik.handleBlur}
												
												
											// key={formik.values?.image || '' }
												
										    //   value= {formik.handleReset("image","")} 
											/>
											
											{formik.touched.image && formik.errors.image ? (
												<div className='text-danger'>*{formik.errors.image}</div>
											) : null}
										</div>
									</div>
									{/* <div className="col-lg-12 col-sm-12">
										<div className="cybersecurity-item cybersec-item-career mb-3">
											<input required type="text" name="" className="form-control" placeholder="Enter Address..."/>
											<textarea className="form-control" type="text" rows="3" placeholder="Enter Address..."></textarea>
										</div>
									</div> */}
									<div className="col-lg-12 col-sm-12">
										<div className="cybersecurity-item cybersec-item-career mb-3">

											<button type="submit" className="default-btn mt-30 rounded">
												Submit
											</button>

										</div>
									</div>
								</div>
							</form>

							{/* <div className="row">

							

								{
									getdata.map((element) => {
										return (
											<>
												<div className="col-lg-6 col-sm-6 mt-2">
													<ul className="cybersecurity-item">
														<li>
															<i className="bx bx-check"></i>
															{element.title}
														</li>

													</ul>
												</div>
											</>
										)
									})
								}





							</div> */}

							{/* <Link href="javascript:void(0);">
								<a className="default-btn mt-30">
									Know Details
								</a>
							</Link> */}
						</div>
					</div>
				</div>
			</div>
			
		</div>
		
	)
}

export default ProtectYourWebsite;