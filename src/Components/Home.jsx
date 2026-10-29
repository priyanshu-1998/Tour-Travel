
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Home.css";

const destinations = [
  {
    name: "Manali",
    region: "Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Goa",
    region: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Jaipur",
    region: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Leh Ladakh",
    region: "Ladakh, India",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Bali",
    region: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=85",
  },
];

const packages = [
  {
    name: "Manali Adventure",
    location: "Himachal Pradesh, India",
    duration: "4 Nights / 5 Days",
    price: 8999,
    tag: "Best Seller",
    image: destinations[0].image,
  },
  {
    name: "Goa Beach Holiday",
    location: "Goa, India",
    duration: "3 Nights / 4 Days",
    price: 6499,
    tag: "Popular",
    image: destinations[1].image,
  },
  {
    name: "Royal Rajasthan",
    location: "Jaipur, Rajasthan",
    duration: "5 Nights / 6 Days",
    price: 11999,
    tag: "Heritage",
    image: destinations[2].image,
  },
];

const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Home() {
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("1");
  const navigate = useNavigate();

  const searchTrips = (event) => {
    event.preventDefault();

    navigate("/destination", {
      state: {
        destination,
        travelDate,
        travellers,
      },
    });
  };

  const bookPackage = (item) => {
    navigate("/booking", {
      state: {
        destination: item.name,
        price: item.price,
      },
    });
  };

  return (
    <main className="travel-home">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-eyebrow">EXPLORE · DISCOVER · TRAVEL</span>

          <h1>
            Make Your Next Trip
            <br />
            <span>Unforgettable</span>
          </h1>

          <p>
            Explore the world's most beautiful destinations with
            TravelGo. Discover amazing places, great offers, and
            unforgettable experiences.
          </p>

          <Link to="/destination" className="home-primary-btn">
            Explore Destinations <span>→</span>
          </Link>
        </div>
      </section>

      {/* Destination search */}
      <section className="home-search-wrap">
        <form className="home-search-card" onSubmit={searchTrips}>
          <div className="home-search-field">
            <span className="home-search-icon">⌖</span>
            <div>
              <label htmlFor="home-destination">Where to?</label>
              <input
                id="home-destination"
                type="text"
                placeholder="Search destinations"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
              />
            </div>
          </div>

          <div className="home-search-field">
            <span className="home-search-icon">▦</span>
            <div>
              <label htmlFor="home-date">Travel date</label>
              <input
                id="home-date"
                type="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={travelDate}
                onChange={(event) => setTravelDate(event.target.value)}
              />
            </div>
          </div>

          <div className="home-search-field">
            <span className="home-search-icon">♙</span>
            <div>
              <label htmlFor="home-travellers">Travellers</label>
              <select
                id="home-travellers"
                value={travellers}
                onChange={(event) => setTravellers(event.target.value)}
              >
                <option value="1">1 Traveller</option>
                <option value="2">2 Travellers</option>
                <option value="3">3 Travellers</option>
                <option value="4">4 Travellers</option>
                <option value="5">5 Travellers</option>
                <option value="6">6 Travellers</option>
              </select>
            </div>
          </div>

          <button type="submit" className="home-search-btn">
            Search Trips →
          </button>
        </form>
      </section>

      {/* Destinations */}
      <section className="home-section home-destinations">
        <div className="home-section-heading">
          <div>
            <span className="home-eyebrow">POPULAR DESTINATIONS</span>
            <h2>Explore Top Destinations</h2>
            <p>
              Discover places that make your heart wander.
            </p>
          </div>

          <Link to="/destination" className="home-outline-btn">
            View All Destinations →
          </Link>
        </div>

        <div className="home-destination-grid">
          {destinations.map((item) => (
            <Link
              to="/destination"
              className="home-destination-card"
              key={item.name}
              state={{ destination: item.name }}
            >
              <div className="home-destination-image">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>

              <div className="home-destination-info">
                <span>⌖ {item.region}</span>
                <div>
                  <h3>{item.name}</h3>
                  <span className="home-round-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="home-benefits">
        <div className="home-benefit">
          <span>♢</span>
          <h3>Safe & Secure</h3>
          <p>Your safety is our priority.</p>
        </div>

        <div className="home-benefit">
          <span>₹</span>
          <h3>Best Price</h3>
          <p>Great deals for every traveller.</p>
        </div>

        <div className="home-benefit">
          <span>☏</span>
          <h3>24/7 Support</h3>
          <p>We're here to help anytime.</p>
        </div>

        <div className="home-benefit">
          <span>☆</span>
          <h3>Memorable Trips</h3>
          <p>Create memories for a lifetime.</p>
        </div>
      </section>

      {/* Packages */}
      <section className="home-section home-packages">
        <div className="home-packages-intro">
          <span className="home-eyebrow">BEST TRAVEL PACKAGES</span>
          <h2>Handpicked Travel Packages</h2>
          <p>
            Choose from our specially designed travel packages and
            create memories for a lifetime.
          </p>
          <Link to="/package" className="home-primary-btn">
            View All Packages →
          </Link>
        </div>

        <div className="home-package-grid">
          {packages.map((item) => (
            <article className="home-package-card" key={item.name}>
              <div className="home-package-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span>{item.tag}</span>
              </div>

              <div className="home-package-info">
                <h3>{item.name}</h3>
                <p>⌖ {item.location}</p>
                <p>▦ {item.duration}</p>

                <div className="home-package-bottom">
                  <div>
                    <strong>{money(item.price)}</strong>
                    <small> / person</small>
                  </div>

                  <button
                    type="button"
                    onClick={() => bookPackage(item)}
                    aria-label={`Book ${item.name}`}
                  >
                    →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promotional banner */}
      <section className="home-promo">
        <div>
          <span className="home-promo-script">Travel More,</span>
          <h2>Worry Less.</h2>
        </div>

        <p>
          Join happy travellers who trust TravelGo for their journeys.
        </p>

        <Link to="/booking" className="home-promo-btn">
          Book Your Trip →
        </Link>
      </section>

      {/* Testimonials */}
      <section className="home-section home-testimonials">
        <div className="home-section-heading">
          <div>
            <span className="home-eyebrow">TRAVELLER STORIES</span>
            <h2>What Our Travelers Say</h2>
            <p>Experiences and memories from our travel community.</p>
          </div>

          <Link to="/contact" className="home-outline-btn">
            Contact Us →
          </Link>
        </div>

        <div className="home-testimonial-grid">
          <article className="home-testimonial-card">
            <div className="home-reviewer">
              <div className="home-avatar">PS</div>
              <div>
                <h3>Priya Sharma</h3>
                <span>Delhi, India</span>
              </div>
            </div>
            <div className="home-stars">★★★★★</div>
            <p>
              "Amazing experience! Everything was well planned and
              the trip was truly memorable."
            </p>
          </article>

          <article className="home-testimonial-card">
            <div className="home-reviewer">
              <div className="home-avatar">RM</div>
              <div>
                <h3>Rahul Mehta</h3>
                <span>Mumbai, India</span>
              </div>
            </div>
            <div className="home-stars">★★★★★</div>
            <p>
              "A wonderful trip with great service. Planning our next
              holiday with TravelGo!"
            </p>
          </article>

          <article className="home-testimonial-card">
            <div className="home-reviewer">
              <div className="home-avatar">SV</div>
              <div>
                <h3>Sneha Verma</h3>
                <span>Bengaluru, India</span>
              </div>
            </div>
            <div className="home-stars">★★★★★</div>
            <p>
              "Beautiful destinations and helpful support made our
              vacation special."
            </p>
          </article>
        </div>
      </section>

      {/* Newsletter */}
      <section className="home-newsletter">
        <div>
          <h2>✉ Get Travel Updates</h2>
          <p>Discover new destinations, travel tips, and special offers.</p>
        </div>

        <form
          className="home-newsletter-form"
          onSubmit={(event) => {
            event.preventDefault();
            window.alert("Thanks for your interest in TravelGo!");
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
          />
          <button type="submit">Subscribe →</button>
        </form>
      </section>
    </main>
  );
}
