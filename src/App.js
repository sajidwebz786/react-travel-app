import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <Home />
            {/* <About /> */}
            {/* <Services /> */}
            {/* <Contact /> */}
            {/* <Booking /> */}
          </div>
        </div>
      </div>

      {/* News Section */}
  <div
  style={{
    padding: '80px 0',
    backgroundColor: '#f9f9f9'
  }}
>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: '700',
            color: '#2E8B57',
            marginBottom: '50px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}
        >
          Latest News
        </h2>
      </div>
    </div>

    <div className="row d-flex">
      {/* CARD 1 */}
      <div className="col-md-4 mb-4 d-flex">
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = 'translateY(-10px)')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = 'translateY(0)')
          }
        >
          <img
            src="https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?auto=format&fit=crop&w=1000&q=80"
            alt="Bus"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
          />
          <div
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1
            }}
          >
            <h5
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '10px'
              }}
            >
              Trainee Bus Driver Openings – 2026
            </h5>
            <p
              style={{
                fontSize: '14px',
                color: '#777',
                marginBottom: '10px'
              }}
            >
              5 days ago · Jan 28, 2026
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#555',
                marginTop: 'auto'
              }}
            >
              No prior experience required. Join our fully paid professional
              training programme and start your driving career.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-md-4 mb-4 d-flex">
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = 'translateY(-10px)')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = 'translateY(0)')
          }
        >
          <img
            src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1000&q=80"
            alt="Timetable"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
          />
          <div
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1
            }}
          >
            <h5
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '10px'
              }}
            >
              Updated Travel Timetable – 2026
            </h5>
            <p
              style={{
                fontSize: '14px',
                color: '#777',
                marginBottom: '10px'
              }}
            >
              2 weeks ago · Jan 15, 2026
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#555',
                marginTop: 'auto'
              }}
            >
              Check the latest service schedules and route updates to plan
              your daily commute with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-md-4 mb-4 d-flex">
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = 'translateY(-10px)')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = 'translateY(0)')
          }
        >
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
            alt="Events"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
          />
          <div
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1
            }}
          >
            <h5
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '10px'
              }}
            >
              Community & Travel Events
            </h5>
            <p
              style={{
                fontSize: '14px',
                color: '#777',
                marginBottom: '10px'
              }}
            >
              3 weeks ago · Jan 10, 2026
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#555',
                marginTop: 'auto'
              }}
            >
              Stay updated on upcoming community events, promotions,
              passenger engagement drives, and route launches.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
}

export default App;
