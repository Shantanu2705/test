import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our top-tier SEO, Web Development, and Google Ads services designed to elevate your brand.',
  openGraph: {
    title: 'Our Services | Premium Digital Solutions',
    description: 'Explore our top-tier SEO, Web Development, and Google Ads services designed to elevate your brand.',
  },
};

export default function Home() {
  return (
    <main>
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>
      
      <div className="container">
        <header className="header-section">
          <h1>Our Services</h1>
          <p>We deliver cutting-edge digital solutions to help your business scale and dominate the digital landscape.</p>
        </header>

        <section className="services-grid">
          {/* SEO Services */}
          <div className="service-card" id="seo-services">
            <div className="icon-wrapper">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
            </div>
            <h3>SEO Services</h3>
            <p>
              Boost your organic visibility with our data-driven SEO strategies. 
              We optimize your site architecture, craft compelling content, and build high-quality backlinks to ensure you rank at the top of search results.
            </p>
            <a href="#" className="learn-more">Discover SEO</a>
          </div>

          {/* Web Development */}
          <div className="service-card" id="web-development">
            <div className="icon-wrapper">
               <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3>Web Development</h3>
            <p>
              Transform your ideas into stunning, high-performance web applications. 
              Our expert developers use the latest technologies like React and Next.js to build fast, scalable, and secure digital experiences tailored to your needs.
            </p>
            <a href="#" className="learn-more">Explore Development</a>
          </div>

          {/* Google Ads */}
          <div className="service-card" id="google-ads">
            <div className="icon-wrapper">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </div>
            <h3>Google Ads</h3>
            <p>
              Maximize your ROI with targeted Google Ads campaigns. 
              From search and display to video and shopping, we create and manage high-converting ad strategies that drive qualified traffic instantly.
            </p>
            <a href="#" className="learn-more">Boost ROI</a>
          </div>
        </section>
      </div>
    </main>
  );
}
