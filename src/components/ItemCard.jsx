import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://promotionalwears.com/image/cache/catalog/data/PBG/metal-grip-pen-blue-with-logo_compressed-500x500.webp"}
        alt={item.name}
        className="card-image"
      />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Discount Percentage:</strong> {item.discountPercentage}%</p>
      <p>{item.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;