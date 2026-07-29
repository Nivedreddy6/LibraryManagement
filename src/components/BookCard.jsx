import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

function BookCard({ book, onDelete }) {
  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(addFavorite(book));
  }

  return (
    <div className="card">
      <img
        src={book.image}
        alt={book.name}
      />

      <h3>{book.name}</h3>

      <p>{book.country}</p>

      <p>{book.category}</p>

      <p>⭐ {book.rating}</p>

      <button
        className="favorite-btn"
        onClick={handleFavorite}
      >
        ❤ Add To Favorites
      </button>

      <div className="card-actions">
        <Link
          className="view-btn"
          to={`/books/${book.id}`}
        >
          View
        </Link>

        <Link
          className="edit-btn"
          to={`/edit-book/${book.id}`}
        >
          Edit
        </Link>

        {onDelete && (
          <button
            className="delete-btn"
            onClick={() => onDelete(book.id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default BookCard;
