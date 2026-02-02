import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Buy Tickets', href: '#' },
    { label: 'Login / Register', href: '#' },
    { label: 'Live times', href: '#' },
    { label: 'Service updates', href: '#' },
    { label: 'Fares & tickets', href: '#' },
    { label: 'Plan your journey', href: '#' },
    { label: 'Things to do', href: '#' },
    { label: 'Contact us', href: '#' },
  ];

  return (
    <>
      {/* top bar */}
      <div className="top-bar hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="info-bar">
                <ul>
                  <li><i className="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:contact@tag-cafrica.com">contact@tag-cafrica.com</a></li>
                  <li>|</li>
                  <li><i className="fas fa-phone" aria-hidden="true"></i>+44 (0) 120 750 1208</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="top-bar-right">
                <div className="top-menu hidden-sm">
                  <ul>
                    <li><a href="#">Buy Tickets</a></li>
                    <li>|</li>
                    <li><a href="#">Login / Register</a></li>
                  </ul>
                </div>
                <div className="social-icon">
                  <ul>
                    <li><a href="#" target="_blank"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-pinterest" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end top bar */}
      {/* navigation */}
      <div className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="logo">
                <a href="/"><img src="/images/logotag-black.png" alt="logo" width="200" /></a>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="navigation">
                {/* Desktop Navigation */}
                <div className="desktop-nav">
                  <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'nowrap', fontSize: '15px', fontWeight: 'bold' }}>
                    {navItems.map((item, index) => (
                      <li key={index} style={{ marginLeft: '10px' }}><a href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                </div>
                
                {/* Mobile Hamburger Button */}
                <button 
                  className="mobile-menu-toggle"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                  <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                  <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
                
                {/* Mobile Navigation Menu */}
                <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                  <ul>
                    {navItems.map((item, index) => (
                      <li key={index}><a href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end navigation */}
      
      {/* Mobile Menu Styles */}
      <style>{`
        .desktop-nav {
          display: block;
        }
        
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1001;
        }
        
        .hamburger-line {
          display: block;
          width: 25px;
          height: 3px;
          background-color: #000;
          margin: 3px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        
        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        
        .mobile-nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #fff;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          z-index: 1000;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        .mobile-nav.open {
          max-height: 500px;
        }
        
        .mobile-nav ul {
          list-style: none;
          margin: 0;
          padding: 10px 0;
        }
        
        .mobile-nav li {
          border-bottom: 1px solid #eee;
        }
        
        .mobile-nav li:last-child {
          border-bottom: none;
        }
        
        .mobile-nav a {
          display: block;
          padding: 15px 20px;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }
        
        .mobile-nav a:hover {
          background-color: #f5f5f5;
          color: green;
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 767px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: flex;
          }
          
          .mobile-nav {
            display: block;
          }
          
          .navigation {
            position: relative;
          }
        }
        
        @media (min-width: 768px) and (max-width: 992px) {
          .desktop-nav ul {
            flex-wrap: wrap !important;
            justify-content: flex-end;
          }
          
          .desktop-nav li {
            margin: 5px 5px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
