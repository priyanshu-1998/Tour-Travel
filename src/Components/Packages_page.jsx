
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Css/Packages_page.css';

const packages = [
  {
    id: 1,
    name: "Manali Adventure",
    location: "Himachal Pradesh, India",
    category: "Adventure",
    price: 8999,
    duration: "4 Nights / 5 Days",
    rating: 4.8,
    reviews: "2.4k",
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=85",
    highlights: ["Breakfast Included", "Sightseeing", "Mountain Adventure"],
  },
  {
    id: 2,
    name: "Goa Beach Holiday",
    location: "Goa, India",
    category: "Family",
    price: 6499,
    duration: "3 Nights / 4 Days",
    rating: 4.7,
    reviews: "3.1k",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85",
    highlights: ["Breakfast Included", "Beach Activities", "Water Sports"],
  },
  {
    id: 3,
    name: "Royal Rajasthan",
    location: "Jaipur, Rajasthan",
    category: "Family",
    price: 11999,
    duration: "5 Nights / 6 Days",
    rating: 4.6,
    reviews: "2.8k",
    tag: "Heritage",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=85",
    highlights: ["Breakfast Included", "City Tour", "Culture & Heritage"],
  },
  {
    id: 4,
    name: "Leh Ladakh Escape",
    location: "Ladakh, India",
    category: "Adventure",
    price: 12999,
    duration: "6 Nights / 7 Days",
    rating: 4.9,
    reviews: "1.9k",
    tag: "Adventure",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    highlights: ["Breakfast & Dinner", "Trekking", "Mountain Sightseeing"],
  },
  {
    id: 5,
    name: "Bali Getaway",
    location: "Indonesia",
    category: "International",
    price: 18999,
    duration: "5 Nights / 6 Days",
    rating: 4.8,
    reviews: "2.7k",
    tag: "International",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85",
    highlights: ["Breakfast Included", "Beach & Culture", "Temple Visits"],
  },
  {
    id: 6,
    name: "Singapore Explorer",
    location: "Singapore",
    category: "International",
    price: 22999,
    duration: "4 Nights / 5 Days",
    rating: 4.5,
    reviews: "2.1k",
    tag: "City Escape",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85",
    highlights: ["Breakfast Included", "City Tour", "Shopping"],
  },
  {
    id: 7,
    name: "Romantic Udaipur",
    location: "Udaipur, Rajasthan",
    category: "Honeymoon",
    price: 14999,
    duration: "3 Nights / 4 Days",
    rating: 4.9,
    reviews: "1.5k",
    tag: "Romantic",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=85",
    highlights: ["Lake View Stay", "Romantic Dinner", "City Sightseeing"],
  },
  {
    id: 8,
    name: "Maldives Luxury",
    location: "Maldives",
    category: "Luxury",
    price: 34999,
    duration: "4 Nights / 5 Days",
    rating: 4.9,
    reviews: "1.2k",
    tag: "Luxury",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85",
    highlights: ["Beach Resort", "Island Tour", "Water Activities"],
  },
];

const categories = [
  "All Packages",
  "Honeymoon",
  "Adventure",
  "Family",
  "International",
  "Luxury",
];

const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Packages() {
  const [category, setCategory] = useState("All Packages");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const filteredPackages = useMemo(() => {
    return packages.filter((item) => {
      const matchesCategory =
        category === "All Packages" || item.category === category;

      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
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
    <main className="packages-page">
      {/* Hero */}
      <section className="packages-hero">
        <div className="packages-hero-content">
          <span className="packages-eyebrow">YOUR NEXT ADVENTURE STARTS HERE</span>
          <h1>
            Explore Handpicked
            <br />
            <span>Travel Packages</span>
          </h1>
          <p>
            From peaceful beaches to majestic mountains, discover
            unforgettable journeys crafted just for you.
          </p>
          <a href="#featured-packages" className="packages-hero-btn">
            Explore Packages <span>→</span>
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="packages-main">
        <div className="package-categories">
          {categories.map((item) => (
            <button
              key={item}
              className={`category-btn ${
                category === item ? "active" : ""
              }`}
              onClick={() => setCategory(item)}
            >
              <span className="category-icon">
                {item === "All Packages" && "✦"}
                {item === "Honeymoon" && "♡"}
                {item === "Adventure" && "△"}
                {item === "Family" && "♧"}
                {item === "International" && "✈"}
                {item === "Luxury" && "♛"}
              </span>
              {item}
            </button>
          ))}
        </div>

        {/* Heading and search */}
        <div className="packages-heading" id="featured-packages">
          <span className="packages-eyebrow">DISCOVER THE WORLD</span>
          <h2>Featured Tour Packages</h2>
          <p>Find the perfect trip for your next memorable holiday.</p>

          <div className="packages-search">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search destinations or packages..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>

        {/* Package cards */}
        <div className="packages-grid">
          {filteredPackages.map((item) => (
            <article className="package-card" key={item.id}>
              <div className="package-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="package-image"
                  loading="lazy"
                />

                <span className="package-tag">{item.tag}</span>

                <button
                  className={`favorite-btn ${
                    favorites.includes(item.id) ? "favorited" : ""
                  }`}
                  onClick={() => toggleFavorite(item.id)}
                  aria-label={
                    favorites.includes(item.id)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  {favorites.includes(item.id) ? "♥" : "♡"}
                </button>
              </div>

              <div className="package-info">
                <h3>{item.name}</h3>

                <p className="package-location">
                  <span>⌖</span> {item.location}
                </p>

                <div className="package-rating">
                  <span>★</span> {item.rating}{" "}
                  <small>({item.reviews} reviews)</small>
                </div>

                <div className="package-divider" />

                <div className="package-detail">
                  <span>▦</span>
                  <span>{item.duration}</span>
                </div>

                {item.highlights.map((highlight) => (
                  <div className="package-detail" key={highlight}>
                    <span>✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}

                <div className="package-price-row">
                  <div>
                    <small>Starting from</small>
                    <strong>{money(item.price)}</strong>
                    <small> / person</small>
                  </div>
                </div>

                <button
                  className="package-book-btn"
                  onClick={() => bookPackage(item)}
                >
                  Book This Package <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="packages-empty">
            <h3>No packages found</h3>
            <p>Try another destination or choose a different category.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All Packages");
              }}
            >
              Show All Packages
            </button>
          </div>
        )}
      </section>

      {/* Why choose us */}
      <section className="packages-benefits">
        <div className="benefits-heading">
          <span className="packages-eyebrow">WHY TRAVELGO?</span>
          <h2>Your Trusted Travel Partner</h2>
          <p>Travel more, worry less, and make every moment count.</p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-item">
            <span>♢</span>
            <h3>Safe & Secure</h3>
            <p>Your comfort and safety matter to us.</p>
          </div>
          <div className="benefit-item">
            <span>₹</span>
            <h3>Best Prices</h3>
            <p>Great experiences at affordable prices.</p>
          </div>
          <div className="benefit-item">
            <span>☏</span>
            <h3>Travel Support</h3>
            <p>We are here to help with your trip.</p>
          </div>
          <div className="benefit-item">
            <span>☆</span>
            <h3>Memorable Trips</h3>
            <p>Collect memories that last a lifetime.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="packages-cta">
        <div>
          <h2>Ready for Your Next Adventure?</h2>
          <p>Your dream destination is just one booking away.</p>
        </div>
        <Link to="/booking" className="packages-cta-btn">
          Plan Your Trip →
        </Link>
      </section>
    </main>
  );
}
