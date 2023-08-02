import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup"
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';

const alertContent = () => {

	MySwal.fire({
		title: 'Congratulations!',
		text: 'Your message was successfully send and will back to you soon',
		icon: 'success',
		timer: 2000,
		timerProgressBar: true,
		showConfirmButton: false,
	})

}

const initialValues = {
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: ""
};

// Form initial state
// const initialValues = {
// 	name: "",
// 	email: "",
// 	number: "",
// 	subject: "",
// 	text: ""
// };

const ContactForm = (props) => {
	const router = useRouter()
    const { getintouch } = router.query
	
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
	const telRegExp = "(d{3})s*d{3}-d{4}";
	const EmailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: Yup.object({
			name: Yup.string()
				.min(2, 'Must be 2 characters or more')
				.max(30, 'Must be 30 characters or less')
				.required('Name is required'),

			email: Yup.string().email('Invalid email address').required('Email is required').matches(EmailRegex, 'Invalid email address '),
			phone: Yup.string()
				.required("Phone number is required")
				.matches(phoneRegExp, 'Phone number is not valid')
				.min(10, "too short")
				.max(10, "too long"),

			subject: Yup.string()
				.min(2, 'Must be 2 characters or more')
				.required('Subject is required'),
			message: Yup.string()
				.min(2, 'Must be 2 characters or more')
				.required('Message is required'),
		}),

		onSubmit: (values, { resetForm }) => {
			// console.log(values, { resetForm })
			axios.post('http://alobhaitsolution.com:5005/api/contact-us', values)
				.then(function (response) {
					console.log(response)
					if (response.data.code == 200) {
						toast.success("Thank you contacting us . We will revert back to your query soon. ");

						
						resetForm();
					}
				})
				.catch(function (error) {
					//console.log(error.response)
					toast.warn(error.response.data.Message);

				})

		}
	})



	// //formik
	// //  const Formik= useFormik({
	// // 	initialValues:initialValues,
	// // 	onSubmit:(values)=>{
	// // 		 console.log(values)
	// // 	}
	// //   })
	// //  console.log(Formik)




	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	// const [number, setNumber] = useState("");
	// const [subject, setSubject] = useState("");
	// const [message, setMessage] = useState("");

	// const [isError, setError] = useState({
	// 	name: "",
	// 	email: "",
	// 	phone: "",
	// 	subject: "",

	// })

	// // function handleSubmit(event) {
	// // 	event.preventDefault();

	// // 	if (name.length == 0) {

	// // 		return setError({ name : "* Name is a required field"});
	// // 	}

	// // 	if (email.length == 0) {


	// // 		return setError({email : "* Email is must required"})
	// // 	}
	// // 	 if (!email.endsWith("@gmail.com")) {

	// // 		return setError({email:"* Email must end with @gmail.com"})
	// // 	}

	// // 	if (number.length == 0) {

	// // 		return setError({phone : "* Phone number is required"})
	// // 	}
	// // 	if (number.length != 10) {

	// // 		return setError({phone : "* Phone number must have in 10 digits"})
	// // 	}
	// // 	if (subject.length == 0) {
	// // 		return setError({subject : "*  Subject  is required"})
	// // 	}



	// // 	let obj = {
	// // 		name: name,
	// // 		email: email,
	// // 		phone: number,
	// // 		subject: subject,
	// // 		message: message
	// // 	}
	// // 	axios.post('http://alobhaitsolution.com:5005/api/contact-us', obj)
	// // 		.then(function (response) {

	// // 			if (response.data.code == 200) {

	// // 				toast.success("Thank you for contacting cyber security");
	// // 			}

	// // 			else {
	// // 				toast.warn("your contact is not saved ");
	// // 			}

	// // 		})

	// // 		.catch(function (error) {

	// // 			toast.warn(error.response.data.Message);

	// // 		})





	// // }

	return (
		<section className="faq-contact-area pb-100">
			<div className="container">
				{
					(getintouch=="getintouch")?
					  
					  
					  <h3 className='text-center p-5'>Get In Touch With Us</h3>
					
					  
					:""
				}
				{/* <h3 className='text-center p-5'>{(getintouch=="getintouch")?"Get In Touch":""}</h3> */}
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-wrap">
							<div className="contact-form">
								{/* <div className="section-title">
									<h2>Ask Questions</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, libero harum cum numquam repellendus autem recusandae voluptatem, asperiores iusto magni reprehenderit</p>
								</div> */}

								<form onSubmit={formik.handleSubmit}>
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="name"
													placeholder="Name"
													className="form-control"
													// value={name}
													// onChange={(e)=>setName(e.target.value)} 
													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.name}

												/>
												{formik.touched.name && formik.errors.name ? (
													<div className='text-danger'>*{formik.errors.name}</div>
												) : null}
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">

												<input
													type="text"
													name="email"
													pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$"
													placeholder="Email"
													className="form-control"

													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.email}
												/>
												{formik.touched.email && formik.errors.email ? (
													<div className='text-danger'>*{formik.errors.email}</div>
												) : null}
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input
													type="tel"
													name="phone"
													maxlength="10" minlength="10" onKeyPress={(event) => {
														if (!/[0-9]/.test(event.key)) {
															event.preventDefault();
														}
													}}
													// oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
													pattern="[0-9]{10}"
													//  pattern=".{10,10}" title="must have 10 digits"
													placeholder="Phone number"
													className="form-control"
													// onChange={formik.handleChange}

													// onChange={e => {
													// 	e.preventDefault();
													// 	const { value } = e.target;
													// 	const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
													// 	if (regex.test(value.toString())) {
													// 		formik.handleChange

													// 	}
													//   }}

													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.phone}

												/>
												{formik.touched.phone && formik.errors.phone ? (
													<div className='text-danger'>*{formik.errors.phone}</div>
												) : null}
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="subject"
													placeholder="Subject"
													className="form-control"

													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.subject}
												/>

												{formik.touched.subject && formik.errors.subject ? (
													<div className='text-danger'>*{formik.errors.subject}</div>
												) : null}

											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea
													name="message"
													cols="30"
													rows="7"
													placeholder="Write your message..."
													className="form-control"

													onChange={formik.handleChange}
													onBlur={formik.handleBlur}
													value={formik.values.message}

												/>
												{formik.touched.message && formik.errors.message ? (
													<div className='text-danger'>*{formik.errors.message}</div>
												) : null}
											</div>
										</div>
										<div className="col-lg-12 col-sm-12">
											<button type="submit" className="default-btn page-btn">
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)


	// return (

	// 	<div className="faq-contact-area ptb-100">
	// 		<ToastContainer />
	// 		<div className="container">
	// 			<div className="row">
	// 				<div className="col-lg-12">
	// 					<div className="contact-wrap">
	// 						<div className="contact-form">
	// 							<form onSubmit={handleSubmit}>
	// 								<div className="row">
	// 									<div className="col-lg-6 col-md-6">
	// 										<div className="form-group">
	// 											<input
	// 												type="text"
	// 												name="name"
	// 												placeholder="Name"
	// 												className="form-control"
	// 												value={name}
	// 												onChange={(e) => setName(e.target.value)}

	// 											/>

	// 												<span style={{color:"red" ,marginLeft:"10px"}}> {isError.name}</span>

	// 										</div>
	// 									</div>
	// 									<div className="col-lg-6 col-md-6">
	// 										<div className="form-group">
	// 											<input
	// 												type="text"
	// 												name="email"
	// 												placeholder="Email"
	// 												className="form-control"
	// 												value={email}
	// 												onChange={(e) => setEmail(e.target.value)}

	// 											/>
	// 											<span style={{color:"red" ,marginLeft:"10px"}}> {isError.email}</span>
	// 										</div>
	// 									</div>
	// 									<div className="col-lg-6 col-md-6">
	// 										<div className="form-group">
	// 											<input
	// 												type="text"
	// 												name="number"
	// 												placeholder="Phone number"
	// 												className="form-control"
	// 												value={number}
	// 												onChange={(e) => setNumber(e.target.value)}

	// 											/>
	// 											<span style={{color:"red" ,marginLeft:"10px"}}> {isError.phone}</span>
	// 										</div>
	// 									</div>
	// 									<div className="col-lg-6 col-md-6">
	// 										<div className="form-group">
	// 											<input
	// 												type="text"
	// 												name="subject"
	// 												placeholder="Subject"
	// 												className="form-control"
	// 												value={subject}
	// 												onChange={(e) => setSubject(e.target.value)}

	// 											/>
	// 											<span style={{color:"red" ,marginLeft:"10px"}}> {isError.subject}</span>
	// 										</div>
	// 									</div>
	// 									<div className="col-lg-12 col-md-12">
	// 										<div className="form-group">
	// 											<textarea
	// 												name="text"
	// 												cols="30"
	// 												rows="7"
	// 												placeholder="Write your message..."
	// 												className="form-control"
	// 												value={message}
	// 												onChange={(e) => setMessage(e.target.value)}

	// 											/>
	// 										</div>
	// 									</div>
	// 									<div className="col-lg-12 col-sm-12">
	// 										<button type="submit" className="default-btn page-btn">
	// 											Send Message
	// 										</button>
	// 									</div>
	// 								</div>
	// 							</form>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// )
}

export default ContactForm;