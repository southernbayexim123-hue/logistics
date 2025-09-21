import React from 'react';
import '../App.css';

function Contact() {
  return (
    <div className="page-container">
      <section className="contact-section" id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <div className="contact-info">
              <h3>Our Details</h3>
              <p><strong>Address:</strong> 1/231-9, Medona street ,Veerapandiyanpattnam, Thiruchendur,Tuticorin</p>
              <p><strong>Phone:</strong> +919345523683</p>
              <p><strong>Email:</strong> southernbayexim123@gmail.com</p>
              <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM IST</p>
            </div>
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select>
                    <option value="">Select Product Category</option>
                    <option value="spices">Spices</option>
                    <option value="coir">Coir & Coir Products</option>
                    <option value="handicrafts">Handicrafts & Home Décor</option>
                    <option value="leather">Leather Accessories</option>
                    <option value="toys">Toys & Gift Items</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;