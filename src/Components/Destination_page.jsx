import { useState } from "react";

import "./Css/Destination_page.css";
function Destination_page (){
  const destinations = [
  {
    name: "Manali",
    location: "Himachal Pradesh, India",
    category: "Mountains",
    price: "₹6,999",
    rating: "4.8",
    reviews: "2.4k",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Goa",
    location: "Goa, India",
    category: "Beaches",
    price: "₹5,999",
    rating: "4.7",
    reviews: "3.1k",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jaipur",
    location: "Rajasthan, India",
    category: "Heritage",
    price: "₹7,999",
    rating: "4.6",
    reviews: "2.8k",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Leh Ladakh",
    location: "Ladakh, India",
    category: "Adventure",
    price: "₹9,999",
    rating: "4.9",
    reviews: "1.9k",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Singapore",
    location: "Singapore",
    category: "Cities",
    price: "₹14,999",
    rating: "4.5",
    reviews: "2.1k",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bali",
    location: "Indonesia",
    category: "Beaches",
    price: "₹12,999",
    rating: "4.8",
    reviews: "2.7k",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "All",
  "Mountains",
  "Beaches",
  "Cities",
  "Heritage",
  "Adventure",
];
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredDestinations = destinations.filter((place) => {
    const matchesCategory =
      category === "All" || place.category === category;

    const matchesSearch =
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.location.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  function toggleFavorite(name) {
    setFavorites((previous) =>
      previous.includes(name)
        ? previous.filter((item) => item !== name)
        : [...previous, name]
    );
  }

  function exploreTrip(place) {
    alert(
      `You selected ${place.name}!\nStarting price: ${place.price}`
    );
  }

return (



 
    <div className="travel-page">
      {/* Hero Section */}
      <section className="destination-hero">
        <div className="container">
          <div className="hero-text">
            <span className="hero-subtitle">Explore The World</span>
            <h1>
              Discover Your
              <br />
              Next Destination
            </h1>
            <p>
              From majestic mountains to serene beaches, find
              the perfect place for your next adventure.
            </p>
            <a href="#destination-list" className="btn travel-btn">
              Explore Destinations →
            </a>
          </div>
        </div>
      </section>

      {/* Destination Categories */}
      <section className="container destination-content" id="destination-list">
        <div className="category-list">
          {categories.map((item) => (
            <button
              key={item}
              className={`category-btn ${
                category === item ? "active" : ""
              }`}
              onClick={() => setCategory(item)}
            >
              {item === "All" && "✦"}
              {item === "Mountains" && "♧"}
              {item === "Beaches" && "☀"}
              {item === "Cities" && "▦"}
              {item === "Heritage" && "⌂"}
              {item === "Adventure" && "◇"}
              <span>{item}</span>
            </button>
          ))}
        </div>

        {/* Section Heading and Search */}
        <div className="destination-heading text-center">
          <span className="section-label">POPULAR DESTINATIONS</span>
          <h2>Top Destinations</h2>
          <p>
            Explore some of the most beautiful and exciting
            places around the world.
          </p>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-6 col-lg-4">
            <input
              type="search"
              className="form-control destination-search"
              placeholder="Search destinations..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search destinations"
            />
          </div>
        </div>

        {/* Destination Cards */}
        <div className="row g-4">
          {filteredDestinations.map((place) => (
            <div className="col-12 col-md-6 col-lg-4" key={place.name}>
              <div className="destination-card">
                <div className="destination-image">
                  <img src={place.image} alt={place.name} loading="lazy" />

                  <span className="destination-badge">
                    {place.category}
                  </span>

                  <button
                    className={`favorite-btn ${
                      favorites.includes(place.name) ? "favorited" : ""
                    }`}
                    onClick={() => toggleFavorite(place.name)}
                    aria-label={`${
                      favorites.includes(place.name)
                        ? "Remove"
                        : "Add"
                    } ${place.name} ${"favorite"}`}
                  >
                    {favorites.includes(place.name) ? "♥" : "♡"}
                  </button>
                </div>

                <div className="destination-info">
                  <h3>{place.name}</h3>

                  <p className="destination-location">
                    <span>⌖</span> {place.location}
                  </p>

                  <div className="destination-meta">
                    <span className="rating">
                      ★ {place.rating}
                      <small> ({place.reviews} reviews)</small>
                    </span>

                    <div className="destination-price">
                      <small>Starting from</small>
                      <strong>{place.price}</strong>
                    </div>
                  </div>

                  <button
                    className="view-details-btn"
                    onClick={() => exploreTrip(place)}
                  >
                    View Details <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredDestinations.length === 0 && (
            <div className="col-12 text-center py-5">
              <h4>No destinations found</h4>
              <p>Try searching for another destination.</p>
              <button
                className="btn travel-btn"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Show All Destinations
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-travel">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-4">
              <div className="travel-illustration">
                <span>✈</span>
                <h3>Collect Moments</h3>
                <p>Not Things ♡</p>
              </div>
            </div>

            <div className="col-lg-8">
              <span className="section-label">WHY CHOOSE US</span>
              <h2>Your Trusted Travel Partner</h2>

              <div className="row g-3 mt-3">
                <div className="col-6 col-md-3">
                  <div className="benefit">
                    <span>♢</span>
                    <h4>Safe & Secure</h4>
                    <p>Your safety is our priority.</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="benefit">
                    <span>₹</span>
                    <h4>Best Price</h4>
                    <p>Great value for your trips.</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="benefit">
                    <span>☏</span>
                    <h4>24/7 Support</h4>
                    <p>We're here to help anytime.</p>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div className="benefit">
                    <span>☆</span>
                    <h4>Memorable Trips</h4>
                    <p>Create memories for a lifetime.</p>
                  </div>
                </div>
              </div>

              <a href="/booking" className="btn travel-btn mt-3">
                Plan Your Trip →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
 

);
}
export default Destination_page;