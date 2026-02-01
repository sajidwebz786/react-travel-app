import React from 'react';

const Contact = () => {
  return (
    <div id="contact" style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '60px 0',
      textAlign: 'center',
      animation: 'fadeInUp 1s ease-out'
    }}>
      <div className="container">
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
          fontFamily: "'Open Sans', sans-serif",
          maxWidth: '600px',
          margin: '0 auto'
        }}>Contact details here.</p>
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
        `}
      </style>
    </div>
  );
};

export default Contact;