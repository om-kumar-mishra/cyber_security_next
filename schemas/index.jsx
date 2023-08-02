import * as Yup from "yup"
export const FaqFormValidation = Yup.object({
    name: Yup.string.min(2).max(25).required("please enter your name"),
	email: Yup.string.email.required("please enter your email"),
	number:Yup.string.min(10).max(10).required("please enter your phone") 
	
	
})