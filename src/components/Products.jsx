const products = [
  {
    name: "Running Shoes",
    price: "$99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    name: "Headphones",
    price: "$149",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    name: "Smart Watch",
    price: "$199",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
];

export default function Products() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="cards">
        {products.map((item) => (
          <div className="card" key={item.name}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
