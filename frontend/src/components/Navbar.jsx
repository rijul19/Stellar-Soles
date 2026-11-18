
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        STELLAR<span> SOLES.</span>
      </div>

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
  );
}

export default Navbar;
