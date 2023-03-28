import React from 'react'
import { useState, useEffect } from "react";



const Contact = () => {


    const intialValues = { fullname: "", address: "", contact: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formData, setFormData] = useState();
    const [formErrors, setFormErrors] = useState({});


    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    }

    useEffect(() => {
        console.log(formErrors);

    }, [formErrors])


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setFormValues(intialValues);
        setFormData(`${formValues.fullname}` && `${formValues.address}` && `${formValues.contact}` && `${formValues.email}` ? <div className='center'>
            <p>Name: {formValues.fullname}</p>
            <p>Address: {formValues.address}</p>
            <p>Contact Number:{formValues.contact}</p>
            <p>Email: {formValues.email}</p>
        </div> : " ")
    }


    const validate = (values) => {
        const errors = {};


        if (!values.fullname) {
            errors.fullname = "Name is required!";
        }
        if (!values.address) {
            errors.address = "Address is required!";
        }
        if (!values.contact) {
            errors.contact = "Contact Number is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }

        return errors;

    }


    return (
        <div className='main-container'>

            <section className='contact'>
                <h2 className="text-big center">Contact Us</h2>

                <form className="form-div" id="form" onSubmit={handleSubmit}
                >
                    <p>{formErrors.fullname}</p>

                    <div className="form-item">
                        <label className='input-text' htmlFor="name">Full Name</label>
                        <input className="form-input" type="text" name="fullname" id="fullname"
                            value={formValues.fullname}
                            onChange={handleChange} />
                    </div>
                    <p>{formErrors.address}</p>

                    <div className="form-item">
                        <label className='input-text' htmlFor="address">Address </label>
                        <input className="form-input" type="text" name="address" id="address"
                            value={formValues.address}
                            onChange={handleChange} />
                    </div>
                    <p>{formErrors.contact}</p>

                    <div className="form-item">
                        <label className='input-text' htmlFor="contact">Contact Number</label>
                        <input className="form-input" type="number" name="contact" id="contact"
                            value={formValues.contact}
                            onChange={handleChange} />
                    </div>
                    <p>{formErrors.email}</p>

                    <div className="form-item">
                        <label className='input-text' htmlFor="email"> Email Address</label>
                        <input className="form-input" type="email" name="email" id="email"
                            value={formValues.email}
                            onChange={handleChange} />
                    </div>

                    <div className="form-item">
                        <label className='input-text' htmlFor="message"> Message</label>
                        <textarea className="form-input" name="message" id="message"
                            value={formValues.message}  onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-item">
                        <button className="btn btn-move" type="submit">Submit</button>

                    </div>
                </form>
                <div>
                    <p >{formData}</p>

                </div>
            </section>
        </div>
    )
}

export default Contact;