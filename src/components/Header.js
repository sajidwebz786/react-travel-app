import React from 'react';

const Header = () => {
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
                <div>
                  <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'nowrap', fontSize: '15px', fontWeight: 'bold' }}>
                    <li style={{ marginLeft: '10px' }}><a href="#">Buy Tickets</a></li>
                    <li style={{ marginLeft: '10px' }}><a href="#">Login / Register</a></li>
                   
                    <li style={{ marginLeft: '10px' }}><a href="#">Live times</a></li>
                    <li style={{ marginLeft: '10px' }}><a href="#">Service updates</a></li>
                    <li style={{ marginLeft: '10px' }}><a href="#">Fares & tickets</a></li>
                    <li style={{ marginLeft: '10px' }}><a href="#">Plan your journey</a></li>
                    
                    <li style={{ marginLeft: '10px' }}><a href="#">Things to do</a></li>
                    <li style={{ marginLeft: '10px' }}><a href="#">Contact us</a></li>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end navigation */}
    </>
  );
};

export default Header;