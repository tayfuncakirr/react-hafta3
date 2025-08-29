import React from 'react'
import {useFormik} from "formik"
import { Formik, Field, Form } from 'formik'
import {object,string} from "yup"

function Contact() {
    const requiredMessage = "zorunlu alan"
    const contactValidations = object({
     firstName:string().required(requiredMessage),
     lastName:string().required(requiredMessage),
     email: string().email("Geçerli bir email girin").required(requiredMessage),
     message: string().min(5, "Mesaj en az 5 karakter olmalı").required(requiredMessage),
 
    })
  return (
    <div className='form-container'>
       <Formik
       initialValues={{
        firstName:"",
        lastName:"",
        email:"",
        message:""
       }}
       validationSchema={contactValidations}
       onSubmit={async(values)=>{
           await new Promise((resolve) => setTimeout(resolve,500));
           alert(JSON.stringify(values,null,2))
       }}
       >
        
            {({isSubmitting, errors, touched})=>(
                <Form>
                <div>
                <label htmlFor="firstName"></label>
                <Field id="firstName" name="firstName" placeholder="Adınız..." disabled={isSubmitting}/>

                {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
            </div>
            <div>
                <label htmlFor="lastName"></label>
                <Field id="lastName" name="lastName" placeholder="Soyadınız..." disabled={isSubmitting}/>

                {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div> }
            </div>
            <div>
                <label htmlFor="email"></label>
                <Field id="email" name="email" type="email" placeholder="Email adresiniz..." disabled={isSubmitting}/>

                {errors.email && touched.email && <div className="error">{errors.email}</div> }
            </div>
            <div>
                <label htmlFor="message"></label>
                <Field as="textarea  " id="message" name="message" placeholder="Mesajınız..." disabled={isSubmitting}/>

                {errors.message && touched.message && <div className="error">{errors.message}</div> }
            </div>
            <button type='submit' disabled={isSubmitting}>Gönder</button>
            </Form>)}
        
       </Formik>
    </div>
        
  )
}

export default Contact