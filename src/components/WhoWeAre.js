import React from 'react';

const WhoWeAre = () => {
  return (
    <>
    <div id="who-we-are" className="container" style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      width: "100%",
      animation: 'fadeInUp 1s ease-out'
    }}>
        <div className="row">
          <div className="col-md-12">
            <div className="section" style={{ textAlign: 'left', marginBottom: '40px' }}>
              <h3 className="section-heading" style={{
                fontSize: '32px',
                marginTop: '40px',
                fontWeight: '700',
                color: '#2E8B57',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>Who We Are?</h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
                marginBottom: '40px'
              }}>TAG-C is an advanced technology-driven company registered in the United Kingdom with a revolutionary transportation technology ecosystem designed to address the challenges of improving public mobility in cities. We make transportation safe, convenient, affordable and sustainable for people in the communities where they live and work, while offering Smart Mobility As A Service Using Electric Vehicles.</p>
            </div>
            <div className="container" style={{width: '100%' }}>
            <div className="row who-we-are-points">
              <div className="col-md-6" style={{ marginBottom: '30px' }}>
                <div className="who-we-are-block" style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }} onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                  <div className="who-we-are-icon" style={{
                    width: '70px',
                    height: '70px',
                    fontSize: '35px',
                    color: '#fff',
                    backgroundColor: '#2E8B57',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-list" aria-hidden="true"></i>
                  </div>
                  <div className="who-we-are-dtl">
                    <h5 className="who-we-are-heading" style={{
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '10px',
                      textTransform: 'none'
                    }}>Things to Do</h5>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>Discover exciting activities and attractions in your destination.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ marginBottom: '30px' }}>
                <div className="who-we-are-block" style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }} onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                  <div className="who-we-are-icon" style={{
                    width: '70px',
                    height: '70px',
                    fontSize: '35px',
                    color: '#fff',
                    backgroundColor: '#2E8B57',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-map-marked-alt" aria-hidden="true"></i>
                  </div>
                  <div className="who-we-are-dtl">
                    <h5 className="who-we-are-heading" style={{
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '10px',
                      textTransform: 'none'
                    }}>Travel Places</h5>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>Explore beautiful destinations and hidden gems around the world.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ marginBottom: '30px' }}>
                <div className="who-we-are-block" style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }} onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                  <div className="who-we-are-icon" style={{
                    width: '70px',
                    height: '70px',
                    fontSize: '35px',
                    color: '#fff',
                    backgroundColor: '#2E8B57',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-hotel" aria-hidden="true"></i>
                  </div>
                  <div className="who-we-are-dtl">
                    <h5 className="who-we-are-heading" style={{
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '10px',
                      textTransform: 'none'
                    }}>Hotel Bookings</h5>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>Book comfortable and affordable accommodations for your trips.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ marginBottom: '30px' }}>
                <div className="who-we-are-block" style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }} onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                  <div className="who-we-are-icon" style={{
                    width: '70px',
                    height: '70px',
                    fontSize: '35px',
                    color: '#fff',
                    backgroundColor: '#2E8B57',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-newspaper" aria-hidden="true"></i>
                  </div>
                  <div className="who-we-are-dtl">
                    <h5 className="who-we-are-heading" style={{
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '10px',
                      textTransform: 'none'
                    }}>Latest Updates</h5>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>Stay informed with the latest news and developments.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ marginBottom: '30px' }}>
                <div className="who-we-are-block" style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }} onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                  <div className="who-we-are-icon" style={{
                    width: '70px',
                    height: '70px',
                    fontSize: '35px',
                    color: '#fff',
                    backgroundColor: '#2E8B57',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                  </div>
                  <div className="who-we-are-dtl">
                    <h5 className="who-we-are-heading" style={{
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '10px',
                      textTransform: 'none'
                    }}>Latest Events</h5>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#666'
                    }}>Discover upcoming events and activities in your area.</p>
                  </div>
                </div>
              </div>
            </div>  
            </div>
          </div>
          {/* <div className="col-md-4 hidden-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="contact-section" style={{
              backgroundColor: '#fff',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center',
              animation: 'fadeInRight 1s ease-out'
            }}>
              <h4 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#2E8B57',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontFamily: "'Poppins', sans-serif"
              }}>Contact Us</h4>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#555',
                fontFamily: "'Open Sans', sans-serif"
              }}>Contact details here.</p>
            </div>
          </div> */}
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default WhoWeAre;