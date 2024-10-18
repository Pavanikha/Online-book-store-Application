import React, { useRef } from 'react';
import './footer.styles.css';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
 const Footer = () => {
    const form = useRef();
    const serviceId = "service_44botzw";
    const templateId = "template_mz08lnq";
    const publicKey = "uCrsPEyakNRLUAnci";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((response) => {
            console.log(response.text);
        })
        .catch((error) => {
            console.log(error.text);
        })

        e.target.reset();
    }

    return (
        <section className="footer-container">
            <div className="container">
                <h2>If you have any queries feel free to ask here.</h2>

                <form onSubmit={handleSubmit} ref={form} className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" name="user_name" id="name" className="form-input" placeholder='Enter your name'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" name="user_email" id="email" className="form-input" placeholder="Enter your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Query:</label>
                        <textarea className="form-input" name="message" id="query" placeholder='Type your Query'></textarea>
                    </div>

                    <div className="form-group">
                       <input type="submit" onClick="https://chat.openai.com/c/1a048b3a-6ab0-4fd2-a42d-92c390eb85dd" value="Submit" className="form-submit" />
                     </div>
                </form>

                <p>&copy; 2023 NovelX. All Rights Reserved.</p>
                <p>Contact: 9442365358</p>
              <br/>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook
            <FaFacebook />
          </a>
          <a href="https://twitter.com/YourTwitter" target="_blank" rel="noopener noreferrer">Twitter
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram
            <FaInstagram />
          </a>
              
        </div>
            
        </section>
    )
}

export default Footer;