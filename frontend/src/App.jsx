
import './App.css';
import hero from './assets/hero.png';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="website">

      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="subtitle">NEW COLLECTION 2026</p>

          <h1>
            FIND YOUR
            <br />
            PERFECT STEP.
          </h1>

          <p className="hero-description">
            Discover footwear that combines comfort,
            quality and timeless style.
          </p>

          <a href="#collection" className="shop-button">
            SHOP NOW →
          </a>
        </div>

        <div className="hero-image">
          <img src={hero} alt="Stellar Soles shoe collection" />
        </div>

      </section>

      {/* Featured Collection */}
      <section className="collection" id="collection">

        <p className="subtitle">CURATED FOR YOU</p>

        <h2>FEATURED COLLECTION</h2>

        <p className="section-description">
          Step into something extraordinary.
        </p>

        <div className="product-grid">

          <ProductCard
            name="Classic Sneakers"
            price="2499"
            category="Casual"
            image={hero}
          />

          <ProductCard
            name="Urban Runners"
            price="3299"
            category="Sports"
            image={hero}
          />

          <ProductCard
            name="Everyday Comfort"
            price="2799"
            category="Lifestyle"
            image={hero}
          />

        </div>

      </section>

      {/* About Section */}
      <section className="about" id="about">

        <p className="subtitle">OUR PHILOSOPHY</p>

        <h2>MADE FOR EVERY STEP.</h2>

        <p>
          At Stellar Soles, we believe great footwear
          should look good and feel even better.
          Find your style and make every step count.
        </p>

      </section>

      <Footer />

    </div>
  );
}

export default App;
