
import { useState } from "react";
import { Link } from "react-router-dom";
import './Css/Booking_page.css';


const tourOptions = [
  { name: "Manali Adventure", location: "Himachal Pradesh", price: 8999 },
  { name: "Goa Beach Holiday", location: "Goa, India", price: 6499 },
  { name: "Royal Rajasthan", location: "Jaipur, Rajasthan", price: 7999 },
  { name: "Leh Ladakh Escape", location: "Ladakh, India", price: 12999 },
  { name: "Bali Getaway", location: "Indonesia", price: 18999 },
  { name: "Singapore Explorer", location: "Singapore", price: 24999 },
];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Manali Adventure",
    departure: "",
    travellers: "2",
    days: "4",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedTour = tourOptions.find(
    (tour) => tour.name === form.destination
  );

  const travellerCount = Number(form.travellers);

  const total = selectedTour
    ? selectedTour.price * travellerCount
    : 0;

  const today = new Date().toLocaleDateString("en-CA");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const bookingRequest = {
      ...form,
      estimatedTotal: total,
      currency: "INR",
    };

    // Demo only: booking is not saved to a server.
    console.log("Travel booking request:", bookingRequest);
    setSubmitted(true);
  }

  return (
    <main className="booking-page">
      {/* Hero banner */}
      <section className="booking-hero">
        <div className="container">
          <div className="booking-hero-content">
            <span className="booking-eyebrow">
              YOUR NEXT ADVENTURE AWAITS
            </span>

            <h1>
              Let's Plan Your
              <br />
              <span>Dream Holiday</span>
            </h1>

            <p>
              Choose your destination, pack your bags, and let us
              help you create unforgettable memories.
            </p>

            <div className="booking-trust">
              <span>✓ Easy booking</span>
              <span>✓ Flexible travel plans</span>
              <span>✓ Personalised trips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking form and summary */}
      <section className="container booking-main">
        <div className="booking-title text-center">
          <span className="booking-section-label">BOOK YOUR TRIP</span>
          <h2>Your Journey Starts Here</h2>
          <p>Complete the details below to plan your next getaway.</p>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-lg-8">
            <div className="booking-form-card">
              {submitted ? (
                <div className="booking-success text-center">
                  <div className="success-icon">✓</div>
                  <h2>Thank You, {form.name}!</h2>
                  <p>
                    Your demo booking request for{" "}
                    <strong>{form.destination}</strong> has been
                    prepared successfully.
                  </p>
                  <p>
                    Estimated trip total:{" "}
                    <strong>
                      ₹{total.toLocaleString("en-IN")}
                    </strong>
                  </p>
                  <p className="text-muted small">
                    This is a demonstration only. No reservation
                    has been made and no payment has been collected.
                  </p>
                  <button
                    className="booking-primary-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    Edit Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="booking-form-heading">
                    <span className="form-step">01</span>
                    <div>
                      <h3>Personal Information</h3>
                      <p>Tell us how we can contact you.</p>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        autoComplete="tel"
                        pattern="[0-9+() -]{7,20}"
                        title="Enter a valid phone number."
                        required
                      />
                    </div>
                  </div>

                  <div className="booking-divider" />

                  <div className="booking-form-heading">
                    <span className="form-step">02</span>
                    <div>
                      <h3>Your Travel Plans</h3>
                      <p>Choose a destination and travel details.</p>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Destination / Package *</label>
                      <select
                        className="form-select"
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        required
                      >
                        {tourOptions.map((tour) => (
                          <option key={tour.name} value={tour.name}>
                            {tour.name} — {tour.location}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Departure Date *</label>
                      <input
                        type="date"
                        className="form-control"
                        name="departure"
                        min={today}
                        value={form.departure}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Travellers *</label>
                      <select
                        className="form-select"
                        name="travellers"
                        value={form.travellers}
                        onChange={handleChange}
                      >
                        <option value="1">1 Traveller</option>
                        <option value="2">2 Travellers</option>
                        <option value="3">3 Travellers</option>
                        <option value="4">4 Travellers</option>
                        <option value="5">5 Travellers</option>
                        <option value="6">6 Travellers</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Trip Duration</label>
                      <select
                        className="form-select"
                        name="days"
                        value={form.days}
                        onChange={handleChange}
                      >
                        <option value="2">2 Days / 1 Night</option>
                        <option value="3">3 Days / 2 Nights</option>
                        <option value="4">4 Days / 3 Nights</option>
                        <option value="5">5 Days / 4 Nights</option>
                        <option value="7">7 Days / 6 Nights</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Estimated Budget</label>
                      <div className="budget-display">
                        ₹{total.toLocaleString("en-IN")}
                        <small> / based on selected travellers</small>
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        className="form-control"
                        name="requests"
                        value={form.requests}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Hotel preferences, sightseeing, or other requests..."
                      />
                    </div>
                  </div>

                  <div className="booking-submit-area">
                    <button
                      type="submit"
                      className="booking-primary-btn w-100"
                    >
                      Submit Booking Request <span>→</span>
                    </button>
                    <p>
                      <span>🔒</span> Your information is used for this
                      demo request only.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Summary card */}
          <div className="col-lg-4">
            <aside className="booking-summary">
              <div className="summary-image">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80"
                  alt="Beautiful mountain lake travel destination"
                />
                <span className="summary-image-label">TRAVELGO PICKS</span>
              </div>

              <div className="summary-content">
                <span className="summary-label">YOUR TRIP SUMMARY</span>
                <h3>{selectedTour?.name}</h3>
                <p className="summary-location">
                  <span>⌖</span> {selectedTour?.location}
                </p>

                <div className="summary-line">
                  <span>Departure</span>
                  <strong>{form.departure || "Select a date"}</strong>
                </div>

                <div className="summary-line">
                  <span>Travellers</span>
                  <strong>{form.travellers}</strong>
                </div>

                <div className="summary-line">
                  <span>Duration</span>
                  <strong>{form.days} days</strong>
                </div>

                <div className="summary-line">
                  <span>Price per traveller</span>
                  <strong>
                    ₹{selectedTour?.price.toLocaleString("en-IN")}
                  </strong>
                </div>

                <div className="summary-total">
                  <span>Estimated Total</span>
                  <strong>₹{total.toLocaleString("en-IN")}</strong>
                </div>

                <p className="summary-note">
                  * Sample prices only. Final pricing and availability
                  must be confirmed before a real booking.
                </p>

                <div className="summary-benefits">
                  <p>✓ Personalised travel planning</p>
                  <p>✓ Support for your travel queries</p>
                  <p>✓ No payment collected on this demo page</p>
                </div>

                <Link to="/destination" className="summary-back-link">
                  ← Explore more destinations
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      
    </main>
  );
}
