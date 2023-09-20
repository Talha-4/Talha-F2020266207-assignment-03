import React from 'react'
import form_img from './../../images/img-5.jpg'
import './style.css'


const ContactForm = () => {
  return (
    <>
    <br /><br /><br />
    <section className="contact-form">
            <div className="container">
                <div className="form-wrapper">
                    <form action="" className="form">
                        <h1 className="lg-heading text-black">Contact Us</h1>
                        <p className="text-gray">Let us know your questions, suggestions, and concerns by filling out the contact form below.</p>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" id="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>
                        <button type="submit" className='form-btn'>Submit</button>
                    </form>
                </div>
                <div className="company-address">
                    <div className="address-group">
                        <i className="fas fa-map-marker-alt fa-3x text-red"></i>
                        <h2 className="text-gray md-heading">Location</h2>
                        <p>Johar Town, Lahore, Punjab, Pakistan </p>
                    </div>
                    <div className="address-group">
                        <i className="far fa-envelope fa-3x text-red"></i>
                        <h2 className="text-gray md-heading">Email</h2>
                        <p>f2020266207@umt.edu.pk</p>
                    </div>
                    <div className="address-group">
                        <i className="fas fa-phone-square-alt fa-3x text-red"></i>
                        <h2 className="text-gray md-heading">Call</h2>
                        <p>+304 5904270</p>
                    </div>
                    <img src={form_img} alt="Company Image" className="company-image" />
                </div>
            </div>
        </section>

    </>
  )
}

export default ContactForm