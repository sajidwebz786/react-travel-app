import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="appointment" className="appointment-main-block" style={{
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      padding: '80px 0',
      color: '#fff',
      animation: 'fadeInUp 1s ease-out'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 hidden-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeInLeft 1s ease-out' }}>
            <div className="appointment-img">
              <img src="/images/maps.png" className="img-responsive" style={{
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                maxWidth: '100%'
              }} alt="Appointment" />
            </div>
          </div>
          <div className="col-md-8 col-sm-12" style={{ animation: 'fadeInRight 1s ease-out' }}>
            <div className="appointment-block" style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '40px',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              <h3 className="section-heading" style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>Get an Appointment</h3>
              <p className="sub-heading" style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#ddd',
                marginBottom: '30px'
              }}>Lets talk business</p>
              <form id="appointment-form" className="appointment-form" onSubmit={handleSubmit}>
                <h5 className="form-heading-title" style={{
                  backgroundColor: '#2E8B57',
                  color: '#fff',
                  padding: '10px 20px',
                  marginRight: '20px',
                  borderRadius: '5px',
                  display: 'inline-block',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>1. Appointment Information</h5>
                <div className="row" style={{ marginBottom: '20px' }}>
                  <div className="col-sm-6">
                    <input type="text" className="form-control date-pick" id="appointment-date" name="date" placeholder="Appointment Date" value={formData.date} onChange={handleChange} required style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 20px',
                      fontSize: '16px',
                      outline: 'none',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }} />
                  </div>
                  <div className="col-sm-6">
                    <select className="form-control" name="time" value={formData.time} onChange={handleChange} required style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 20px',
                      fontSize: '16px',
                      outline: 'none',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}>
                      <option value="">Select Time-frame</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </div>
                </div>
                <h5 className="form-heading-title" style={{
                  backgroundColor: '#2E8B57',
                  color: '#fff',
                  padding: '10px 20px',
                  marginRight: '20px',
                  borderRadius: '5px',
                  display: 'inline-block',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>2. Contact Details</h5>
                <div className="row" style={{ marginBottom: '20px' }}>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 20px',
                      fontSize: '16px',
                      outline: 'none',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }} />
                  </div>
                  <div className="col-sm-4">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 20px',
                      fontSize: '16px',
                      outline: 'none',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }} />
                  </div>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 20px',
                      fontSize: '16px',
                      outline: 'none',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }} />
                  </div>
                </div>
                <div className="row" style={{ marginBottom: '20px' }}>
                  <div className="col-sm-12">
                    <input className="form-control" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 20px',
                      fontSize: '16px',
                      outline: 'none',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }} />
                  </div>
                  <div className="col-sm-12">
                    <textarea id="message" name="message" rows="6" placeholder="Message" value={formData.message} onChange={handleChange} style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#333',
                      border: 'none',
                      borderRadius: '15px',
                      padding: '15px 20px',
                      fontSize: '16px',
                      outline: 'none',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      resize: 'vertical'
                    }}></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-default" style={{
                  background: 'linear-gradient(45deg, #FF9933, #ff6b6b)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s',
                  float: 'right'
                }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>Book Now</button>
              </form>
            </div>
          </div>
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
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
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
    </div>
  );
};

export default Appointment;