import React from 'react';

const Services = () => {
  return (
    <div id="services" className="services-main-block" style={{
      background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
      padding: '80px 0',
      textAlign: 'center',
      animation: 'fadeInUp 1s ease-out'
    }}>
      <div className="container">
        <div className="section" style={{ marginBottom: '60px' }}>
          <h3 className="section-heading" style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#2E8B57',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Our turn key solution</h3>
          <p className="sub-heading" style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#555',
            marginBottom: '40px'
          }}>A complete diverse package, simplified to serve you better</p>
        </div>
        <div style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
          display: 'inline-block',
          animation: 'zoomIn 1s ease-out'
        }}>
          <img src="/images/port.png" alt="services" style={{
            maxWidth: '100%',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
          }} />
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
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Services;