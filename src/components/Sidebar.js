import React, { useState } from 'react';

const Sidebar = () => {
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [startPoint, setStartPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [travelTime, setTravelTime] = useState('');
  const [journeyModalOpen, setJourneyModalOpen] = useState(false);
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [destSuggestions, setDestSuggestions] = useState([]);

  const locations = [
    'Cape Town', 'Johannesburg', 'Nairobi', 'Lagos', 'Accra', 'Cairo', 'Casablanca',
    'Addis Ababa', 'Dar es Salaam', 'Kigali', 'Luanda', 'Maputo', 'Windhoek'
  ];

  const locationData = {
    'Cape Town': {
      description: 'Cape Town is a coastal city in South Africa known for its stunning beaches, Table Mountain, and vibrant culture. It\'s a gateway to safari adventures and wine regions.',
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Johannesburg': {
      description: 'Johannesburg, the largest city in South Africa, is a bustling metropolis with modern skyscrapers, museums, and proximity to wildlife reserves.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Nairobi': {
      description: 'Nairobi, the capital of Kenya, is famous for its national parks, wildlife safaris, and as a hub for East African business and culture.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Lagos': {
      description: 'Lagos, Nigeria\'s largest city, is a dynamic coastal metropolis known for its markets, nightlife, and as an economic powerhouse in West Africa.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Accra': {
      description: 'Accra, the capital of Ghana, offers beautiful beaches, colonial architecture, and a rich cultural heritage with vibrant markets and festivals.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Cairo': {
      description: 'Cairo, Egypt\'s capital, is home to ancient pyramids, the Nile River, and a fascinating blend of modern and historical attractions.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Casablanca': {
      description: 'Casablanca, Morocco\'s largest city, features stunning architecture, Mediterranean beaches, and a mix of modern and traditional cultures.',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d0b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Addis Ababa': {
      description: 'Addis Ababa, Ethiopia\'s capital, is known for its museums, churches, and as the headquarters of the African Union.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Dar es Salaam': {
      description: 'Dar es Salaam, Tanzania\'s largest city, offers beautiful beaches, wildlife safaris, and a growing business and cultural scene.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Kigali': {
      description: 'Kigali, Rwanda\'s capital, is known for its cleanliness, memorials, and proximity to gorilla trekking in the Virunga Mountains.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Luanda': {
      description: 'Luanda, Angola\'s capital, features modern architecture, beautiful beaches, and a rich history of Portuguese colonial influence.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Maputo': {
      description: 'Maputo, Mozambique\'s capital, offers stunning beaches, colonial architecture, and access to wildlife reserves and marine life.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    'Windhoek': {
      description: 'Windhoek, Namibia\'s capital, is surrounded by desert landscapes and offers a mix of German colonial architecture and modern attractions.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  };

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      padding: '20px 50px',
      background: 'linear-gradient(135deg, #2E8B57 0%, #3CB371 100%)',
      color: '#fff',
      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color:"#fff" }}>Live departure times</h3>
      <input
        type="text"
        placeholder="Search for a location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '15px',
          border: 'none',
          borderRadius: '25px',
          backgroundColor: 'rgba(255,255,255,0.9)',
          color: '#333',
          fontSize: '16px',
          outline: 'none',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      />
      {search && (
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '10px',
          marginBottom: '15px',
          maxHeight: '150px',
          overflowY: 'auto',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          {filteredLocations.map((location, index) => (
            <div
              key={index}
              style={{
                padding: '8px',
                cursor: 'pointer',
                color: '#333',
                borderBottom: index < filteredLocations.length - 1 ? '1px solid #eee' : 'none',
                borderRadius: '5px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              onClick={() => {
                setSelectedLocation(location);
                setModalOpen(true);
                setSearch(location);
              }}
            >
              {location}
            </div>
          ))}
        </div>
      )}
      <p style={{ marginBottom: '20px', fontSize: '14px', color:"#fff" }}>or, find your stop on the map</p>
      <h4 style={{ marginBottom: '10px', fontSize: '18px', color:"#fff" }}>Favourites</h4>
      <p style={{ marginBottom: '30px', fontSize: '14px', color:"#fff" }}>Add favourites by selecting the star on a stop's departure board</p>

      <h3 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color:"#fff" }}>Directions</h3>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Select your start point..."
          value={startPoint}
          onChange={(e) => {
            setStartPoint(e.target.value);
            setStartSuggestions(locations.filter(loc => loc.toLowerCase().includes(e.target.value.toLowerCase())));
          }}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            border: 'none',
            borderRadius: '25px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: '#333',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        />
        {startPoint && startSuggestions.length > 0 && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '10px',
            maxHeight: '150px',
            overflowY: 'auto',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: 10
          }}>
            {startSuggestions.map((loc, index) => (
              <div
                key={index}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  color: '#333',
                  borderBottom: index < startSuggestions.length - 1 ? '1px solid #eee' : 'none',
                  borderRadius: '5px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => {
                  setStartPoint(loc);
                  setStartSuggestions([]);
                }}
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>
      <button style={{
        width: '100%',
        padding: '12px',
        marginBottom: '15px',
        border: 'none',
        borderRadius: '25px',
        background: 'linear-gradient(45deg, #FF9933, #ff6b6b)',
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s'
      }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} onClick={() => {
        const temp = startPoint;
        setStartPoint(destination);
        setDestination(temp);
      }}>Swap the start point with the destination</button>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Search for a destination..."
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setDestSuggestions(locations.filter(loc => loc.toLowerCase().includes(e.target.value.toLowerCase())));
          }}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            border: 'none',
            borderRadius: '25px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: '#333',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        />
        {destination && destSuggestions.length > 0 && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '10px',
            maxHeight: '150px',
            overflowY: 'auto',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: 10
          }}>
            {destSuggestions.map((loc, index) => (
              <div
                key={index}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  color: '#333',
                  borderBottom: index < destSuggestions.length - 1 ? '1px solid #eee' : 'none',
                  borderRadius: '5px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => {
                  setDestination(loc);
                  setDestSuggestions([]);
                }}
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>
      <select
        value={travelTime}
        onChange={(e) => setTravelTime(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '20px',
          border: 'none',
          borderRadius: '25px',
          backgroundColor: 'rgba(255,255,255,0.9)',
          color: '#333',
          fontSize: '16px',
          outline: 'none',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <option value="">Select when you would like to travel</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
        <option value="night">Night</option>
      </select>
      <button style={{
        width: '100%',
        padding: '12px',
        marginBottom: '20px',
        border: 'none',
        borderRadius: '25px',
        background: 'linear-gradient(45deg, #2E8B57, #3CB371)',
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s'
      }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} onClick={() => setJourneyModalOpen(true)}>Plan Journey</button>
      <h4 style={{ marginBottom: '10px', fontSize: '18px', color:"#fff" }}>Favourites</h4>
      <p style={{ marginBottom: '30px', fontSize: '14px', color:"#fff" }}>Add favourites by selecting the star on a journey plan</p>

      <h3 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color:"#fff" }}>Timetables & maps</h3>
      <h4 style={{ marginBottom: '10px', fontSize: '18px', color:"#fff" }}>Favourites</h4>
      <p style={{ marginBottom: '30px', fontSize: '14px', color:"#fff" }}>Add favourites by selecting the star on a timetable</p>

      <h3 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color:"#fff" }}>Service updates</h3>
      <p style={{ marginBottom: '15px', fontSize: '16px', fontWeight: '600', color:"#fff" }}>Currently affected routes:</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>9</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>25</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>26</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>Crusader 27</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>35</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>36</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>50</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>208</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>Coaster 301</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>317</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>353</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>354</span>
        <span style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          display: 'inline-block'
        }}>Tynedale Links 681</span>
      </div>

      <h3 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color:"#fff" }}>Latest News</h3>
      <div style={{
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h5 style={{ marginBottom: '5px', fontSize: '18px' }}>Kids Go Free this Christmas!</h5>
        <p style={{ marginBottom: '5px', fontSize: '14px', color: '#ddd' }}>1 week ago - Wed 3rd Dec 2025</p>
        <p style={{ fontSize: '14px' }}>Go North East are offering free travel for up to three children aged 11 and under from 20 December 2025 - 4 January 2026...</p>
      </div>
      <div style={{
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h5 style={{ marginBottom: '5px', fontSize: '18px' }}>Christmas and New Year Timetable 2025 - 2026</h5>
        <p style={{ marginBottom: '5px', fontSize: '14px', color: '#ddd' }}>2 weeks ago - Wed 26th Nov 2025</p>
        <p style={{ fontSize: '14px' }}>We're here to keep the North East moving this festive season...</p>
      </div>
      <div style={{
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h5 style={{ marginBottom: '5px', fontSize: '18px' }}>The Go Ahead Gold Awards 2025</h5>
        <p style={{ marginBottom: '5px', fontSize: '14px', color: '#ddd' }}>4 weeks ago - Thu 13th Nov 2025</p>
      </div>

      {/* Modal */}
      {modalOpen && selectedLocation && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }} onClick={() => setModalOpen(false)}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '15px',
            padding: '0',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80%',
            overflow: 'auto',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            animation: 'modalFadeIn 0.3s ease-out',
            position: 'relative'
          }} onClick={(e) => e.preventDefault()}>
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '16px',
                cursor: 'pointer',
                zIndex: 10
              }}
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <img
              src={locationData[selectedLocation].image}
              alt={selectedLocation}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px'
              }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#2E8B57',
                marginBottom: '15px',
                textAlign: 'center'
              }}>{selectedLocation}</h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#555',
                marginBottom: '20px'
              }}>{locationData[selectedLocation].description}</p>
              <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center'
              }}>
                <button style={{
                  padding: '12px 20px',
                  backgroundColor: '#2E8B57',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#228B22'} onMouseOut={(e) => e.target.style.backgroundColor = '#2E8B57'} onClick={() => alert(`Searching buses to ${selectedLocation}`)}>
                  <i className="fas fa-bus" style={{ marginRight: '8px' }}></i>Search Bus
                </button>
                <button style={{
                  padding: '12px 20px',
                  backgroundColor: '#FF9933',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#FF8C00'} onMouseOut={(e) => e.target.style.backgroundColor = '#FF9933'} onClick={() => alert(`Searching flights to ${selectedLocation}`)}>
                  <i className="fas fa-plane" style={{ marginRight: '8px' }}></i>Search Flight
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Journey Modal */}
      {journeyModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }} onClick={() => setJourneyModalOpen(false)}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '15px',
            padding: '0',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80%',
            overflow: 'auto',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            animation: 'modalFadeIn 0.3s ease-out',
            position: 'relative'
          }} onClick={(e) => e.preventDefault()}>
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '16px',
                cursor: 'pointer',
                zIndex: 10
              }}
              onClick={() => setJourneyModalOpen(false)}
            >
              ×
            </button>
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Journey"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px'
              }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#2E8B57',
                marginBottom: '15px',
                textAlign: 'center'
              }}>Your Journey Plan</h3>
              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontSize: '16px', marginBottom: '10px' }}><strong>From:</strong> {startPoint || 'Not selected'}</p>
                <p style={{ fontSize: '16px', marginBottom: '10px' }}><strong>To:</strong> {destination || 'Not selected'}</p>
                <p style={{ fontSize: '16px', marginBottom: '10px' }}><strong>Travel Time:</strong> {travelTime || 'Not selected'}</p>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#555',
                marginBottom: '20px'
              }}>Your journey from {startPoint || 'start point'} to {destination || 'destination'} is planned for {travelTime || 'the selected time'}. Enjoy your trip with our reliable transportation services!</p>
              <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center'
              }}>
                <button style={{
                  padding: '12px 20px',
                  backgroundColor: '#2E8B57',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#228B22'} onMouseOut={(e) => e.target.style.backgroundColor = '#2E8B57'} onClick={() => alert(`Booking bus from ${startPoint} to ${destination}`)}>
                  <i className="fas fa-bus" style={{ marginRight: '8px' }}></i>Book Bus
                </button>
                <button style={{
                  padding: '12px 20px',
                  backgroundColor: '#FF9933',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#FF8C00'} onMouseOut={(e) => e.target.style.backgroundColor = '#FF9933'} onClick={() => alert(`Booking flight from ${startPoint} to ${destination}`)}>
                  <i className="fas fa-plane" style={{ marginRight: '8px' }}></i>Book Flight
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
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

export default Sidebar;