import React, { useRef, useEffect } from 'react';
import backgroundVideo from '../../assets/contactus.mp4';

function ContactSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Handle form submission to redirect to Gmail
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value;
    const email = form[1].value;
    const category = form[2].value;
    const message = form[3].value;

    const companyEmail = 'southernbayexim123@gmail.com';
    const subject = `Contact Inquiry - ${category || 'General'}`;
    const body = `Dear Southern Bay Exim Team,

Name: ${name}
Email: ${email}
Product Category: ${category}

Message:
${message}

Best regards,
${name}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section className="contact-section" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="contact-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay for readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.55)',
          zIndex: 1,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <select>
                  <option value="">Select Product Category</option>
                  <option value="Spices">Spices</option>
                  <option value="Coir & Coir Products">Coir & Coir Products</option>
                  <option value="Handicrafts & Home Décor">Handicrafts & Home Décor</option>
                  <option value="Leather Accessories">Leather Accessories</option>
                  <option value="Toys & Gift Items">Toys & Gift Items</option>
                  <option value="Other Inquiry">Other Inquiry</option>
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
  );
}

export default ContactSection;