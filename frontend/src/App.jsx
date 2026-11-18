
import './App.css';
import hero from './assets/hero.png';

function App() {
  return (
    <div className="website">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">STELLAR<span> SOLES.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#collection">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-icons">
          <a href="#account">Account</a>
          <a href="#cart">Cart (0)</a>
        </div>
      </nav>

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
          <div className="product-card">
            <div className="product-placeholder">01</div>
            <h3>Classic Sneakers</h3>
            <p>₹2,499</p>
          </div>

          <div className="product-card">
            <div className="product-placeholder">02</div>
            <h3>Urban Runners</h3>
            <p>₹3,299</p>
          </div>

          <div className="product-card">
            <div className="product-placeholder">03</div>
            <h3>Everyday Comfort</h3>
            <p>₹2,799</p>
          </div>
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

      {/* Footer */}
      <footer id="contact">
        <h2>STELLAR SOLES.</h2>
        <p>Step into your style.</p>
        <p>© 2026 Stellar Soles. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
