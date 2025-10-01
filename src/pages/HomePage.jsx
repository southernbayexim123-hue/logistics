import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import backgroundVideo from '../assets/videoplayback.mp4';
import watlogo from '../assets/im.png'
// Import sections to display on homepage
import ServicesSection from './sections/ServicesSection';
import ProductsSection from './sections/ProductsSection';
import ContactSection from './sections/ContactSection';

// Add your WhatsApp number here (in international format, no + or spaces)
const WHATSAPP_NUMBER = '+919345523683'; // Replace with your number

function HomePage() {
  const videoRef = useRef(null);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        // ignore
      }
    };
    playVideo();

    // Show WhatsApp icon after 5 seconds
    const showTimer = setTimeout(() => setShowWhatsapp(true), 5000);
    return () => clearTimeout(showTimer);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(url, '_blank');
  };

  return (
    <div className="home-container">
      {/* WhatsApp Chat Icon */}
      {showWhatsapp && (
        <div
          className="whatsapp-float bottom-right"
          onClick={handleWhatsAppClick}
          title="Chat with us on WhatsApp"
        >
          <img src={watlogo} alt="WhatsApp" style={{ width: 48, height: 48 }} />
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="video-container">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="background-video"
            preload="auto"
            onError={(e) => console.error("Video error:", e)}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>SOUTHERNBAY<br /> EXIM</h1>
          <div className="tagline-box">
            <p>DELIVERING QUALITY PRODUCTS AROUND THE WORLD</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div id="services-section">
        <ServicesSection />
      </div>

      {/* Products Section */}
      <div id="products-section">
        <ProductsSection />
      </div>

      {/* Contact Section */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </div>
  );
}

export default HomePage;
