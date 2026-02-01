import React, { useState } from 'react';

const Booking = () => {
  const [busForm, setBusForm] = useState({ from: '', to: '', date: '', passengers: 1 });
  const [flightForm, setFlightForm] = useState({ from: '', to: '', date: '', passengers: 1 });
  const [hotelForm, setHotelForm] = useState({ location: '', checkin: '', checkout: '', guests: 1 });

  const africanCities = ['Nairobi', 'Cape Town', 'Lagos', 'Johannesburg', 'Accra', 'Addis Ababa', 'Cairo', 'Casablanca'];

  const handleBusSubmit = (e) => {
    e.preventDefault();
    console.log('Bus booking:', busForm);
  };

  const handleFlightSubmit = (e) => {
    e.preventDefault();
    console.log('Flight booking:', flightForm);
  };

  const handleHotelSubmit = (e) => {
    e.preventDefault();
    console.log('Hotel booking:', hotelForm);
  };

  return (
    <div id="booking" className="container">
      <h1>Book Your African Adventure</h1>
      <div>
        <h2>Bus Booking</h2>
        <form onSubmit={handleBusSubmit}>
          <div className="row">
            <div className="col-md-3">
              <select className="form-control" value={busForm.from} onChange={(e) => setBusForm({ ...busForm, from: e.target.value })} required>
                <option value="">From</option>
                {africanCities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-control" value={busForm.to} onChange={(e) => setBusForm({ ...busForm, to: e.target.value })} required>
                <option value="">To</option>
                {africanCities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>
            <div className="col-md-3">
              <input type="date" className="form-control" value={busForm.date} onChange={(e) => setBusForm({ ...busForm, date: e.target.value })} required />
            </div>
            <div className="col-md-3">
              <input type="number" className="form-control" placeholder="Passengers" min="1" value={busForm.passengers} onChange={(e) => setBusForm({ ...busForm, passengers: e.target.value })} required />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Search Buses</button>
        </form>
      </div>
      <div>
        <h2>Flight Booking</h2>
        <form onSubmit={handleFlightSubmit}>
          <div className="row">
            <div className="col-md-3">
              <select className="form-control" value={flightForm.from} onChange={(e) => setFlightForm({ ...flightForm, from: e.target.value })} required>
                <option value="">From</option>
                {africanCities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-control" value={flightForm.to} onChange={(e) => setFlightForm({ ...flightForm, to: e.target.value })} required>
                <option value="">To</option>
                {africanCities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>
            <div className="col-md-3">
              <input type="date" className="form-control" value={flightForm.date} onChange={(e) => setFlightForm({ ...flightForm, date: e.target.value })} required />
            </div>
            <div className="col-md-3">
              <input type="number" className="form-control" placeholder="Passengers" min="1" value={flightForm.passengers} onChange={(e) => setFlightForm({ ...flightForm, passengers: e.target.value })} required />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Search Flights</button>
        </form>
      </div>
      <div>
        <h2>Hotel Booking</h2>
        <form onSubmit={handleHotelSubmit}>
          <div className="row">
            <div className="col-md-3">
              <select className="form-control" value={hotelForm.location} onChange={(e) => setHotelForm({ ...hotelForm, location: e.target.value })} required>
                <option value="">Location</option>
                {africanCities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>
            <div className="col-md-3">
              <input type="date" className="form-control" placeholder="Check-in" value={hotelForm.checkin} onChange={(e) => setHotelForm({ ...hotelForm, checkin: e.target.value })} required />
            </div>
            <div className="col-md-3">
              <input type="date" className="form-control" placeholder="Check-out" value={hotelForm.checkout} onChange={(e) => setHotelForm({ ...hotelForm, checkout: e.target.value })} required />
            </div>
            <div className="col-md-3">
              <input type="number" className="form-control" placeholder="Guests" min="1" value={hotelForm.guests} onChange={(e) => setHotelForm({ ...hotelForm, guests: e.target.value })} required />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Search Hotels</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;