
function ProductCard({ name, price, category, image }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <p className="product-category">{category}</p>

      <h3>{name}</h3>

      <p className="product-price">₹{price}</p>

      <button className="product-button">
        View Product
      </button>

    </div>
  );
}

export default ProductCard;
