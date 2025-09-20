import React, { useEffect, useRef } from 'react';
import '../App.css';
import backgroundVideo from '../assets/videoplayback.mp4';

// Import sections to display on homepage
import ServicesSection from './sections/ServicesSection';
import ProductsSection from './sections/ProductsSection';
import ContactSection from './sections/ContactSection';

function HomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
          console.log("Video playback started successfully");
        }
      } catch (error) {
        console.error("Error playing video:", error);
      }
    };
    
    playVideo();
  }, []);

  return (
    <div className="home-container">
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
          <h1>SOUTHERN <br /> BAY</h1>
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