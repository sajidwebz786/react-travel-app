import React from 'react';

const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer id="footer" className="footer-main-block">
        <div className="footer-block">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-about footer-widget">
                  <h5 className="footer-heading">About Us</h5>
                  <img src="/images/logotag-black.png" className="img-responsive" alt="logo" />
                  <p>We provide customized and futuristic turn-key solutions which are designed and built to the best Automotive, Transportation, Energy and Engineering industry standards.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-services footer-widget">
                  <h5 className="footer-heading">Site Map</h5>
                  <ul>
                    <li><a href="/"><i className="fas fa-caret-right" aria-hidden="true"></i>Home</a></li>
                    <li><a href="#about"><i className="fas fa-caret-right" aria-hidden="true"></i>About Us</a></li>
                    <li><a href="#services"><i className="fas fa-caret-right" aria-hidden="true"></i>Services</a></li>
                    <li><a href="#contact"><i className="fas fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-opening footer-widget">
                  <h5 className="footer-heading">Opening Hours</h5>
                  <div className="row">
                    <div className="col-xs-5">
                      <div className="opening-day">Monday</div>
                    </div>
                    <div className="col-xs-7">
                      <div className="opening-time">9:00 AM - 8:00 PM</div>
                    </div>
                    <div className="col-xs-5">
                      <div className="opening-day">Tuesday</div>
                    </div>
                    <div className="col-xs-7">
                      <div className="opening-time">9:00 AM - 8:00 PM</div>
                    </div>
                    <div className="col-xs-5">
                      <div className="opening-day">Wednesday</div>
                    </div>
                    <div className="col-xs-7">
                      <div className="opening-time">9:00 AM - 8:00 PM</div>
                    </div>
                    <div className="col-xs-5">
                      <div className="opening-day">Thursday</div>
                    </div>
                    <div className="col-xs-7">
                      <div className="opening-time">9:00 AM - 8:00 PM</div>
                    </div>
                    <div className="col-xs-5">
                      <div className="opening-day">Friday</div>
                    </div>
                    <div className="col-xs-7">
                      <div className="opening-time">9:00 AM - 8:00 PM</div>
                    </div>
                    <div className="col-xs-5">
                      <div className="opening-day">Saturday</div>
                    </div>
                    <div className="col-xs-7">
                      <div className="opening-time">9:00 AM - 1:00 PM</div>
                    </div>
                    <div className="col-xs-5">
                      <div className="opening-day">Sunday</div>
                    </div>
                    <div className="col-xs-7">
                      <div className="opening-time">Closed</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-subscribe footer-widget">
                  <h5 className="footer-heading">Subscribe Newsletter</h5>
                  <p>Subscribe to our newsletter for latest development on Tag-c Africa</p>
                  <form id="subscribe-form" className="subscribe-form">
                    <div className="form-group">
                      <label className="sr-only">Your Email address</label>
                      <input type="email" className="form-control" id="mc-email" placeholder="Enter email address" />
                    </div>
                    <button type="submit" className="btn btn-default"><i className="fas fa-paper-plane" aria-hidden="true"></i></button>
                    <label htmlFor="mc-email"></label>
                  </form>
                  <div className="social-icon">
                    <span>Follow us on:</span>
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
        <hr />
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text text-center">
                  <p>&copy; Copyrights 2026 <a href="/">Tag-c Africa</a>. | All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </>
  );
};

export default Footer;